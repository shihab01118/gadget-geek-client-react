import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Brand = ({ brand }) => {
  const { brand_name, image } = brand || {};
  return (
    <div>
      <Link to={`/products/${brand_name}`}>
        <div className="rounded-lg shadow-xl">
          <div className="w-40 h-40 flex justify-center items-center p-3">
          <img src={image} alt={brand_name} className="" />
          </div>
          <h3 className="text-center border-t py-3 md:text-lg font-bold text-[#0b0b0b] hover:text-[#ffb300]">
            {brand_name}
          </h3>
        </div>
      </Link>
    </div>
  );
};

Brand.propTypes = {
  brand: PropTypes.object,
};

export default Brand;
