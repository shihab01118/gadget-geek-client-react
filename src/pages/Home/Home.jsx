import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Brand from "../../components/Brand/Brand";
import NewGaming from "../../components/NewGaming/NewGaming";
import { useEffect, useState } from "react";
import TopProduct from "../../components/TopProduct/TopProduct";
import Product from "../../components/Product/Product";
import AdOne from "../../components/AdOne/AdOne";
import AdTwo from "../../components/AdTwo/AdTwo";

const Home = () => {
  const [topProducts, setTopProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const brands = useLoaderData();

  useEffect(() => {
    fetch("/topProducts.json")
      .then((res) => res.json())
      .then((data) => setTopProducts(data));
  }, []);

  useEffect(() => {
    fetch("/products.json")
    .then(res => res.json())
    .then(data => setProducts(data))
  }, [])

  return (
    <div>
      <Banner />
      <div className="lg:max-w-6xl mx-8 md:mx-16 lg:mx-auto my-16 lg:my-24">
        <h2 className="text-2xl leading-8 lg:text-3xl font-bold mb-10 w-fit">
          Top <span className="text-[#ffb300]">Brands</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {brands?.map((brand) => (
            <Brand key={brand.id} brand={brand}></Brand>
          ))}
        </div>
      </div>
      <AdOne />
      <div className="my-16 lg:my-24 bg-[#f7f6f1] py-12 lg:py-20">
        <div className=" lg:max-w-6xl mx-8 md:mx-16 lg:mx-auto">
          <h2 className="text-2xl leading-8 lg:text-3xl text-center mb-10 font-bold text-[#0b0b0b]">
            Top Selling Products
          </h2>
          <div className="grid lg:grid-cols-3 gap-6">
            {topProducts?.map((product) => (
              <TopProduct key={product?.id} product={product}></TopProduct>
            ))}
          </div>
        </div>
        <NewGaming />
        <div className=" lg:max-w-6xl mx-8 md:mx-16 lg:mx-auto">
          <h2 className="text-2xl leading-8 lg:text-3xl text-center mb-10 font-bold text-[#0b0b0b]">
          Recommended For You
          </h2>
          <div className="grid lg:grid-cols-4 gap-6">
            {products?.map((product) => (
              <Product key={product?.id} product={product}></Product>
            ))}
          </div>
        </div>
      </div>
        <AdTwo></AdTwo>
    </div>
  );
};

export default Home;
