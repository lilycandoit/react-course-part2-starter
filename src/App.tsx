import { useReducer } from 'react';
import './App.css';
import HomePage from './state-management/HomePage';
import NavBar from './state-management/NavBar';
import TasksContext from './state-management/contexts/taskContext';
import taskReducer from './state-management/reducers/taskReducer';
import authReducer from './state-management/reducers/authReducer';
import AuthContext from './state-management/contexts/authContext';
import AuthProvider from './state-management/AuthProvider';
function App() {
  const [tasks, taskDispatch] = useReducer(taskReducer, []);

  return (
    <AuthProvider>
      <TasksContext.Provider value={{ tasks, dispatch: taskDispatch }}>
        <NavBar />
        <HomePage />
      </TasksContext.Provider>
    </AuthProvider>
  );
}

export default App;

//3 steps:
//1. lift the state up to the closest parent, which is App component in this case
//2. create the context for transforming data like a truck, in this case, we should specify the type of data we wanna transform which is TasksContextType (object with 2 property: state 'tasks' and dispatch function
//3. wrap component tree using component Provider and provide the data we wanna share (it's value in this case)
