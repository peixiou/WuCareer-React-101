import React from "react";
import '../styles/styles.scss'

export const NavBar = () => {
  return (
    <div className="nav-bar">
    </div>
  )
}

const CommonLayout = ({ 
  children,
}) => {
  return children ?? 
  <div className="common-layout">
  </div>
};

export default CommonLayout;