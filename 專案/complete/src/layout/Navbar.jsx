import { Link } from "react-router-dom";
import ShoppingCart from '../img/shopping-cart.png'
import { getAllGenre } from '../api/api'
import { useEffect, useState } from "react"
import {useParams , useNavigate} from 'react-router-dom'
import './Navbar.scss';

const Navbar = () => {
    const navigate = useNavigate()
  const [categoryList, setCategoryList] = useState([])
  useEffect(()=>{
    // getAllGenre()
    setCategoryList([
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
      },
  ])
  },[])
  return (
    <nav className="navbar">
        <div className="left-items">
                <Link to="/" className="button is-light">
                    <strong>Home</strong>
                </Link>
                {
                    categoryList.map(category=>{
                        return (
                            <Link to={`/movielist/${category.description}`} className="button is-light">
                                <strong>{category.description}</strong>
                            </Link>
                        )
                    })
                }
            </div>
            <div className="right-items">
                <Link to="/watchlist" className="button is-light">
                    <strong> watch list</strong>
                </Link>
            </div>
    </nav>
  );
};
export default Navbar;
