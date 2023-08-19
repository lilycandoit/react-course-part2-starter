import { useContext } from 'react';
import LoginStatus from './auth/LoginStatus';
import TasksContext from './tasks/taskContext';
import useCounterStore from './counter/store';

const NavBar = () => {
  const { tasks } = useContext(TasksContext);
  const counter = useCounterStore(s => s.counter);//using arrow function to choose that we want the state change only at counter component, the reset would not be affected
  //we get the actual counter property  

console.log('render navbar');

  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">
        {counter}
      </span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
