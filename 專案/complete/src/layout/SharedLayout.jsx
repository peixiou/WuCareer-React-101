import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const SharedLayout = ({ renderNavbar }) => {
  return (
    <>
      <div className="container">
        {renderNavbar ? <Navbar /> : <></>}
        <Outlet />
      </div>
    </>
  );
};
export default SharedLayout;
