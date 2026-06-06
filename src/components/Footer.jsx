import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
    <footer className="relative overflow-hidden bg-gradient-to-b from-red-900 via-red-800 to-red-950 text-white">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full"></div>
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
                  to="/" onClick={handleNavigation}
                  className="hover:text-yellow-300 transition duration-300"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link onClick={handleNavigation}
                  to="/about"
                  className="hover:text-yellow-300 transition duration-300"
                >
                  About
                </Link>
              </li>

              <li>
                <Link onClick={handleNavigation}
                  to="/services"
                  className="hover:text-yellow-300 transition duration-300"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link onClick={handleNavigation}
                  to="/contact"
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
  <Link onClick={handleNavigation}
    to="/service/bridal-makeup"
    className="hover:text-yellow-300 transition"
  >
    Bridal Makeup
  </Link>
</li>

<li>
  <Link onClick={handleNavigation}
    to="/service/hair-styling"
    className="hover:text-yellow-300 transition"
  >
    Hair Styling
  </Link>
</li>

<li>
  <Link onClick={handleNavigation}
    to="/service/facial-treatment"
    className="hover:text-yellow-300 transition"
  >
    Facial Care
  </Link>
</li>

<li>
  <Link onClick={handleNavigation}
    to="/service/spa-therapy"
    className="hover:text-yellow-300 transition"
  >
    Spa Therapy
  </Link>
</li>

<li>
  <Link onClick={handleNavigation}
    to="/service/nail-care"
    className="hover:text-yellow-300 transition"
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
                <p>blushandbloom@gmail.com</p>
              </div>

              <div className="flex items-start justify-center sm:justify-start gap-3">
                <MapPin
                  size={18}
                  className="text-yellow-300 mt-1 flex-shrink-0"
                />
                <p>Newark, USA</p>
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
              <span className="text-yellow-300 font-semibold ml-1">
                Spark Web Studio
              </span>
            </p>
          </div>

          {/* Small Back To Top Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="flex items-center gap-1 bg-yellow-400 text-red-700 px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold shadow-md"
          >
            <ArrowUp size={12} />
            Top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;