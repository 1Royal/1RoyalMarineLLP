import { useState } from "react";
import BTN from "./BTN";
import Title from "./Title";

const Subscribe = () => {
  // const [SR_No, setSR_No] = useState(1);
  const [SR_No, setSR_No] = useState(() => {
    // Retrieve the stored SR_No from localStorage, or initialize to 1
    const savedSRNo = localStorage.getItem("SR_No");
    return savedSRNo ? Number(savedSRNo) : 1;
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    // setSR_No(SR_No + 1);
    // Increment SR_No and save it to localStorage
    const newSRNo = SR_No + 1;
    setSR_No(newSRNo);
    localStorage.setItem("SR_No", newSRNo); // Store the updated value

    const form = document.querySelector("form");
    const formData = new FormData(form);

    const apiLink =
      "https://script.google.com/macros/s/AKfycbz0mUaGZJ-0R7oR4ATTNXarrUukT54bzS0vhH78S9Pvr77VNaGT-Nr0dBrObcmlj2pOwA/exec";

    const response = await fetch(apiLink, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      console.log("Done");
    } else {
      console.error("Failed to submit");
    }
  };

  return (
    <div className="text-center my-10">
      <div className="text-2xl font-medium text-gray-800 capitalize mt-5">
        <Title
          className="text-3xl font-medium text-gray-800 capitalize mt-5"
          text1={"subscribe"}
          text2={"now"}
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full sm:w-1/2 flex flex-col sm:flex-row border-0 sm:border  items-center gap-3 mx-auto my-6 pl-3  "
      >
        <input
          className="w-full  p-2 sm:flex-1 outline-none border sm:border-0"
          required
          type="email"
          name="Email"
          placeholder="Your email (e.g., name@domain.com)"
        />
        <input type="hidden" name="SR_No" value={SR_No} />
        <button
          type="submit"
          className="w-full sm:w-[40%]  bg-gray-50 text-gray-700 hover:bg-gray-900 hover:text-gray-50 transition-all ease-linear border-gray-900 border font-semibold text-xl px-2 py-2"
        >
          subscribe
        </button>
      </form>
    </div>
  );
};

export default Subscribe;
