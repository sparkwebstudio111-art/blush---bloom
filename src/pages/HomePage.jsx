import React, { useState } from "react";
import HomeBackground from "../images/HomeBackground.jpeg";
import { motion, AnimatePresence } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import girl1 from "../images/girl1.jpg"
import girl2 from "../images/girl2.jpg"
import girl3 from "../images/girl3.jpg"
import girl4 from "../images/girl4.jpg"
import girl5 from "../images/girl5.jpg"
import girl6 from "../images/girl6.jpg"



import comb from "../images/comb.png";
import make from "../images/make.png";
import mirror from "../images/mirror.png";
import lips from "../images/lips.png";
import powder from "../images/power.png";
import { Link } from "react-router-dom";

import { FiPlus, FiMinus } from "react-icons/fi";

function HomePage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        delay,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

   const [active, setActive] = useState(0);
  
    const faqs = [{ question: "How long does bridal makeup take?", answer: "Bridal makeup usually takes between 1.5 to 2.5 hours depending on the chosen look, hairstyle, and accessories.", }, { question: "Do you provide home service?", answer: "Yes. We offer premium home and venue makeup services for brides, engagements, receptions, and special occasions.", }, { question: "Which makeup brands do you use?", answer: "We use only premium international and professional brands to ensure flawless finish and long-lasting results.", }, { question: "How can I book an appointment?", answer: "You can contact us through WhatsApp, phone call, or the booking form available on our website.", }, { question: "Do you offer trial makeup sessions?", answer: "Yes. Trial sessions are available for brides who would like to finalize their complete look before the wedding day.", },];
  const services = [
    {
      image: comb,
      title: "Hair Cut & Hair Styling",
      desc: "Modern haircuts and elegant styling tailored to enhance your personality and confidence.",
      Link: "/services/hair-styling"
         
    },
    {
      image: powder,
      title: "Simple to Bridal Makeup",
      desc: "From subtle everyday looks to luxurious bridal transformations with flawless finishing.",
      Link:"/services/bridal-makeup"
    },
    {
      image: make,
      title: "Skin & Acne Care",
      desc: "Professional skin treatments designed to restore natural glow and healthy skin.",
      Link: "/services/facial-treatment"
    },
    {
      image: lips,
      title: "Premium Cosmetic Products",
      desc: "High-quality beauty essentials carefully selected for lasting performance and safety.",
      Link: "/products"
    },
   
  ];

   const reviews = [
    {
      name: "Ananya R",
      review:
        "Absolutely loved my bridal makeover. The look stayed flawless throughout the entire wedding.",
        image: girl1
    },
    {
      name: "Priya S",
      review:
        "Professional service and amazing attention to detail. Highly recommended!",
        image: girl2
    },
    {
      name: "Keerthana M",
      review:
        "The hairstyle and makeup exceeded my expectations. I received so many compliments.",
        image: girl3
    },
    {
      name: "Aishwarya P",
      review:
        "Very friendly and talented artist. The products used were premium quality.",
        image: girl4
    },
    {
      name: "Sneha K",
      review:
        "Perfect party makeup with an elegant finish. Will definitely book again.",
        image: girl5
    },
    {
      name: "Divya L",
      review:
        "Amazing experience from start to finish. Thank you for making my special day memorable.",
        image: girl6
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section
        className="relative min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${HomeBackground})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/70" />

        {/* Animated Glow */}
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-24 w-96 h-96 rounded-full bg-yellow-500/10 blur-[140px]"
        />

        <motion.div
          animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-amber-500/10 blur-[140px]"
        />

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-5 sm:px-6 md:px-10">
          <div className="max-w-6xl text-center">
            {/* Heading */}
            <motion.h1
              custom={0.2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-['Cormorant_Garamond'] text-white font-semibold leading-[0.95] text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
            >
              Shine
              <br />
              <span className="bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">
                With Confidence
              </span>
            </motion.h1>

            {/* Line */}
            <motion.div
              custom={0.4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mx-auto mt-8 h-[2px] w-24 sm:w-32 rounded-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
            />

            {/* Description */}
            <motion.p
              custom={0.6}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-6 sm:mt-8 max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto px-4 font-['Poppins'] text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl leading-7 sm:leading-8 md:leading-9"
            >
              Experience refined beauty with luxurious skincare, flawless bridal
              makeovers, and premium hair styling designed to enhance your
              confidence and reveal your most radiant self.
            </motion.p>

            {/* Button */}
            <motion.div
              custom={0.8}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-10 flex justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.06, y: -4 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="group relative overflow-hidden px-8 sm:px-10 py-3.5 sm:py-4 rounded-full border border-yellow-400/40 bg-black/20 backdrop-blur-xl text-white font-medium text-sm sm:text-base"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-300 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative z-10 group-hover:text-black transition-colors duration-500">
                  Explore Our Work
                </span>
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#050505] to-transparent" />
      

      {/* SECOND SECTION */}
      <section className="relative overflow-hidden bg-[#050505] py-20 sm:py-24 px-5 sm:px-6">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[420px] h-[420px] rounded-full bg-yellow-500/10 blur-[160px]"
        />

        <motion.div
          animate={{ x: [0, -50, 0], y: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-amber-500/10 blur-[170px]"
        />

        {/* Watermark */}
        <h1 className="absolute inset-0 flex items-center justify-center pointer-events-none select-none font-['Cormorant_Garamond'] font-bold text-white/[0.03] text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] text-center">
          Blush & Bloom
        </h1>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="uppercase text-center tracking-[6px] sm:tracking-[8px] text-yellow-400 text-xs font-['Poppins']"
          >
            Why Choose Me
          </motion.p>

          <motion.h2
            custom={0.2}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-5 text-center font-['Cormorant_Garamond'] text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight"
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
            className="max-w-3xl mx-auto mt-8 text-center text-gray-300 font-['Poppins'] leading-7 sm:leading-8 text-base md:text-lg"
          >
            Every transformation is crafted with artistry, premium products,
            and a commitment to delivering an unforgettable luxury beauty
            experience.
          </motion.p>
        </div>
      </section>


<section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-10">

  {/* Background Glow */}
  <div className="absolute top-0 left-0 h-52 w-52 sm:h-72 sm:w-72 lg:h-80 lg:w-80 rounded-full  blur-[100px] lg:blur-[140px]" />
  <div className="absolute bottom-0 right-0 h-52 w-52 sm:h-72 sm:w-72 lg:h-80 lg:w-80 rounded-full  blur-[100px] lg:blur-[140px]" />

  <div className="relative z-10 mx-auto max-w-7xl">

    {/* Heading */}
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center text-[10px] sm:text-xs uppercase tracking-[4px] sm:tracking-[7px] text-yellow-400 font-['Poppins']"
    >
      Our Services
    </motion.p>

    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mt-4 sm:mt-5 text-center font-['Cormorant_Garamond'] text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold text-white leading-tight"
    >
      Crafted For
      <br />
      <span className="bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">
        Every Occasion
      </span>
    </motion.h2>

    {/* Services */}
    <div className="mt-10 sm:mt-14 lg:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">

      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: index * 0.08 }}
          whileHover={
            window.innerWidth > 1024
              ? { y: -5 }
              : {}
          }
          className="relative flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 rounded-2xl border border-yellow-500/10 bg-[#171717] hover:border-yellow-500/30 p-4 sm:p-5 transition-all duration-500"
        >

          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0 flex items-center justify-center"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 min-w-0 text-center sm:text-left"
          >

            <div className="flex items-center justify-between gap-3">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white font-['Cormorant_Garamond'] break-words">
                {service.title}
              </h3>

              <span className="text-yellow-500/40 font-bold text-xs sm:text-sm flex-shrink-0">
                0{index + 1}
              </span>
            </div>

            <p className="mt-2 text-xs sm:text-sm text-gray-400 leading-6 font-['Poppins']">
              {service.desc}
            </p>

            <motion.button
              whileHover={{ x: 5 }}
              className="mt-3 inline-flex items-center gap-2 text-yellow-400 text-sm font-medium"
            >
             <Link to={service.Link} > Explore <span>→</span></Link>
              
            </motion.button>

          </motion.div>

        </motion.div>
      ))}
    </div>
  </div>

  {/* FAQ SECTION */}
  <section className="relative overflow-hidden pt-16 sm:pt-20 lg:pt-24">

    <div className="relative mx-auto max-w-5xl">

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-[10px] sm:text-xs uppercase tracking-[4px] sm:tracking-[7px] text-yellow-400 font-['Poppins']"
      >
        Frequently Asked Questions
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-4 text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white font-['Cormorant_Garamond'] leading-tight"
      >
        Everything You
        <span className="block bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
          Need To Know
        </span>
      </motion.h2>

      <div className="mt-10 sm:mt-14 space-y-4">

        {faqs.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            className={`overflow-hidden rounded-2xl sm:rounded-3xl border transition-all duration-500 ${
              active === index
                ? "border-yellow-500/40 bg-white/[0.05]"
                : "border-white/10 bg-white/[0.03] hover:border-yellow-500/20"
            }`}
          >
            <button
              onClick={() =>
                setActive(active === index ? null : index)
              }
              className="flex w-full items-center justify-between gap-3 sm:gap-4 px-4 py-4 sm:px-6 sm:py-5 md:px-8 text-left"
            >

              <h3 className="flex-1 text-sm sm:text-lg md:text-xl leading-relaxed text-white font-semibold font-['Cormorant_Garamond'] break-words">
                {item.question}
              </h3>

              <motion.div
                animate={{
                  rotate: active === index ? 45 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0 flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 rounded-full border border-yellow-500/20 bg-yellow-500/10 text-yellow-400"
              >
                <span className="text-lg sm:text-2xl leading-none">
                  +
                </span>
              </motion.div>

            </button>

            <AnimatePresence>
              {active === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-white/10 px-4 py-4 sm:px-6 sm:py-5 md:px-8">
                    <p className="text-sm sm:text-base text-gray-300 leading-7 font-['Poppins']">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>
        ))}

      </div>
    </div>

  </section>

</section>

 <section className="relative overflow-hidden bg-black py-24 px-5 md:px-10">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 h-80 w-80 rounded-full bg-yellow-500/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-yellow-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center uppercase tracking-[8px] text-xs text-yellow-400"
        >
          Testimonials
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 text-center text-4xl md:text-6xl font-bold text-white"
        >
          What Our
          <span className="block bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Happy Clients Say 
          </span>
        </motion.h2>

        <div className="mt-16">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={false}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {reviews.map((item, index) => (
         <SwiperSlide key={index}>
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -8 }}
    transition={{ duration: 0.5 }}
    className="group relative overflow-hidden rounded-[28px] border border-yellow-500/20 bg-gradient-to-br from-white/[0.08] to-white/[0.03] backdrop-blur-xl p-5 sm:p-6 lg:p-7 min-h-[260px] transition-all duration-500"
  >
    {/* Hover Glow */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-br from-yellow-500/10 via-transparent to-yellow-500/5" />

    {/* Quote */}
    <div className="absolute top-4 right-5 text-6xl text-yellow-500/10 font-serif">
      "
    </div>

    {/* Profile */}
    <div className="relative z-10 flex items-center gap-4">
      <img
        src={item.image}
        alt={item.name}
        className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover border-2 border-yellow-400/40"
      />

      <div>
        <h3 className="text-white text-lg sm:text-xl font-semibold">
          {item.name}
        </h3>

        <p className="text-yellow-400 text-xs tracking-[2px] uppercase mt-1">
          Verified Client
        </p>

        <div className="flex gap-1 mt-2 text-yellow-400 text-sm">
          ★★★★★
        </div>
      </div>
    </div>

    {/* Review */}
    <p className="relative z-10 mt-6 text-gray-300 leading-7 text-sm sm:text-base">
      {item.review}
    </p>

    {/* Bottom Line */}
    <div className="mt-6 h-[2px] w-20 bg-gradient-to-r from-yellow-500 to-transparent rounded-full" />
  </motion.div>
</SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>


</section>

    </>
  );
}

export default HomePage;