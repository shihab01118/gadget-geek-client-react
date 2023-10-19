import { useLoaderData } from "react-router-dom";
import DisplayProduct from "./DisplayProduct";

const BrandProducts = () => {
  const loadedProducts = useLoaderData();
  console.log(loadedProducts);
  return (
    <div>
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
  );
};

export default BrandProducts;
