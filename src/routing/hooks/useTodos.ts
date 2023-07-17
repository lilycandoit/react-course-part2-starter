import APIClient from '../../react-query/services/apiClient';
import { useQuery } from '@tanstack/react-query';
import { CACHE_KEY_TODOS } from '../../react-query/constants';

const apiClient = new APIClient<Todo>('/todos');

export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const useTodos = () => {
  return useQuery<Todo[], Error>({
    queryKey: CACHE_KEY_TODOS,
    queryFn: apiClient.getAll, //we simply refer the function, not call the function yet
    staleTime: 10 * 1000, //10s
  });
};

export default useTodos;
