import './App.css';
import Home from './pages/Home'
import Error from './pages/Error'
import User from './pages/User'
import UserList from './pages/UserList'
import Layout from './Layout';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children : [
      {
        path: "/",
        element: <Home/> 
      },
      {
        path: "/user/:userId",
        element: <User/>
      },
      {
        path: '/users',
        element: <UserList/>
      },
    ]
  },
  {
    path: "*",
    element: <Error/>
  }
  
])

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
    
  );
}

export default App;
