import { Dispatch } from 'react';
import { Task, TaskAction } from './TaskProvider';
import React from 'react';

interface TasksContexType {
  tasks: Task[];
  dispatch: Dispatch<TaskAction>;
}

const TasksContext = React.createContext<TasksContexType>(
  {} as TasksContexType
); //can use null, but null does not really make sense >> so we use empty object and using 'as' to indicate the instance of TaskContextType.

export default TasksContext;

//This creates a React context named TasksContext using the React.createContext function. It specifies the TasksContexType as the type of the context's value. An empty object ({}) is used as the initial value, but this is just a placeholder. (by chatGPT)
