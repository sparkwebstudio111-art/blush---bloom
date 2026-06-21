import React from "react";
import { motion } from "framer-motion";
import braidal from "../images/intro.jpg"
import studio from '../images/studio.jpg'
import { Link } from "react-router-dom";



import {
  Sparkles,
  Heart,
  Scissors,
  Star,
  Flower2,
} from "lucide-react";

function Intro() {
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.7,
      },
    }),
  };

  return (
    <div className="w-full overflow-hidden bg-red-700 text-white">
      
      {/* TOP HERO */}
      <section className="relative w-full py-12 overflow-hidden flex items-center bg-red-700">
        
        {/* Background Effects */}
        <div className="absolute inset-0 bg-red-700"></div>

        <div className="absolute top-0 left-0 w-72 h-72  rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full blur-3xl"></div>

        {/* Content */}
        <div className="relative z-10 w-full flex items-center justify-center px-4 sm:px-6 lg:px-12 py-10">
          
          <div className="w-full text-center">
            
            <motion.h1
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Welcome to{" "}
              <span className="text-yellow-300">
                Blush & Bloom
              </span>
            </motion.h1>

            <div className="flex justify-center">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-white/80 text-center mt-4 sm:text-lg max-w-2xl"
              >
                Discover beautiful beauty collections and premium beauty
                services with elegance, luxury, and confidence.
              </motion.p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 cursor-pointer bg-yellow-400 hover:bg-yellow-500 text-red-700 font-semibold px-8 py-4 rounded-full transition duration-300 shadow-xl"
            >
               <Link 
              to="/services" >Explore Now</Link>  
              
            </motion.button>
          </div>
        </div>
      </section>

      {/* HERO SECTION */}
      <section className="relative  flex items-center overflow-hidden px-6 lg:px-20 py-6 bg-red-700">
        
        {/* Blur Effects */}
        <div className="absolute top-0 left-0 w-72 h-72  rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeUp}
            className="text-center lg:text-left"
          >
            <motion.h1
              className="text-5xl sm:text-6xl font-extrabold leading-tight text-white"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              Wonderful bridal  Look {" "}
              <span className="text-yellow-300">
                for your best day
              </span>
            </motion.h1>

            <motion.p
              className="mt-6 text-lg text-white/80 leading-relaxed"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              All kinds of Bridal makeup available in our service. 
              -  HD Makeup, Airbrush Makeup,  Matte Makeup Look, Natural Minimal Makeup Look, Hijab bridal makeup
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <button className="cursor-pointer bg-yellow-400 hover:bg-yellow-500 text-red-700 px-8 py-4 rounded-full text-lg font-semibold shadow-lg transition duration-300">
                <Link 
              to="/contact" >Contact</Link>
              </button>

              <button className="border-2 border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-red-700 px-8 py-4 rounded-full text-lg font-semibold transition duration-300">
             <Link 
              to="/services" >Explore Services</Link>   
              </button>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="flex justify-center"
          >
             <img
    src={braidal}
    alt="Beauty"
    className="
      w-full
      max-w-[280px]
      sm:max-w-[380px]
      lg:max-w-[450px]
      h-[350px]
      sm:h-[500px]
      object-cover
      rounded-[40px]
      shadow-2xl
      border-4 border-white/10
      hover:scale-105
      transition duration-500
    "
  />
          </motion.div>
        </div>
      </section>

    {/* SERVICES SECTION */}
<section className="relative py-24 px-4 sm:px-6 lg:px-20 overflow-hidden ">
  
  {/* Background Glow Effects */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-red-500/20 blur-3xl rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full"></div>

  {/* Heading */}
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 0.8 }}
    className="text-center mb-20 relative z-10"
  >
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2 }}
      className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/20 text-pink-200 text-sm tracking-widest uppercase backdrop-blur-md"
    >
      Luxury Beauty Services
    </motion.span>

    <h2 className="mt-6 text-4xl sm:text-5xl font-extrabold text-white leading-tight">
      Enhance Your <span className="text-yellow-300">Natural Beauty</span>
    </h2>

    <p className="mt-5 text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
      Experience premium beauty care crafted with elegance, luxury,
      and professional expertise.
    </p>
  </motion.div>

  {/* Service Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto relative z-10">
    
    {[
      {
        icon: <Sparkles size={42} />,
        title: "Facial Care",
        desc: "Glow-enhancing skincare treatments for radiant healthy skin.",
      },
      {
        icon: <Scissors size={42} />,
        title: "Hair Styling",
        desc: "Trendy haircuts and luxurious styling tailored for you.",
      },
      {
        icon: <Heart size={42} />,
        title: "Bridal Makeup",
        desc: "Elegant bridal looks designed to make your day unforgettable.",
      },
      {
        icon: <Flower2 size={42} />,
        title: "Spa Therapy",
        desc: "Relaxing spa experiences to refresh body, mind, and soul.",
      },
    ].map((service, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{
          delay: index * 0.15,
          duration: 0.7,
          type: "spring",
        }}
        whileHover={{
          y: -15,
          scale: 1.04,
          rotate: 1,
        }}
        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white backdrop-blur-lg p-8 text-center shadow-2xl hover:border-yellow-300/40 transition-all duration-500"
      >
        {/* Hover Glow */}
        <div className="absolute inset-0 bg-yellow-100 opacity-0 group-hover:opacity-100 transition duration-500"></div>

        {/* Floating Icon */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut",
          }}
          className="flex justify-center mb-6 text-red-500 relative z-10"
        >
          <div className="p-4 rounded-full bg-red/10 border border-white/10 shadow-lg">
            {service.icon}
          </div>
        </motion.div>

        <h3 className="text-2xl font-bold text-red-700 relative z-10">
          {service.title}
        </h3>

        <p className="mt-4 text-red-700 leading-relaxed relative z-10">
          {service.desc}
        </p>

        {/* Bottom Line Animation */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "60%" }}
          transition={{ delay: 0.3 + index * 0.2, duration: 0.8 }}
          className="h-1 bg-yellow-300 mx-auto mt-6 rounded-full"
        />
      </motion.div>
    ))}
  </div>
</section>

      {/* WHY CHOOSE US */}
      <section className="bg-red-700 py-24 px-6 lg:px-20">
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          {/* IMAGE */}
          <motion.div
  initial={{ opacity: 0, x: -80 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="flex justify-center"
>
  <img
    src={studio}
    alt="Salon"
    className="
      w-full
      max-w-[300px]
      sm:max-w-[420px]
      lg:max-w-[520px]
      h-[350px]
      sm:h-[500px]
      object-cover
      rounded-[35px]
      shadow-2xl
      border-4 border-white/10
      hover:scale-105
      transition duration-500
    "
  />
</motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white">
              Why Choose Us?
            </h2>

            <div className="mt-8 space-y-5">
              
              {[
                "Certified Beauty Experts",
                "Premium Cosmetic Products",
                "Affordable Beauty Packages",
                "Luxury & Relaxing Environment",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  className="flex items-center gap-4 bg-white p-5 rounded-2xl"
                >
                  <Star className="text-yellow-300" />

                  <p className="text-lg text-red-700">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

 


    </div>
  );
}

export default Intro;