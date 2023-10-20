

const AdOne = () => {
    return (
        <div className="max-w-6xl mx-8 md:mx-16 lg:mx-auto grid md:grid-cols-2 gap-6">
            <div
            className="w-full py-8 md:py-0 lg:h-[50vh] bg-center bg-cover rounded-xl pl-10 md:pl-20 flex items-center"
            style={{
              backgroundImage: "url(https://i.ibb.co/TPDY3pZ/banner-1.jpg)",
            }}
          >
            <div>
              <span className="text-sm md:text-base px-2 py-1 md:px-4 md:py-2 bg-[#ffb300] rounded-md">
                Digital PC
              </span>
              <div className="text-white my-2 md:mt-4 md:mb-5">
                <h1 className="text-2xl md:text-4xl font-black md:mb-4">
                  PC & Docking Station
                </h1>
                <p className="md:text-xl leading-7">
                  Discover now, just from $399
                </p>
              </div>
              <button className="btn hover:text-white bg-gray-200 hover:bg-[#ffb300] border-none font-bold capitalize">
                Shop Now
              </button>
            </div>
          </div>
          <div
            className="w-full py-8 md:py-0 lg:h-[50vh] bg-center bg-cover rounded-xl pl-10 md:pl-20 flex items-center"
            style={{
              backgroundImage: "url(https://i.ibb.co/2KhR8RK/banner-2.jpg.jpg)",
            }}
          >
            <div>
              <span className="text-sm md:text-base px-2 py-1 md:px-4 md:py-2 bg-[#ffb300] rounded-md">
                Headphones
              </span>
              <div className="my-2 md:mt-4 md:mb-5">
                <h1 className="text-2xl md:text-4xl font-black md:mb-4 text-[#0b0b0b]">
                  On-sale Best Prices
                </h1>
                <p className="md:text-xl leading-7">
                  Limited Time: Online Only!
                </p>
              </div>
              <button className="btn bg-gray-200 hover:text-white hover:bg-[#ffb300] border-none font-bold capitalize">
                Shop Now
              </button>
            </div>
          </div>
        </div>
    );
};

export default AdOne;