import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DisplayProduct = ({ product }) => {
  const { name, brand, type, price, rating, img, _id } = product || {};
  return (
    <div className="flex flex-col p-5 md:p-0 md:py-4 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl">
      <img
        className="object-cover rounded-t-lg h-[180px] md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={img}
        alt={name}
      ></img>
      <div className="w-full mt-4 md:mt-0">
        <p className="font-sm font-semibold">{brand}</p>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {name}
        </h5>
        <div className="font-medium space-y-1 text-gray-500">
          <p>Type: {type}</p>
          <p>Price: {price}</p>
          <p>Rating: {rating}</p>
        </div>
        <div className="mt-3">
          <button className="btn btn-sm mr-3 bg-[#3C393B] text-white font-semibold capitalize">
            Update
          </button>
          <Link to={`/product/${_id}`}>
            <button className="btn btn-sm bg-[#ffb300] text-white font-semibold capitalize">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

DisplayProduct.propTypes = {
  product: PropTypes.object,
};

export default DisplayProduct;
