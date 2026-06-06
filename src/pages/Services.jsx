import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";  

import {
  Sparkles,
  Scissors,
  Heart,
  Flower2,
  Crown,
 Brush,
  ArrowUpRight,
} from "lucide-react";

import bridal from "../images/bridal.jpg";
import hair from "../images/hair.jpg";
import facial from "../images/facial.jpg";
import spa from "../images/spa.jpg";
import makeup from "../images/products.jpg";
import nails from "../images/nails.jpg";

import Navbar from "../components/Navbar";

function Services() {
  const services = [
    {
      id: "bridal-makeup",
      title: "Bridal Makeup",
      desc: "Luxury bridal makeup packages crafted for weddings and special ceremonies.",
      image: bridal,
      icon: <Crown size={22} />,
    },
    {
      id: "hair-styling",
      title: "Hair Styling",
      desc: "Modern hairstyling and premium hair treatments for elegant looks.",
      image: hair,
      icon: <Scissors size={22} />,
    },
    {
      id: "facial-treatment",
      title: "Facial Treatment",
      desc: "Professional skincare and glowing facial therapies.",
      image: facial,
      icon: <Sparkles size={22} />,
    },
    {
      id: "spa-therapy",
      title: "Spa Therapy",
      desc: "Relaxing spa sessions designed to refresh body and mind.",
      image: spa,
      icon: <Flower2 size={22} />,
    },
    {
      id: "party-makeup",
      title: "Party Makeup",
      desc: "Premium party makeup for receptions and celebrations.",
      image: makeup,
      icon: <Brush size={22} />,
    },
    {
      id: "nail-care",
      title: "Nail Care",
      desc: "Stylish manicure and elegant nail art.",
      image: nails,
      icon: <Heart size={22} />,
    },
  ];

  return (
    <div className="bg-[#faf7f5] min-h-screen overflow-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative px-5 sm:px-8 lg:px-20  pb-20">

        {/* BACKGROUND */}
        <div className="absolute inset-0 overflow-hidden">

          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 30, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-red-200 rounded-full blur-3xl opacity-40"
          />

          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, -20, 0],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-20 right-0 w-[400px] h-[400px] bg-pink-200 rounded-full blur-3xl opacity-40"
          />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-6xl top-30 mx-auto flex justify-center items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="bg-red-100 text-red-700  text-center px-4 py-2 rounded-full text-sm font-semibold tracking-wider">
              BEAUTY • LUXURY • STYLE
            </span>

            <h1 className="mt-7 text-center text-5xl lg:text-7xl font-black leading-tight text-[#1a1a1a]">
              Beauty
              <span className="text-red-700 text-center"> Services</span>
              <br />
              With Modern Elegance
            </h1>

            <p className="mt-7 text-center text-gray-600 text-lg leading-relaxed ">
              Discover luxury beauty experiences crafted with professionalism,
              creativity, and timeless elegance for every special occasion.
            </p>

          
          </motion.div>

          {/* RIGHT IMAGE */}
         
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-5 sm:px-8 lg:px-20 py-5 pb-24">
        <div className="max-w-7xl mx-auto">

          {/* TITLE */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
            }}
            className="text-center mb-16"
          >
        
          </motion.div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 80,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -12,
                }}
                className="group bg-white rounded-[32px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden h-[320px]">

                  <motion.img
                    whileHover={{
                      scale: 1.1,
                    }}
                    transition={{
                      duration: 0.8,
                    }}
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                  {/* ICON */}
                  <motion.div
                    whileHover={{
                      rotate: 8,
                      scale: 1.1,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 250,
                    }}
                    className="absolute top-5 left-5 w-14 h-14 rounded-2xl bg-yellow-100 backdrop-blur-lg border border-white/20 flex items-center justify-center text-red-400"
                  >
                    {service.icon}
                  </motion.div>

                  {/* TITLE */}
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-3xl font-bold text-white">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-7">
                  <p className="text-gray-600 leading-relaxed">
                    {service.desc}
                  </p>

                  {/* BUTTON */}
                  <motion.button
                    whileHover={{
                      x: 5,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                    }}
                    className="mt-7 flex items-center gap-2 text-red-700 cursor-pointer font-semibold"
                  >
                   
                    <Link
                    to={`/service/${service.id}`}
                    className="mt-6 inline-flex items-center gap-2 text-red-700 font-semibold"
                  >
                    View More
                    <ArrowUpRight size={18} />
                  </Link>
                    
                  </motion.button>
                </div>

                {/* TOP BORDER EFFECT */}
                <motion.div
                  initial={{
                    width: "0%",
                  }}
                  whileHover={{
                    width: "100%",
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  className="h-1 bg-red-700"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;