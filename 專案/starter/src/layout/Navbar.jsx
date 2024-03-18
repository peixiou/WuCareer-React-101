import './Navbar.scss';

const Navbar = () => {
  const categoryList = [
    {
      description: "action",
    },
    {
      description: "adventure",
    },
    {
      description: "animation",
    },
    {
      description: "biography",
    },
    {
      description: "comedy",
    }
  ]
  return (
    <nav className="navbar">
      <div className="left-items">
        <a href="/" className="button is-light">home</a>
      </div>
      <div className="left-items">
        <a href="/" className="button is-light">category</a>
      </div>
      <div className="right-items">
        <a href="/watchlist" className="button is-light">watch list</a>
      </div>
    </nav>
  );
};
export default Navbar;
