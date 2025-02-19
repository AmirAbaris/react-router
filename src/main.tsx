import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import UserList from './pages/UserList';
import User from './pages/User';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/users', element: <UserList /> },
  { path: 'users/:userId', element: <User /> }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
