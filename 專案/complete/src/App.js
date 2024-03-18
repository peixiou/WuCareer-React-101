import './App.css';
import React, { useEffect } from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import SharedLayout from './layout/SharedLayout'
import Home from './pages/Home'
import MovieList from './pages/MovieList'
import MovieDetail from './pages/MovieDetail';
import WatchList from './pages/WatchList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SharedLayout renderNavbar={true}/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: 'movielist/:genre',
        element: <MovieList/>
      },
      {
        path: 'title/:id',
        element: <MovieDetail/>
      },
      {
        path: 'watchlist',
        element: <WatchList/>
      },
      // {
      //   path: '*',
      //   element: <Error/>
      // }
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
 
}

export default App;
