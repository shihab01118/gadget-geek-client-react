import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {
  const loadedProduct = useLoaderData();
  const { name, brand, type, price, img, rating, _id } = loadedProduct;
  console.log(loadedProduct);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const img = form.img.value;
    const rating = form.rating.value;

    const updatedProduct = { name, brand, type, price, img, rating };

    fetch(`https://gadget-geek-server.vercel.app/product/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Product Updated!");
        }
        form.reset();
      });
  };

  return (
    <div
      className="py-10 px-8 md:px-0"
      style={{
        backgroundImage:
          "url(https://preview.colorlib.com/theme/wed/assets/img/gallery/section_bg1.png.webp)",
      }}
    >
      <form
        className="max-w-3xl mx-auto border p-8 rounded-xl shadow-xl bg-white"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-[#0b0b0b] text-center mb-3">
          Update Product
        </h2>
        <div className="grid gap-3 md:gap-5 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 font-medium text-gray-900"
            >
              Name
            </label>
            <input
              defaultValue={name}
              name="name"
              type="text"
              id="name"
              className="border border-gray-300  focus:outline-[#ffb300] text-gray-900 rounded-lg block w-full p-2.5"
              placeholder="Product name"
            ></input>
          </div>
          <div>
            <label
              htmlFor="brand"
              className="block mb-2 font-medium text-gray-900"
            >
              Brand
            </label>
            <input
              defaultValue={brand}
              name="brand"
              type="text"
              id="brand"
              className="border border-gray-300 focus:outline-[#ffb300] text-gray-900 rounded-lg block w-full p-2.5"
              placeholder="Brand name"
            ></input>
          </div>
          <div>
            <label
              htmlFor="type"
              className="block mb-2 font-medium text-gray-900"
            >
              Type
            </label>
            <input
              defaultValue={type}
              name="type"
              type="text"
              id="type"
              className="border border-gray-300 focus:outline-[#ffb300] text-gray-900 rounded-lg block w-full p-2.5"
              placeholder="Product type"
            ></input>
          </div>
          <div>
            <label
              htmlFor="price"
              className="block mb-2 font-medium text-gray-900"
            >
              Price
            </label>
            <input
              defaultValue={price}
              name="price"
              type="text"
              id="price"
              className="border border-gray-300 focus:outline-[#ffb300] text-gray-900 rounded-lg block w-full p-2.5"
              placeholder="Product price"
            ></input>
          </div>
          <div>
            <label
              htmlFor="image"
              className="block mb-2 font-medium text-gray-900"
            >
              Image
            </label>
            <input
              defaultValue={img}
              name="img"
              type="url"
              id="image"
              className="border border-gray-300 focus:outline-[#ffb300] text-gray-900 rounded-lg block w-full p-2.5"
              placeholder="Product URL"
            ></input>
          </div>
          <div>
            <label
              htmlFor="rating"
              className="block mb-2 font-medium text-gray-900"
            >
              Rating
            </label>
            <input
              defaultValue={rating}
              name="rating"
              type="text"
              id="rating"
              className="border border-gray-300 focus:outline-[#ffb300] text-gray-900 rounded-lg block w-full p-2.5"
              placeholder="Product rating"
            ></input>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="text-white btn bg-[#ffb300] font-bold text-lg capitalize"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
