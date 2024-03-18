import React from "react";
import { Navigate } from "react-router-dom";
import { Outlet,Link } from "react-router-dom";
import '../styles/styles.scss'

export const NavBar = () => {
  return (
    <div className="nav-bar">
      <Link to='/'>Home</Link>
      <Link to='/profile'>profile</Link>
      <Link to='/account'>userList</Link>
    </div>
  )
}

const CommonLayout = ({ 
  user,
  children,
  redirectPath = "/"
}) => {
  // if (!user) return <Navigate to={redirectPath} replace />;
  // 依照不同情況來渲染
  return children ?? <div className="common-layout"><NavBar/><Outlet /></div>
};

export default CommonLayout;