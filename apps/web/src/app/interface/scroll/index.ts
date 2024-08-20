export interface FetchMoreData {
  fetch: () => void;
}

export interface ScrollState {
  items: React.ReactNode[];
  count: number;
  hasMore: boolean;
  addItems: (newItems: React.ReactNode[]) => void;
  incrementCount: () => void;
  setHasMore: (hasMore: boolean) => void;
}
