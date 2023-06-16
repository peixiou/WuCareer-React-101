import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Products />
      <SingleProduct />
    </>
  );
};

export default App;
