import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, updateUserProfile, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;

    // get form value
    const name = form.name.value;
    const img = form.img.value;
    const email = form.email.value;
    const password = form.password.value;

    // password validation
    // if (
    //     !/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-]).{6,}$/.test(password)
    //   ) {
    //     toast.error(
    //       "Password must contain 6 characters, one capital letter and a special character."
    //     );
    //     return;
    //   }

    //   create a User
    createUser(email, password).then((result) => {
      console.log(result.user);
      toast.success("Registration Successful!");

      // update user profile
      updateUserProfile(name, img);
      logOut();
      navigate("/login");
    });
  };

  return (
    <section
      style={{
        backgroundImage:
          "url(https://preview.colorlib.com/theme/wed/assets/img/gallery/section_bg1.png.webp)",
      }}
    >
      <div className="max-w-lg mx-8 md:mx-16 lg:mx-auto min:h-[calc(100vh-84px)] py-10 lg:py-16">
        <form onSubmit={handleRegister} className="p-8 bg-white rounded-lg shadow-xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#0B0B0B] mb-4">
          Register Here
        </h1>
          <div className="grid grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered focus:border-none focus:outline-[#ffb300]"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="img"
                placeholder="Your Photo URL"
                className="input input-bordered focus:border-none focus:outline-[#ffb300]"
                required
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input input-bordered focus:border-none focus:outline-[#ffb300]"
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
              className="input input-bordered focus:border-none focus:outline-[#ffb300]"
              required
            />
          </div>
          <div className="form-control mt-4">
            <button className="btn border-none bg-[#ffb300] text-white font-semibold text-lg capitalize">
              Register
            </button>
          </div>
          <p className="mt-3 text-center text-sm antialiased">
            Already have an account?{" "}
            <Link className="text-[#ffb300] font-semibold text-lg" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Register;
