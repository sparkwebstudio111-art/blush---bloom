import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import comb from "../images/comb.png";
import make from "../images/make.png";
import mirror from "../images/mirror.png";
import lips from "../images/lips.png";
import powder from "../images/power.png";
import { Link } from "react-router-dom";

import { FiPlus, FiMinus } from "react-icons/fi";

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
  // {
  //   image: mirror,
  //   title: "Beauty Consultation",
  //   desc: "Personalized recommendations to help you achieve your perfect beauty routine.",
  // },
];

function SimpleService() {
  const [active, setActive] = useState(0);

  const faqs = [{ question: "How long does bridal makeup take?", answer: "Bridal makeup usually takes between 1.5 to 2.5 hours depending on the chosen look, hairstyle, and accessories.", }, { question: "Do you provide home service?", answer: "Yes. We offer premium home and venue makeup services for brides, engagements, receptions, and special occasions.", }, { question: "Which makeup brands do you use?", answer: "We use only premium international and professional brands to ensure flawless finish and long-lasting results.", }, { question: "How can I book an appointment?", answer: "You can contact us through WhatsApp, phone call, or the booking form available on our website.", }, { question: "Do you offer trial makeup sessions?", answer: "Yes. Trial sessions are available for brides who would like to finalize their complete look before the wedding day.", },];

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-10">

  {/* Background Glow */}
  <div className="absolute top-0 left-0 h-52 w-52 sm:h-72 sm:w-72 lg:h-80 lg:w-80 rounded-full bg-yellow-500/10 blur-[100px] lg:blur-[140px]" />
  <div className="absolute bottom-0 right-0 h-52 w-52 sm:h-72 sm:w-72 lg:h-80 lg:w-80 rounded-full bg-yellow-400/10 blur-[100px] lg:blur-[140px]" />

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
  );
}

export default SimpleService;