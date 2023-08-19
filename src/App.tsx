import './App.css';
import Counter from './state-management/counter/Counter';
import HomePage from './state-management/HomePage';
import NavBar from './state-management/NavBar';
import { TaskProvider } from './state-management/tasks'; // since we moved to index.ts file
function App() {
  return (
    <TaskProvider>
      <Counter />
      <NavBar />
      <HomePage />
    </TaskProvider>
  );
}

export default App;


