import React from "react";
import "./Slider.css";

const Slider = ({ width, height, quantity, reverse, images }) => {
  return (
    <div>
      <div
        className={`slider my-2 ${reverse ? "reverse " : ""} `}
        style={{
          "--width": `${width}px`,
          "--height": `${height}px`,
          "--quantity": quantity,
        }}
      >
        <div className={`list`}>
          {images.map((image, index) => (
            <div
              key={index}
              className="item  "
              style={{
                "--position": index + 1,
              }}
            >
              <img src={image} className="h-full" alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
