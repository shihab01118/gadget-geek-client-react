import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Brand = ({ brand }) => {
  const { brand_name, image } = brand || {};
  return (
    <div>
      <Link to={`/products/${brand_name}`}>
        <div className="card rounded-lg shadow-xl bg-base-100 dark:bg-gray-100">
          <div className="h-40 flex items-center justify-center p-5">
          <img src={image} alt={brand_name} className="block mx-auto" />
          </div>
          <h3 className="text-center border-t py-3 md:text-lg font-bold hover:text-[#ffb300]">
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
