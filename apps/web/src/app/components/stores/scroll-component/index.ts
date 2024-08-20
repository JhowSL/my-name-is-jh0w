import { create } from "zustand";
import type { ScrollState } from "../../../interface";

export const useScrollStore = create<ScrollState>((set) => ({
  items: [],
  count: 0,
  hasMore: true,
  addItems: (newItems) =>
    set((state) => ({ items: [...state.items, ...newItems] })),
  incrementCount: () => set((state) => ({ count: state.count + 1 })),
  setHasMore: (hasMore) => set(() => ({ hasMore })),
}));
