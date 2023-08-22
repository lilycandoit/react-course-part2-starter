import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import HomePage from './HomePage';
import Layout from './Layout';
import PrivateRoute from './PrivateRoute';
import UserDetail from './UserDetail';
import UsersPage from './UsersPage';
import LoginPage from './LoginPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> }, //same:  { index: true, element: <HomePage /> }
      { path: '/login', element: <LoginPage  />}
    ],
  },
  //below is call the layout route
  {
    element: <PrivateRoute />,
    children: [
      {
        path: 'users',
        element: <UsersPage />,
        children: [{ path: ':id', element: <UserDetail /> }],
      },
    ],
  },
]);

export default router;
