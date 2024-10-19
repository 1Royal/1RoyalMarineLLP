import React, { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
const Product = () => {
  const { productId } = useParams();
  // console.log(productId);

  const { allProducts, toggleLike } = useContext(ShopContext);
  // console.log(allProducts)
  const [productData, setProductData] = useState(false);

  const [image, setImage] = useState("");

  const fetchProductData = async () => {
    allProducts.map((elem) => {
      if (elem.id == productId) {
        setProductData(elem);

        // * Setting up first image as the main img
        setImage(elem.images[0]);
        // console.log(image);

        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, allProducts]);

  // ------------------------- Copy to Clipboard
  const copyText = (text) => {
    try {
      window.navigator.clipboard.writeText(text);
      alert("Coppied to clipboard");
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    }
  };
  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in-out duration-500 opacity-100">
      {/* ------------------------- product images and data ------------------------- */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row ">
        {/* ------------------------- product images / Right part ------------------------- */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row ">
          <div className="flex flex-col overflow-x-auto overflow-y-scroll max-h-[70vh] justify-between sm:overflow-y-scroll sm:justify-normal sm:w-[18.7%] w-full">
            {productData.images.map((elem, index) => {
              return (
                <img
                  onClick={() => setImage(elem)}
                  src={elem}
                  key={index}
                  className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                  alt={`product img ${index}`}
                />
              );
            })}
          </div>

          <div className="w-full sm:w-[80%] ">
            <img src={image} className="w-full h-auto" alt="main img" />
          </div>
        </div>

        {/* ------------------------- product info / Left part------------------------- */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <p className="text-lg ">{productData.description}</p>
          {/* ------------------------- Contact for info------------------------- */}
          <div>
            <div className="flex flex-col items-start  mt-4">
              <p className="text-xs opacity-95 uppercase">
                Call Us for Details
              </p>
              <div className="text-lg font-semibold flex items-center gap-3">
                <p>+91 9913332005</p>
                <p
                  className="text-xs opacity-95 uppercase border  bg-gray-50 text-gray-700 hover:bg-gray-900 hover:text-gray-50  transition-all ease-linear border-gray-900 p-2 cursor-pointer"
                  onClick={() => copyText("+91 9913332005")}
                >
                  click to copy
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start  mt-4">
              <p className="text-xs opacity-95 uppercase">
                Mail Us for Details
              </p>
              <div className="text-lg font-semibold flex items-center gap-3">
                <p>royalmarinellp@gmail.com</p>
                <p
                  className="text-xs opacity-95 uppercase border  bg-gray-50 text-gray-700 hover:bg-gray-900 hover:text-gray-50  transition-all ease-linear border-gray-900 p-2 cursor-pointer"
                  onClick={() => copyText("royalmarinellp@gmail.com")}
                >
                  click to copy
                </p>
              </div>
              <div onClick={() => toggleLike(productData.id)}>
                Like <img src={assets.icon_like_fill} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
