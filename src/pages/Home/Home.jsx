import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Brand from "../../components/Brand/Brand";

const Home = () => {
  const brands = useLoaderData();
  console.log(brands);
  return (
    <div>
      <Banner />
      <div className="lg:max-w-6xl mx-8 md:mx-16 lg:mx-auto my-16 lg:my-24">
        <h2 className="text-2xl leading-8 lg:text-3xl font-bold hover:underline text-[#0b0b0b] mb-10 w-fit">
          Shop By{" "}
          <span className="text-[#ffb300] hover:underline">Categories</span>
        </h2>
        <div className="flex flex-wrap gap-8 lg:gap-0 justify-between">
          {brands?.map((brand) => (
            <Brand key={brand.id} brand={brand}></Brand>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
