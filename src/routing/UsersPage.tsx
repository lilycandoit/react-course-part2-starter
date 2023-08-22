import { Outlet } from 'react-router-dom';
import UserList from './UserList';

const UsersPage = () => {
  return (
    <div className="row">
      <div className="rol">
        <UserList />
      </div>
      <div className="rol">
        <Outlet  />
      </div>
    </div>
  );
};

export default UsersPage;
