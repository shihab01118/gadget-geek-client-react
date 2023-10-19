import toast from "react-hot-toast";

const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const img = form.img.value;
    const rating = form.rating.value;
    const description = form.description.value;

    const product = { name, brand, type, price, img, rating, description };
    console.log(product);

    fetch("https://gadget-geek-server.vercel.app/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Successfully Added!");
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
        onSubmit={handleAddProduct}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-[#0b0b0b] text-center mb-3">
          Add New Product
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
              name="rating"
              type="text"
              id="rating"
              className="border border-gray-300 focus:outline-[#ffb300] text-gray-900 rounded-lg block w-full p-2.5"
              placeholder="Product rating"
            ></input>
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="description"
            className="block mb-2 font-medium text-gray-900"
          >
            Description
          </label>
          <textarea
            className="textarea-bordered focus:border-none focus:outline-[#ffb300] textarea w-full text-gray-900 text-[16px] px-2.5"
            placeholder="Product description"
            name="description"
            id="description"
            rows="3"
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="text-white btn bg-[#ffb300] font-bold text-lg capitalize"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
