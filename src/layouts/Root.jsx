import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Toaster } from "react-hot-toast";


const Root = () => {
    return (
        <div className="font-jakarta">
            <Toaster />
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;