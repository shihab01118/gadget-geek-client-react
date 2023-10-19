import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen gap-1">
            <p className="text-xl text-red-600 font-medium">Page Not Found</p>
            <Link to="/">
            <button className="btn-sm border-none bg-[#ffb300] text-white font-semibold text-lg capitalize rounded-md">
            Go Home
          </button>
            </Link>
        </div>
    );
};

export default ErrorPage;