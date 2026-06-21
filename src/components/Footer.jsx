import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import logo from "../images/spark.png"; 
import {
  Phone,
  Mail,
  MapPin,
  ArrowUp,
  Heart,
} from "lucide-react";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNavigation = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

  return (
    <footer className="relative overflow-hidden bg-black text-white">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-400/10 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 text-center sm:text-left">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              Blush & <span className="text-yellow-300">Bloom</span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed max-w-md mx-auto sm:mx-0">
              Premium beauty parlour offering bridal makeup,
              hairstyling, skincare, spa therapy and complete
              beauty solutions for every occasion.
            </p>

            <div className="flex justify-center sm:justify-start items-center gap-2 mt-5 text-yellow-300 text-sm sm:text-base">
              <Heart size={18} />
              <span>Beauty • Elegance • Confidence</span>
            </div>
          </motion.div>

{/* Quick Links */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.1, duration: 0.6 }}
>
  <h3 className="text-xl sm:text-2xl font-semibold text-yellow-300">
    Quick Links
  </h3>

  <ul className="mt-5 space-y-3 text-white/70 text-sm sm:text-base">
    <li>
      <Link
        to="/"
        onClick={handleNavigation}
        className="hover:text-yellow-300 transition duration-300"
      >
        Home
      </Link>
    </li>

    <li>
      <Link
        to="/about"
        onClick={handleNavigation}
        className="hover:text-yellow-300 transition duration-300"
      >
        About
      </Link>
    </li>

    <li>
      <Link
        to="/services"
        onClick={handleNavigation}
        className="hover:text-yellow-300 transition duration-300"
      >
        Services
      </Link>
    </li>

    <li>
      <Link
        to="/contact"
        onClick={handleNavigation}
        className="hover:text-yellow-300 transition duration-300"
      >
        Contact
      </Link>
    </li>
  </ul>
</motion.div>

{/* Services */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.2, duration: 0.6 }}
>
  <h3 className="text-xl sm:text-2xl font-semibold text-yellow-300">
    Services
  </h3>

  <ul className="mt-5 space-y-3 text-white/70 text-sm sm:text-base">
    <li>
      <Link
        to="/services/bridal-makeup"
        onClick={handleNavigation}
        className="hover:text-yellow-300 transition duration-300"
      >
        Bridal Makeup
      </Link>
    </li>

    <li>
      <Link
        to="/services/hair-styling"
        onClick={handleNavigation}
        className="hover:text-yellow-300 transition duration-300"
      >
        Hair Styling
      </Link>
    </li>

    <li>
      <Link
        to="/services/facial-treatment"
        onClick={handleNavigation}
        className="hover:text-yellow-300 transition duration-300"
      >
        Facial Care
      </Link>
    </li>

    <li>
      <Link
        to="/services/spa-therapy"
        onClick={handleNavigation}
        className="hover:text-yellow-300 transition duration-300"
      >
        Spa Therapy
      </Link>
    </li>

    <li>
      <Link
        to="/services/nail-care"
        onClick={handleNavigation}
        className="hover:text-yellow-300 transition duration-300"
      >
        Nail Art
      </Link>
    </li>
  </ul>
</motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-yellow-300">
              Contact Us
            </h3>

            <div className="mt-5 space-y-4 text-white/70 text-sm sm:text-base">
              <div className="flex items-start justify-center sm:justify-start gap-3 break-all">
                <Phone
                  size={18}
                  className="text-yellow-300 mt-1 flex-shrink-0"
                />
                
                <a href="tel:8668108891" className="hover:text-yellow-300 transition">
  91+ 8668108891
</a>

              </div>

              <div className="flex items-start justify-center sm:justify-start gap-3 break-all">
                <Mail
                  size={18}
                  className="text-yellow-300 mt-1 flex-shrink-0"
                />
                <p>sparkwebstudio111@gmail.com</p>
              </div>

              <div className="flex items-start justify-center sm:justify-start gap-3">
                <MapPin
                  size={18}
                  className="text-yellow-300 mt-1 flex-shrink-0"
                />
                <p>Chennai, India</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <p className="text-white/60 text-xs sm:text-sm">
              © {new Date().getFullYear()} Blush & Bloom Beauty Parlour.
              All Rights Reserved.
            </p>

            <p className="text-white/50 text-xs mt-2">
              Designed & Developed by
              <motion.a
  href="https://sparkwebstudio111.digital/"
  target="_blank"
  rel="noopener noreferrer"
  initial={{ opacity: 0, y: 10 }}
  whileInView={{ opacity: 1, y: 0 }}
  whileHover={{ scale: 1.05, y: -2 }}
  whileTap={{ scale: 0.97 }}
  transition={{ duration: 0.3 }}
  className="ml-1 inline-flex items-center gap-2 font-semibold text-yellow-300 transition-all duration-300 hover:text-yellow-400"
>
  <span>Spark Web Studio</span>

  <motion.img
    src={logo}
    alt="Spark Web Studio Logo"
    className="h-6 w-6 object-contain"
    animate={{
      rotate: [0, 8, -8, 0],
      scale: [1, 1.08, 1],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
</motion.a>
            </p>
          </div>

         <motion.button
  onClick={scrollToTop}
  whileHover={{
    scale: 1.08,
    y: -3,
  }}
  whileTap={{ scale: 0.95 }}
  animate={{
    y: [0, -4, 0],
  }}
  transition={{
    y: {
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }}
  className="
    group relative overflow-hidden
    flex items-center gap-2
    rounded-full
    border border-yellow-400/30
    bg-white/5 backdrop-blur-xl
    px-4 py-2
    text-sm font-medium text-white
    shadow-[0_0_25px_rgba(250,204,21,0.15)]
    transition-all duration-300
  "
>
  {/* Glow Effect */}
  <span className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-yellow-300/20 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition duration-500" />

  {/* Icon */}
  <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 text-black shadow-lg">
    <ArrowUp size={16} />
  </span>

  {/* Text */}
  <span className="relative">Back to Top</span>
</motion.button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;