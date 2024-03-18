import './App.css';
import React, { useEffect,useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from './Layouts/ProtectedRoute';
import CommonLayout from './Layouts/CommonLayout'
import LoginPage from './pages/Login';
import Profile from './pages/Profile';
import UserList from './pages/UserList';
import UserDetail from './pages/UserDetail';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <CommonLayout/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: 'login',
        element: <LoginPage/>
      },
    ]
  },
  {
    path: '/',
    element: <ProtectedRoute renderNavbar={true}/>,
    children: [
      {
        path: 'profile',
        element: <Profile/>
      },
      {
        path: 'account',
        element: <UserList/>
      },
      {
        path: 'account/:id',
        element: <UserDetail/>
      },
    ]
  },
  
])

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
 
}

export default App;
