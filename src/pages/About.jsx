import React from "react";
import { motion } from "framer-motion";
import background from "../images/makeupArtist.png";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50,
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

function About() {
  return (
    <section className="relative min-h-screen overflow-hidden py-24">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${background})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/90" />

      {/* Golden Glow */}
      <div className="absolute -left-20 top-10 w-96 h-96 rounded-full bg-yellow-500/10 blur-[150px]" />
      <div className="absolute right-0 bottom-0 w-80 h-80 rounded-full bg-amber-400/10 blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <motion.div
            custom={0.2}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >

            <p className="uppercase tracking-[8px] text-yellow-400 text-xs font-medium mb-5">
              About Our Parlour
            </p>

            <h2
              className="
              font-['Cormorant_Garamond']
              text-5xl
              md:text-6xl
              lg:text-7xl
              text-white
              font-semibold
              leading-tight
            "
            >
              Elegance
              <br />

              <span className="bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">
                in Every Touch
              </span>
            </h2>

            <div className="w-28 h-[2px] bg-gradient-to-r from-yellow-500 to-transparent mt-8 mb-8" />

            <p className="text-gray-300 leading-8 text-lg font-['Poppins']">
              At our beauty parlour, we believe that beauty is more than appearance—it's about confidence, self-care, and feeling your absolute best. We offer a complete range of professional beauty services, including hair styling, skincare treatments, bridal makeup, facials, nail care, and grooming services, all tailored to your unique needs.
            </p>

            <p className="text-gray-400 leading-8 text-lg mt-6 font-['Poppins']">
              Our experienced beauty experts use premium products and the latest techniques to deliver exceptional results in a relaxing and luxurious environment. Whether you're preparing for a special occasion or simply treating yourself to some well-deserved pampering, we are dedicated to enhancing your natural beauty and creating an unforgettable experience that leaves you looking radiant and feeling confident.
            </p>

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="
              mt-10
              px-8
              py-4
              rounded-full
              bg-gradient-to-r
              from-yellow-500
              to-yellow-600
              text-black
              font-semibold
              shadow-xl
              hover:shadow-yellow-500/30
              transition-all cursor-pointer
            "
            >
             <Link to={"/services"}> Explore Service</Link>
            </motion.button>

          </motion.div>

          {/* Right */}

         <motion.div
  custom={0.5}
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="relative"
>
  {/* Background Glow */}
  <div className="absolute -top-10 -right-10 w-52 h-52 bg-yellow-500/10 blur-[100px] rounded-full" />

  <div className="relative grid grid-cols-2 gap-5">

    {[
      {
        value: "10+",
        title: "Years of Excellence",
      },
      {
        value: "5+",
        title: "Services",
      },
      {
        value: "250+",
        title: "Exclusive clients",
      },
      {
        value: "100%",
        title: "Quality Products",
      },
    ].map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: index * 0.15,
        }}
        whileHover={{
          y: -8,
          scale: 1.03,
        }}
        className="
          relative
          overflow-hidden
          rounded-3xl
          border
          border-yellow-500/20
          bg-gradient-to-br
          from-white/10
          to-white/5
          backdrop-blur-2xl
          p-8
          transition-all
          duration-500
          hover:border-yellow-400/60
          hover:shadow-[0_0_35px_rgba(255,193,7,0.18)]
        "
      >
        {/* Top Gradient */}
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

        {/* Number */}
        <h2 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">
          {item.value}
        </h2>

        {/* Label */}
        <p className="mt-3 text-sm md:text-base text-gray-300 tracking-wide font-['Poppins'] leading-6">
          {item.title}
        </p>

        {/* Decorative Circle */}
        <div className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full bg-yellow-500/10 blur-2xl" />
      </motion.div>
    ))}

  </div>
</motion.div>

        </div>

      </div>

    </section>
  );
}

export default About;