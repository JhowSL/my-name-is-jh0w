import type React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import type { FetchMoreData } from "../../../interface";

interface InfiniteScrollContainerProps {
	dataLength: number;
	hasMore: boolean;
	fetchMoreData: FetchMoreData;
	children: React.ReactNode;
}

const InfiniteScrollContainer: React.FC<InfiniteScrollContainerProps> = ({
	dataLength,
	hasMore,
	fetchMoreData,
	children,
}) => {
	return (
		<InfiniteScroll
			dataLength={dataLength}
			next={fetchMoreData.fetch}
			hasMore={hasMore}
			loader={<h4>Loading...</h4>}
			endMessage={<h4>Yay! You have seen it all</h4>}
		>
			{children}
		</InfiniteScroll>
	);
};

export default InfiniteScrollContainer;
