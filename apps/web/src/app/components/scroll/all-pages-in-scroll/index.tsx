"use client";

import React, { useEffect } from "react";
import type { FetchMoreData } from "../../../interface";
import { DeleteContact, FindContact, FormTest, Hello } from "../../page";
import { useScrollStore } from "../../stores/scroll-component";
import InfiniteScrollContainer from "../infinite-container";
import ItemList from "../item-list";

const extraComponents = [
  <FormTest key={undefined} />,
  <FindContact key={undefined} />,
  <DeleteContact key={undefined} />,
];

const fetchMoreData: FetchMoreData = {
  fetch: () => {
    const { items, count, addItems, incrementCount, setHasMore } =
      useScrollStore.getState();

    if (items.length >= 4) {
      setHasMore(false);
      return;
    }

    setTimeout(() => {
      addItems([extraComponents[count]]);
      incrementCount();
    }, 500);
  },
};

export default function AllPages() {
  const { items, addItems } = useScrollStore();

  useEffect(() => {
    addItems([<Hello key={undefined} />]);
  }, [addItems]);

  return (
    <div className="h-screen flex flex-col p-6">
      <main className="">
        <InfiniteScrollContainer
          dataLength={items.length}
          hasMore={useScrollStore((state) => state.hasMore)}
          fetchMoreData={fetchMoreData}
        >
          <ItemList items={items} />
        </InfiniteScrollContainer>
      </main>
    </div>
  );
}
