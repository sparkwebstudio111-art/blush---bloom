import React from "react";
// import background from "../images/aboutImg.jpeg";
// import mblBackground from "../images/aboutImg.jpeg";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};



function Hero() {
  return (
    <section className="py-20 relative min-h-screen overflow-hidden">

      {/* Desktop Background */}
{/* <div
  className="absolute inset-0 hidden md:block bg-cover bg-center"
  style={{
    backgroundImage: `url(${background})`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundSize: "cover",
  }}
      /> */}

      {/* Mobile Background */}
      {/* <div
        className="absolute inset-0 block md:hidden bg-cover bg-center"
       style={{
  backgroundImage: `url(${background})`,
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundSize: "cover",
}}
      /> */}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/15 to-black/55" />

      {/* Golden Glow */}
      <div className="absolute -top-32 -left-24 w-96 h-96 rounded-full bg-yellow-500/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-amber-500/10 blur-[140px]" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">

        <div className="max-w-5xl text-center">



          {/* Main Heading */}
          <motion.h1
            custom={0.2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="
              font-['Cormorant_Garamond']
              text-white
              font-semibold
              leading-[0.95]
              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
            "
          >
           Shine
            <br />

            <span className="bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-700 bg-clip-text text-transparent ">
              With Confidence
            </span>
          </motion.h1>

          

          {/* Decorative Line */}
          <motion.div
            custom={0.4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mx-auto mt-8 h-[2px] w-24 rounded-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
          />

                    {/* Small Label */}
         {/* <motion.p
  custom={0}
  variants={fadeUp}
  initial="hidden"
  animate="visible"
  className="
    font-['Poppins']
    mt-6
    md:mt-10
    uppercase
    tracking-[4px]
    sm:tracking-[6px]
    md:tracking-[10px]
    text-yellow-300
    text-[10px]
    sm:text-xs
    md:text-sm
    font-medium
    mb-4
    md:mb-6
  "
>
  Luxury Beauty & Bridal Studio
</motion.p> */}

   <motion.p
  custom={0.6}
  variants={fadeUp}
  initial="hidden"
  animate="visible"
  className="
    mt-5
    sm:mt-6
    md:mt-8
    max-w-sm
    sm:max-w-xl
    md:max-w-2xl
    lg:max-w-3xl
    mx-auto
    px-4
    sm:px-6
    lg:px-0
    font-['Poppins']
    text-gray-200
    text-sm
    sm:text-base
    md:text-lg
    lg:text-xl
    leading-7
    sm:leading-8
    md:leading-9
    text-center
  "
>
  Experience refined beauty with luxurious skincare, flawless
  bridal makeovers, and premium hair styling  to enhance your confidence.
</motion.p>

         {/* Buttons */}
<motion.div
  custom={0.8}
  variants={fadeUp}
  initial="hidden"
  animate="visible"
  className="mt-10 flex justify-center px-4"
>
  <button
    className="
      px-6 sm:px-8
      py-3 sm:py-4
      text-sm sm:text-base
      rounded-full
      border border-yellow-400/40
      bg-black/20
      backdrop-blur-md
      text-white
      font-['Poppins']
      font-medium
      whitespace-nowrap
      transition-all
      duration-300
      hover:bg-yellow-500
      hover:text-black
      hover:scale-105
    "
  >
    Explore our work
  </button>
</motion.div>
        </div>

      </div>

    <section className="relative overflow-hidden bg-[#050505] py-24 px-6">

      

      {/* Background Glow */}

      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-40 -left-40 w-[420px] h-[420px] rounded-full bg-yellow-500/10 blur-[160px]"
      />

      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-amber-500/10 blur-[170px]"
      />

      {/* Watermark */}
<h1
  className="
    absolute
    inset-0
    flex
    items-center
    justify-center
    pointer-events-none
    select-none
    font-['Cormorant_Garamond']
    font-bold
    text-white/[0.03]
    text-[2.5rem]
    sm:text-[3.5rem]
    md:text-[5rem]
    lg:text-[6.5rem]
    xl:text-[8rem]
    leading-none
    text-center
    px-4
    whitespace-nowrap
  "
>
  Blush & Bloom
</h1>
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Small Title */}

        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="uppercase text-center tracking-[8px] text-yellow-400 text-xs font-['Poppins']"
        >
          Why Choose Me
        </motion.p>

        {/* Main Heading */}

        <motion.h2
          custom={0.2}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-5 text-center font-['Cormorant_Garamond'] text-white text-5xl md:text-7xl font-semibold leading-tight"
        >
          Beauty Beyond
          <br />

          <span className="bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">
            Expectations
          </span>
        </motion.h2>

        <motion.div
          custom={0.4}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mt-8 h-[2px] w-28 rounded-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
        />

        <motion.p
          custom={0.5}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-8 text-center text-gray-300 font-['Poppins'] leading-8 text-base md:text-lg"
        >
          Every transformation is crafted with artistry,
          premium products, and a commitment to delivering
          an unforgettable luxury beauty experience.
        </motion.p>

    
      </div>




    </section>


    </section>
  );
}

export default Hero;