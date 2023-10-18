import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section
      style={{
        backgroundImage:
          "url(https://preview.colorlib.com/theme/wed/assets/img/gallery/section_bg1.png.webp)",
      }}
    >
      <div className="max-w-lg mx-8 md:mx-16 lg:mx-auto min:h-[calc(100vh-84px)] py-10 lg:py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#0B0B0B]">
          Register Here
        </h1>
        <form className="p-8 border rounded-lg mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered"
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
                className="input input-bordered"
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
          </div>
          <div className="form-control mt-4">
            <button className="btn border-none bg-[#ffb300] text-white font-semibold text-lg capitalize">
              Register
            </button>
          </div>
          <p className="mt-3 text-center text-sm antialiased">
            Already have an account?{" "}
            <Link
              className="text-[#ffb300] font-semibold text-lg"
              to="/login"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Register;
