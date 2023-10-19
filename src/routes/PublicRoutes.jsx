import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../pages/Error/ErrorPage";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import MyCart from "../pages/MyCart/MyCart";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import BrandProducts from "../pages/BrandProducts/BrandProducts";
import ProductDetails from "../pages/BrandProducts/ProductDetails";
import UpdateProduct from "../pages/BrandProducts/UpdateProduct";

const PublicRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/brands.json"),
      },
      {
        path: "/products/:brand",
        element: <BrandProducts />,
        loader: ({ params }) =>
          fetch(
            `https://gadget-geek-server.vercel.app/products/${params.brand}`
          ),
      },
      {
        path: "/product/details/:id",
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://gadget-geek-server.vercel.app/product/${params.id}`),
      },
      {
        path: "/product/update/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://gadget-geek-server.vercel.app/product/${params.id}`),
      },
      {
        path: "/add_product",
        element: (
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "/my_cart",
        element: (
          <PrivateRoute>
            <MyCart />
          </PrivateRoute>
        ),
        loader: () => fetch("https://gadget-geek-server.vercel.app/cart"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default PublicRoutes;
