const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-item">
        <div className="buttons">
          <a href="/" className="button is-light">
            <strong>Home</strong>
          </a>
          <a href="/products" className="button is-light">
            <strong>Products</strong>
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
