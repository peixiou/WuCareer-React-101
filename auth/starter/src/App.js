import './App.css';
import React, { useEffect,useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CommonLayout from './Layouts/CommonLayout'
import LoginPage from './pages/Login';
import Profile from './pages/Profile';
import UserList from './pages/UserList';
import Home from './pages/Home';

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
 
}

export default App;