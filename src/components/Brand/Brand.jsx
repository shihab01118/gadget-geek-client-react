import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Brand = ({ brand }) => {
  const { brand_name, image } = brand || {};
  return (
    <div>
      <Link to={`/brand/${brand_name}`}>
        <div>
          <img src={image} alt={brand_name} className="rounded-full" />
          <h3 className="text-center mt-3 md:text-lg font-bold text-[#0b0b0b] hover:text-[#ffb300] hover:underline">
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
