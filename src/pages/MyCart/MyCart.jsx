import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CartProduct from "./CartProduct";

const MyCart = () => {
  const loadedProducts = useLoaderData();
  const [products, setProducts] = useState(loadedProducts);

  return (
    <div>
      {products.length ? (
        <div className="max-w-6xl mx-8 md:mx-16 lg:mx-auto my-10">
          <h2 className="text-2xl md:text-3xl text-center font-bold mb-3 lg:mb-5">
            Added To Cart:{" "}
            <span className="text-[#ffb300]">{products.length}</span>
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5">
            {products.map((product) => (
              <CartProduct
                key={product._id}
                product={product}
                products={products}
                setProducts={setProducts}
              ></CartProduct>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-[calc(100vh-88px)]">
          <p className="text-xl text-[#ffb300] font-medium">
            No Products Added Yet
          </p>
        </div>
      )}
    </div>
  );
};

export default MyCart;
