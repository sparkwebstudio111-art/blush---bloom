import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ContactPage from "./pages/ContactPage";
import ServiceDetails from "./pages/ServiceDetails"; // ADD THIS
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route path="/services" element={<Services />} />

      <Route path="/contact" element={<ContactPage />} />

      {/* Service Details Page */}
      <Route
        path="/service/:id"
        element={<ServiceDetails />}
      />
    </Routes>
    <Footer />
    </>
  );
}

export default App;