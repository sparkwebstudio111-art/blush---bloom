import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ContactPage from "./pages/ContactPage";
import ServiceDetails from "./pages/ServiceDetails"; // ADD THIS
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";

function App() {
  return (
    <>
    <ScrollToTop />

    <Navbar />
    <Routes>
       

      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route path="/services" element={<Services />} />

      <Route path="/contact" element={<ContactPage />} />
       <Route path="/products" element={<Products />} />


      {/* Service Details Page */}
    

      <Route path="/services/:id" element={<ServiceDetails />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;