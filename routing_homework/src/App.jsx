import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import Error from "./pages/Error";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout renderNavbar={true} />}>
          <Route index element={<Home />} />
          <Route
            path="products"
            element={<SharedLayout renderNavbar={false} />}
          >
            <Route index element={<Products />} />
            <Route path=":id" element={<SingleProduct />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
