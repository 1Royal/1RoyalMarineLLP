import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name }) => {
  //   const { currency } = useContext(ShopContext);
  return (
    <Link
      className="text-gray-700 cursor-pointer h-[80%]  "
      to={`/product/${id}`}
    >
      <div className="overflow-hidden bg-red-500 h-full">
        <img
          className="hover:scale-110 transition-all h-full ease-in-out rounded-md w-full aspect-auto"
          loading="lazy"
          src={image[0]}
          alt=""
        />
      </div>
      <p className="pt-3 pb-1 text-base font-semibold">{name}</p>
    </Link>
  );
};

export default ProductItem;
