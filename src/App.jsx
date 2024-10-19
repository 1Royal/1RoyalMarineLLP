import React from "react";
import { Routes, Route } from "react-router-dom";

// ! Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AllProducts from "./pages/AllProducts";
import Product from "./pages/Product";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";

// ! Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsApp from "./components/WhatsApp";
import OurPolicy from "./pages/OurPolicy";
import SearchBar from "./components/SearchBar";
import LikedItem from "./pages/LikedItem";

const App = () => {
  return (
    <div className="px-4 sm:px-[3vw] md:px-[5vw] lg:px-[7vw]">
      <Navbar />
      <SearchBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/liked-data" element={<LikedItem />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/our-policy" element={<OurPolicy />} />
      </Routes>

      <Footer />
      <WhatsApp />
    </div>
  );
};

export default App;
