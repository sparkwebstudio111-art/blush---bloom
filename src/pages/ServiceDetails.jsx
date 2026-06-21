import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";

import bridal from "../images/bridal.jpg";
import hair from "../images/hair.jpg";
import facial from "../images/facial.jpg";
import spa from "../images/spa.jpg";
import makeup from "../images/products.jpg";
import nails from "../images/nails.jpg";

import bridal1 from '../images/bridal1.jpg'
import bridal2 from '../images/bridal2.jpg'
import bridal3 from '../images/bridal3.jpg'
import bridal5 from '../images/bridal5.webp'

import facial1 from '../images/facial1.jpg'
import facial2 from '../images/facial2.jpg'
import facial3 from '../images/facial3.jpg'
import facial4 from '../images/facial4.webp'

import hair1 from '../images/hair1.jpg'
import hair2 from '../images/hair2.webp'
import hair3 from '../images/hair3.webp'
import hair4 from '../images/hair4.webp'
import hair5 from '../images/hair5.webp'

import nail1 from '../images/nail1.jpg'
import nail2 from '../images/nail2.jpg'
import nail3 from '../images/nail3.jpg'
import nail4 from '../images/nail4.jpg'
import nail5 from '../images/nail5.webp'
import nail6 from '../images/nail6.jpg'

import spa1 from '../images/spa1.jpg'
import spa2 from '../images/spa2.jpg'
import spa3 from '../images/spa3.webp'

import product1 from '../images/product1.jpg'
import product2 from '../images/product2.jpg'
import product3 from '../images/product3.jpg'
import product4 from '../images/product4.webp'
import product5 from '../images/product5.jpg'
import product6 from '../images/product6.jpg'



function ServiceDetails() {
  const { id } = useParams();

  const services = {
  "bridal-makeup": {
    title: "Bridal Makeup",
    gallery: [
      bridal,
      bridal1,
      bridal2,
      bridal3,
      bridal5,
    ],
    description:
      "Our bridal makeup package includes HD makeup, hairstyle, saree draping, flower setting, and complete bridal transformation for your special day.",
  },

  "hair-styling": {
    title: "Hair Styling",
    gallery: [
      hair,
      hair1,
      hair2,
      hair3,
      hair4,
      hair5,
    ],
    description:
      "Professional hairstyling, hair spa, keratin treatment, smoothening and trendy haircut services.",
  },

  "facial-treatment": {
    title: "Facial Treatment",
    gallery: [
      facial,
      facial1,
      facial2,
      facial3,
      facial4,
    ],
    description:
      "Glow facial, fruit facial, gold facial, anti-aging treatments and skin rejuvenation services.",
  },

  "spa-therapy": {
    title: "Spa Therapy",
    gallery: [
      spa,
      spa1,
      spa2,
      spa3,
    ],
    description:
      "Relaxing body spa therapies designed to refresh your body, mind and soul.",
  },

  "party-makeup": {
    title: "Party Makeup",
    gallery: [
      makeup,
      product1,
      product2,
      product3,
      product4,
      product5,
      product6,
    ],
    description:
      "Elegant makeup looks for parties, receptions, birthdays and engagement ceremonies.",
  },

  "nail-care": {
    title: "Nail Care",
    gallery: [
      nails,
      nail1,
      nail2,
      nail3,
      nail4,
      nail5,
      nail6,
    ],
    description:
      "Luxury manicure, pedicure, gel polish and designer nail art services.",
  },
};

  const service = services[id];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center text-3xl font-bold">
        Service Not Found
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#050505] via-[#111111] to-[#1a1a1a] text-white">
  {/* Background Glow */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[180px]" />
    <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-yellow-400/5 blur-[150px]" />
    <div className="absolute top-1/2 -left-32 h-[300px] w-[300px] rounded-full bg-yellow-300/5 blur-[120px]" />
  </div>

  {/* Back Button */}
  <Link
    to="/services"
    className="fixed left-5 top-24 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-yellow-500/30 bg-black/60 text-yellow-400 backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:bg-yellow-500 hover:text-black"
  >
    <ArrowLeft size={22} />
  </Link>

  <section className="relative z-10 mx-auto max-w-7xl px-5 pb-24 pt-32">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mb-20 text-center"
    >
      <p className="mb-3 uppercase tracking-[0.4em] text-yellow-400">
        Premium Beauty Service
      </p>

      <h1 className="text-5xl font-serif md:text-7xl">
        {service.title}
      </h1>

      <div className="mx-auto mt-6 h-[2px] w-40 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

      <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
        {service.description}
      </p>
    </motion.div>

    
   {/* Gallery */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6">
  {service.gallery.map((img, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
  once: true,
  amount: 0.15,
}}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
      }}
      whileHover={{
        y: -8,
      }}
      className="group relative overflow-hidden rounded-[24px] border border-yellow-500/20 bg-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl"
    >
      <img
        src={img}
        alt={service.title}
        className="h-[260px] sm:h-[300px] md:h-[320px] lg:h-[340px] w-full object-cover transition-all duration-700 group-hover:scale-110"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-500" />

      {/* Luxury Shine */}
      <div className="absolute top-0 -left-[150%] h-full w-[35%] skew-x-12 bg-white/20 transition-all duration-1000 group-hover:left-[180%]" />

      {/* Text */}
      <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-0 sm:translate-y-20 sm:group-hover:translate-y-0 transition-all duration-500">
        <h3 className="text-lg sm:text-xl font-semibold text-white">
          {service.title}
        </h3>

        <p className="mt-1 text-xs sm:text-sm tracking-[0.2em] text-yellow-300 uppercase">
          Luxury Beauty Experience
        </p>
      </div>
    </motion.div>
  ))}
</div>

  {/* CTA */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.8 }}
  className="mt-14 sm:mt-20 lg:mt-24 rounded-[24px] sm:rounded-[35px] border border-yellow-500/20 bg-white/5 px-5 py-8 sm:px-8 sm:py-10 lg:p-12 text-center backdrop-blur-xl"
>
  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-white leading-tight">
    Ready for Your Transformation?
  </h2>

  <p className="mx-auto mt-4 sm:mt-5 max-w-2xl text-sm sm:text-base lg:text-lg leading-7 text-gray-400">
    Experience premium beauty care with expert professionals and luxury
    treatments tailored just for you.
  </p>

  <Link
    to="/contact"
    className="mt-6 sm:mt-8 lg:mt-10 inline-flex items-center justify-center rounded-full bg-yellow-400 px-6 py-3 sm:px-8 sm:py-4 lg:px-10 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-300 text-sm sm:text-base"
  >
    Book Appointment
  </Link>
</motion.div>
  </section>
</div>
  );
}

export default ServiceDetails;