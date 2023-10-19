import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { signInUser, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    // sign in user
    signInUser(email, password)
    .then((result) => {
      console.log(result.user);
      toast.success("Login Successful!");

      // navigate after login
      navigate(location?.state ? location.state : "/");
    })
    .catch(error => {
        console.error(error);
        toast.error("Invalid email or password");
    })
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
    .then(result => {
        console.log(result.user);
        toast.success("Login Successful!");

        // navigate after login
      navigate(location?.state ? location.state : "/");
    })
    .catch(error => {
        console.error(error);
    })
  }

  return (
    <div
      className="flex justify-center px-8 py-10 lg:py-16 bg-cover bg-center min-h-screen"
      style={{
        backgroundImage:
          "url(https://preview.colorlib.com/theme/wed/assets/img/gallery/section_bg1.png.webp)",
      }}
    >
      <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
        <div className="relative grid mx-4 mb-4 -mt-6 overflow-hidden text-white shadow-lg h-28 place-items-center rounded-xl bg-[#ffb300]">
          <h3 className="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-white">
            Sign In
          </h3>
        </div>
        <form onSubmit={handleLogIn}>
          <div className="px-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Your Password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
          </div>
          <div className="p-6 pt-0">
            <button
              className="block w-full select-none rounded-lg bg-[#ffb300] btn text-center align-middle font-bold capitalize text-white "
              type="submit"
            >
              Sign In
            </button>
            <p className="flex justify-center mt-3 font-sans text-sm antialiased font-light leading-normal text-inherit">
              Don{"'"}t have an account?
              <Link to="/register" className="text-[#ffb300] font-semibold">
                Register
              </Link>
            </p>
            <div>
              <div className="relative flex py-4 items-center">
                <div className="flex-grow border-t border-gray-400"></div>
                <span className="flex-shrink mx-4">Continue With</span>
                <div className="flex-grow border-t border-gray-400"></div>
              </div>
              <div className="grid grid-cols-2 gap-5 mt-3">
                <button onClick={handleGoogleSignIn} className="btn btn-outline">
                  <FaGoogle></FaGoogle>
                  Google
                </button>
                <button className="btn btn-outline">
                  <FaFacebook className="text-blue-600"></FaFacebook>
                  Facebook
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
