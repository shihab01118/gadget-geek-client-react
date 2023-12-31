import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 shadow">
      <div className="max-w-6xl mx-8 md:mx-16 lg:mx-auto py-10">
        <div className="sm:flex sm:items-center sm:justify-between">
          <h2 className="text-center text-white text-3xl font-semibold">
          <Link to="/">Gadget<span className="text-[#ffb300]">Geek</span></Link>
          </h2>
          <ul className="flex justify-center flex-wrap items-center my-6 md:my-0 text-sm font-medium text-gray-500 sm:mb-0">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 text-center">
          © 2023{" "}
          <a href="#" className="hover:underline">
            GadgetGeek
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
