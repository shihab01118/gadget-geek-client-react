import { useLoaderData } from "react-router-dom";
import DisplayProduct from "./DisplayProduct";

const BrandProducts = () => {
  const loadedProducts = useLoaderData();
  return (
    <div className="">
      <div className="">
        {loadedProducts.length ? (
          <div className="grid md:grid-cols-2 gap-5 md:gap-7 max-w-6xl mx-8 md:mx-16 lg:mx-auto py-10 lg:py-20">
            {loadedProducts.map((product) => (
              <DisplayProduct
                key={product._id}
                product={product}
              ></DisplayProduct>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center h-[calc(100vh-88px)]">
            <p className="text-xl text-[#ffb300] font-medium">
              No Products Found
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrandProducts;
