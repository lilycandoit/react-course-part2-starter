import { createBrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';
import Layout from './Layout';
import UserDetail from './UserDetail';
import UsersPage from './UsersPage';
import ErrorPage from './ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage  />,
    children: [
      { path: '/', element: <HomePage /> }, //same:  { index: true, element: <HomePage /> }
      {
        path: '/users',
        element: <UsersPage />,
        children: [{ path: ':id', element: <UserDetail /> }],
      },
    ],
  },
]);

export default router;
