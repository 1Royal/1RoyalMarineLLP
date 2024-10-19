import React from "react";
import Title from "./Title";

const Para = ({ heading, text }) => {
  return (
    <div className="text-2xl mt-5">
      <Title className="font-semibold" text2={heading} />
      <p className="text-lg">{text}</p>
    </div>
  );
};

export default Para;
