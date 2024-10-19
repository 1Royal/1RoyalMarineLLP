import React from "react";

const BTN = ({text, type}) => {
  return (
    <div>
      <button
        type={type}
        className="w-full sm:w-[40%]  bg-gray-50 text-gray-700 hover:bg-gray-900 hover:text-gray-50 transition-all ease-linear border-gray-900 border font-semibold text-xl px-2 py-2"
      >
        {text}
      </button>
    </div>
  );
};

export default BTN;
