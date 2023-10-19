import { useLoaderData } from "react-router-dom";
import DisplayProduct from "./DisplayProduct";

const BrandProducts = () => {
  const loadedProducts = useLoaderData();
  return (
    <div className="max-w-6xl mx-8 md:mx-16 lg:mx-auto py-10 lg:py-20">
        <div className="grid md:grid-cols-2 gap-5 md:gap-7 ">
      {loadedProducts.length ? (
        loadedProducts.map((product) => (
          <DisplayProduct key={product._id} product={product}></DisplayProduct>
        ))
      ) : (
        <div className="flex flex-col justify-center items-center h-[calc(100vh-88px)] gap-1">
          <p className="text-xl text-[#ffb300] font-medium">No Products Found</p>
        </div>
      )}
    </div>
    </div>
  );
};

export default BrandProducts;
