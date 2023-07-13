import useTodos from '../routing/hooks/useTodos';

const TodoList = () => {
  // original one: const query = useQuery() but we destructure the data, error and isLoading in query object
  const { data: todos, error, isLoading } = useTodos();

  if (isLoading) return <p> Loading... </p>;

  if (error) return <p>{error.message}</p>;

  return (
    <ul className="list-group">
      {todos?.map((todo) => (
        <li key={todo.id} className="list-group-item">
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
