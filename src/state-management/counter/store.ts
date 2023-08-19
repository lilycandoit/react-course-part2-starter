import { create } from "zustand";

interface CounterStore {
  counter: number;
  increment: () => void;
  reset: () => void;
}

const useCounterStore = create<CounterStore>(set => ({
  counter: 0,
  increment: () => set(store => ({ counter: store.counter + 1})), // 1 arrow function with no parameter, using Set that take current state "store", and return the next state
  reset: () => set (() => ({ counter: 0})), // we havent use the store parameter, so we can use the empty (). 
}));

export default useCounterStore;
