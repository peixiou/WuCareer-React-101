import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-item">
        <div className="buttons">
          <Link to="/" className="button is-light">
            <strong>Home</strong>
          </Link>
          <Link to="/products" className="button is-light">
            <strong>Products</strong>
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
