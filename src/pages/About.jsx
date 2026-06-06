import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../images/owner.jpg";

import {
  Sparkles,
  HeartHandshake,
  Crown,
  BadgeCheck,
} from "lucide-react";
import Navbar from "../components/Navbar";

function About() {
  return (
   <div>

<Navbar />

 <section className="relative overflow-hidden bg-red-700 py-20 px-4 sm:px-6 lg:px-20 text-white">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-400/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-300/10 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            
            {/* Main Image */}
<img
  src={aboutImg}
  alt="Indian Beauty Parlour"
  className="
    w-full
    lg:w-[900px]
    xl:w-[1000px]
    h-[500px]
    sm:h-[650px]
    lg:h-[750px]
    object-cover
    rounded-[40px]
    shadow-2xl
    border-4 border-white/10
    hover:scale-105
    transition duration-500
  "
/>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              className="
                absolute
                -bottom-6
                -right-6
                bg-yellow-400
                text-red-700
                px-6
                py-4
                rounded-2xl
                shadow-xl
                font-bold
                text-lg
              "
            >
              5+ Years Experience
            </motion.div>
          </div>
        </motion.div>

        {/* CONTENT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-white/10 border border-white/20 px-5 py-2 rounded-full text-yellow-300 uppercase tracking-widest text-sm">
            About Us
          </span>

          <h2 className="mt-6 text-4xl sm:text-5xl font-extrabold leading-tight">
            Bringing Out Your{" "}
            <span className="text-yellow-300">
              Natural Beauty
            </span>
          </h2>

          <p className="mt-6 text-white/80 text-lg leading-relaxed">
            Welcome to <strong>Blush & Bloom</strong>, a luxury Indian beauty
            parlour dedicated to enhancing your confidence, elegance,
            and beauty. We specialize in bridal makeup, professional
            hairstyling, skincare treatments, facials, spa therapies,
            and modern beauty solutions tailored for every woman.
          </p>

          <p className="mt-5 text-white/70 leading-relaxed">
            Our expert beauticians use premium products and advanced
            beauty techniques to deliver a relaxing and luxurious
            experience. Whether it's your wedding day, engagement,
            party, or self-care session — we ensure you look and feel
            your absolute best.
          </p>

          {/* FEATURES */}
          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            
            {[
              {
                icon: <Sparkles size={26} />,
                title: "Premium Services",
              },
              {
                icon: <Crown size={26} />,
                title: "Luxury Experience",
              },
              {
                icon: <BadgeCheck size={26} />,
                title: "Certified Experts",
              },
              {
                icon: <HeartHandshake size={26} />,
                title: "Trusted By Clients",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.03,
                  y: -5,
                }}
                className="
                  flex
                  items-center
                  gap-4
                  bg-white/10
                  border border-white/10
                  backdrop-blur-md
                  p-5
                  rounded-2xl
                  shadow-lg
                "
              >
                <div className="text-yellow-300">
                  {item.icon}
                </div>

                <h3 className="font-semibold text-lg">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>

          {/* BUTTON */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              mt-10
              bg-yellow-400
              hover:bg-yellow-300
              text-red-700
              px-8
              py-4
              rounded-full
              font-semibold
              text-lg
              shadow-xl
              transition duration-300
            "
          >
            Explore Services
          </motion.button>
        </motion.div>
      </div>
    </section>

   </div>
  );
}

export default About;