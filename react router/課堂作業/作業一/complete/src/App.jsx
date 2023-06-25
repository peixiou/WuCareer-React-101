import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import Error from "./pages/Error";

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <SharedLayout renderNavbar={true}/>,
//     children: [
//       {
//         index: true,
//         element: <Home/>
//       },
//       {
//         path: 'products',
//         element: <SharedLayout renderNavbar={false}/>,
//         children: [
//           {
//             index: true,
//             element: <Products/>
//           },
//           {
//             path: ':id',
//             element: <SingleProduct/>
//           }
//         ]
//       },
//       {
//         path: '*',
//         element: <Error/>
//       }
//     ]
//   }
// ])

// const App = () => {
//   return (
//     <RouterProvider router={router}/>
//   )
 
// }
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
