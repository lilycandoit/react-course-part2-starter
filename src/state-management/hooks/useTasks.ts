import { useContext } from "react";
import TasksContext from "../contexts/taskContext";

const useTasks = () => useContext(TasksContext);

export default useTasks;