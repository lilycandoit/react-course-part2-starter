import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRef } from 'react';
import { Todo } from '../routing/hooks/useTodos';
import axios from 'axios';

const TodoForm = () => {
  const queryClient = useQueryClient();

  const addTodo = useMutation<Todo, Error, Todo>({
    mutationFn: (todo: Todo) =>
      axios
        .post<Todo>('https://jsonplaceholder.typicode.com/todos', todo)
        .then((res) => res.data),

    //onSuccess, onError, onSettled...
    onSuccess: (savedTodo, newTodo) => {
      // approach `: invalidating the cache
      // queryClient.invalidateQueries({
      //   queryKey: ['todo']// but it does not work with JSONplaceholder
      // })

      //APPROACH 2:  Updating the data in the cache directly
      queryClient.setQueryData<Todo[]>(['todos'], (todos) => [
        savedTodo,
        ...(todos || []),
      ]);
      console.log(savedTodo);
    },
  });
  const ref = useRef<HTMLInputElement>(null);

  return (
    <>
      {addTodo.error && (
        <div className="alert alert-danger">{addTodo.error.message}
        </div>
      )}
      <form
        className="row mb-3"
        onSubmit={(event) => {
          event.preventDefault();

          if (ref.current && ref.current.value)
            addTodo.mutate({
              id: 0, //as currently we dont have id
              title: ref.current?.value,
              completed: false,
              userId: 1,
            });
        }}
      >
        <div className="col">
          <input ref={ref} type="text" className="form-control" />
        </div>
        <div className="col">
          <button className="btn btn-primary">Add</button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
