import React from "react";
import Slider from "./Slider";
import { assets } from "../../assets/assets";
import Title from "../Title";

const images1 = [
  assets.slider_img_1,
  assets.slider_img_2,
  assets.slider_img_3,
  assets.slider_img_4,
  assets.slider_img_5,
  assets.slider_img_6,
  assets.slider_img_7,
  assets.slider_img_8,
  assets.slider_img_9,
  assets.slider_img_10,
  assets.slider_img_11,
  assets.slider_img_12,
  assets.slider_img_13,
  assets.slider_img_14,
  assets.slider_img_15,
  assets.slider_img_16,
];
const images2 = [
  assets.slider_img_17,
  assets.slider_img_18,
  assets.slider_img_19,
  assets.slider_img_20,
  assets.slider_img_21,
  assets.slider_img_22,
  assets.slider_img_23,
  assets.slider_img_24,
  assets.slider_img_25,
  assets.slider_img_26,
  assets.slider_img_27,
  assets.slider_img_28,
  assets.slider_img_29,
  assets.slider_img_30,
  assets.slider_img_31,
  assets.slider_img_32,
];

const HorizontalSlider = () => {
  return (
    <div className="my-5">
      <h1 className="text-3xl text-center font-semibold my-7 text-gray-700">
        <Title text2={"We Deal With This Brands"} />
      </h1>
      <Slider
        className="my-5"
        width={200}
        height={70}
        quantity={13}
        images={images1}
      />
      <Slider
        className="my-5"
        width={200}
        height={70}
        quantity={13}
        images={images2}
        reverse={true}
      />
    </div>
  );
};

export default HorizontalSlider;
