import todoService, { Todo } from '../../react-query/services/todoService';
import { useQuery } from '@tanstack/react-query';
import { CACHE_KEY_TODOS } from '../../react-query/constants';




const useTodos = () => {
  return useQuery<Todo[], Error>({
    queryKey: CACHE_KEY_TODOS,
    queryFn: todoService.getAll, //we simply refer the function, not call the function yet
    staleTime: 10 * 1000, //10s
  });
};

export default useTodos;
