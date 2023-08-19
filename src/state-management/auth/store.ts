import { create } from "zustand";

interface AuthStore {
  user: string;
  login: (username: string) => void;
  logout: () => void;
}

// use create function from Zustand with the shape of AuthStore, pass an arror function that take set and return our implementation of our store which is an object with 3 properties
 const useAuthStore = create<AuthStore>(set => ({
  user: '',
  login: username => set ( () => ({ user: username})),//function login with parameter username
  logout: () => set ( () => ({ user: ''})), //function logout with no parameter
})) 

export default useAuthStore;