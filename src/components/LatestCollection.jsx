import { React, useContext, useEffect } from "react";
import { useState } from "react";

import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import ProductItem from "./ProductItem";
import { Link } from "react-router-dom";
const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  // console.log(products)

  const [latestProducts, setlatestProducts] = useState([]);

  useEffect(() => {
    setlatestProducts(products.slice(0, 10));
  }, []);

  // console.log("ans = ", latestProducts);

  return (
    <div className="mt-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"ARRIVAL"} />
        <p className="w-3/4 m-auto capitalize text-xs sm:text-sm md:text-base text-gray-600">
          marine machinery, ship stores & equipment
        </p>
      </div>

      {/* Rendering products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts.map((elem, i) => (
          <ProductItem
            key={i}
            id={elem.id}
            image={elem.images}
            name={elem.name}
          />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Link to="/allproducts">
          <button className=" uppercase bg-gray-50 text-gray-700 hover:bg-gray-900 hover:text-gray-50 border-gray-900 border  px-10 py-2 font-semibold   transition-all ease-linear text-xl ">
            view all products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LatestCollection;
