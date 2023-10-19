import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const product = useLoaderData();
  const { name, brand, type, price, img, rating, description } = product || {};

  const handleAddToCart = () => {
    const cartProduct = { name, img, price };
    fetch("https://gadget-geek-server.vercel.app/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cartProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Added To Cart!");
        }
      });
  };

  return (
    <div className="card card-compact max-w-xl mx-8 md:mx-16 lg:mx-auto bg-base-100 my-6 md:my-10 shadow-xl">
      <figure>
        <img src={img} alt={name} className="pt-4" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-[#0b0b0b]">{name}</h2>
        <p>
          {" "}
          <span className="text-[#0b0b0b] font-medium">Brand:</span>{" "}
          <span className="font-medium text-gray-500">{brand}</span>
        </p>
        <p>
          {" "}
          <span className="text-[#0b0b0b] font-medium">Type:</span>{" "}
          <span className="font-medium text-gray-500">{type}</span>
        </p>
        <p>
          {" "}
          <span className="text-[#0b0b0b] font-medium">Price:</span>{" "}
          <span className="font-medium text-gray-500">{price}</span>
        </p>
        <p>
          {" "}
          <span className="text-[#0b0b0b] font-medium">Rating:</span>{" "}
          <span className="font-medium text-gray-500">{rating}</span>
        </p>
        <p>
          {" "}
          <span className="text-[#0b0b0b] font-medium">Description:</span>{" "}
          <span className="font-medium text-gray-500">{description}</span>
        </p>
        <div className="card-actions justify-end">
          <button
            onClick={handleAddToCart}
            className="btn bg-[#ffb300] text-white capitalize"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
