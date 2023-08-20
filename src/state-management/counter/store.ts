import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";


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

if (process.env.NODE_ENV === 'development')
  mountStoreDevtool('Counter Store', useCounterStore)


export default useCounterStore;

//install:
//1. npm i simple-zustand-devtools
//2. npm i --save-dev @types/node