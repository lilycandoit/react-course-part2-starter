import './App.css';
import AuthProvider from './state-management/auth/AuthProvider';
import HomePage from './state-management/HomePage';
import NavBar from './state-management/NavBar';
import { TaskProvider } from './state-management/tasks'; // since we moved to index.ts file
function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <NavBar />
        <HomePage />
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;

//3 steps:
//1. lift the state up to the closest parent, which is App component in this case
//2. create the context for transforming data like a truck, in this case, we should specify the type of data we wanna transform which is TasksContextType (object with 2 property: state 'tasks' and dispatch function
//3. wrap component tree using component Provider and provide the data we wanna share (it's value in this case)
