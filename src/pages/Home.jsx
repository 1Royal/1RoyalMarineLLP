import React from "react";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import HorizontalSlider from "../components/Slider/HorizontalSlider";
import Subscribe from "../components/subscribe";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />

      <HorizontalSlider />
      <Subscribe />
    </div>
  );
};

export default Home;
