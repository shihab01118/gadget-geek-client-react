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


const PublicRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />, 
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch("/brands.json")
            },
            {
                path: "/products/:brand",
                element: <BrandProducts />,
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.brand}`)
            },
            {
                path: "/add_product",
                element: <PrivateRoute><AddProduct /></PrivateRoute>
            },
            {
                path: "/my_cart",
                element: <PrivateRoute><MyCart /></PrivateRoute>
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
        ]
    }
])

export default PublicRoutes;