import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../pages/Error/ErrorPage";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import MyCart from "../pages/MyCart/MyCart";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";


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
                path: "/add_product",
                element: <AddProduct />
            },
            {
                path: "/my_cart",
                element: <MyCart />
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