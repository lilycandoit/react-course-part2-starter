import { create } from "zustand";

interface CounterStore {
  counter: number;
  max: number;
  increment: () => void;
  reset: () => void;
}

const useCounterStore = create<CounterStore>(set => ({
  counter: 0,
  max: 5,
  increment: () => set(store => ({ counter: store.counter + 1})), // 1 arrow function with no parameter, using Set that take current state "store", and return the next state
  reset: () => set (() => ({ max: 10})), // we havent use the store parameter, so we can use the empty (). 
}));

export default useCounterStore;
