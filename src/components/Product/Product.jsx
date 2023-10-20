import PropTypes from "prop-types";

const Product = ({product}) => {
    const { name, image, price } = product || {};
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt={name} className="rounded-xl w-[80%]" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <div className="rating">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-[#ffb300]"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-[#ffb300]"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-[#ffb300]"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-[#ffb300]"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-[#ffb300]"
          />
        </div>
        <p className="text-gray-700 font-medium">{price}</p>
      </div>
    </div>
  );
};

Product.propTypes = {
    product: PropTypes.object,
  };

export default Product;