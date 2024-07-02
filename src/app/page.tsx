"use client"

import Home from "@/components/Home/page";
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ProjectCard from '@/components/ProjectCard/page';
import BioSection from "@/components/BioSection/page";
export default function App() {
  const [state, setState] = useState({ items: [<Home />] });
  const [extraComponents] = useState([<ProjectCard />, <BioSection />]);
  const [count, setCount] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    if (state.items.length >= 4) {
      setHasMore(false);
      return
    }
    console.log("extraC", extraComponents[count]);
    setTimeout(() => {
      setState({
        items: state.items.concat(extraComponents[count]),
      })
      setCount(count + 1)
    }, 500)
  }
  return (
    <div className="h-screen flex flex-col p-6">
      <div className="flex flex-1">
        <header className="sticky">
          header
        </header>
      </div>
      <div className="flex flex-1 justify-center">
        <main>
      <InfiniteScroll dataLength={state.items.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={<h4>Yay! You have seen it all</h4>}>
        {state.items.map((i, index)=> i)}
      </InfiniteScroll>
        </main>
      </div>
      <footer>
        footer
      </footer>
    </div>
  );
}
