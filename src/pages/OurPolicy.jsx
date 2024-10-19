import React from "react";
import Para from "../components/para";

const OurPolicy = () => {
  return (
    <div>
      <Para
        heading={"Our Policy"}
        text={`At 1Royal Marine LLP, we are committed to providing our customers with a seamless and secure online shopping experience. Below, you'll find our policies that outline our practices and guidelines for shipping, privacy, terms and conditions, and returns.`}
      />

      <Para
        heading={"Shipping Policy"}
        text={`We strive to process and ship all orders within 24-48 hours of receipt We offer competitive shipping rates and estimated delivery times Please note that shipping times may vary depending on your location and the shipping method chosen We are not responsible for any delays caused by the shipping carrier or circumstances beyond our control `}
      />

      <Para
        heading="Privacy Policy"
        text={`Privacy Policy
            We respect your privacy and are committed to protecting your personal information
            We collect only the necessary information to process your orders and provide you with the best possible service
            We do not share your personal information with any third-party companies or individuals`}
      />

      <Para
        heading={"Terms and Conditions"}
        text={
          "By using our website, you agree to our terms and conditions We reserve the right to modify our terms and conditions at any time without notice"
        }
      />
      <Para
        heading={"Returns Policy"}
        text={
          "We want you to be satisfied with your purchase, and we stand behind the quality of our products If you're not satisfied with your purchase, you can return it within [time frame] days of delivery"
        }
      />
    </div>
  );
};

export default OurPolicy;
