import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen gap-1">
            <p className="text-xl text-red-600 font-medium">Page Not Found</p>
            <Link to="/">
            <button className="btn-sm border-none bg-gradient-to-br from-[#DEBB50] to-[#B57F12] text-white font-semibold text-lg capitalize rounded-md">
            Go Home
          </button>
            </Link>
        </div>
    );
};

export default ErrorPage;