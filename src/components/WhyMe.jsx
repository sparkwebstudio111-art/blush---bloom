import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Crown,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 80,
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

 

function WhyMe() {
  return (
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
  );
}

export default WhyMe;