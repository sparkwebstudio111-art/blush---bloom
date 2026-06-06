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
    <div className="bg-gradient-to-b from-white to-red-50 min-h-screen">
      <Navbar />

      {/* Back Button */}
      <Link
        to="/services"
        className="fixed top-24 left-4 z-50 bg-white shadow-xl p-3 rounded-full hover:bg-red-700 hover:text-white transition-all duration-300"
      >
        <ArrowLeft size={22} />
      </Link>

      <section className="pt-28 pb-20 px-5 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h1 className="text-4xl md:text-6xl font-black text-gray-900">
            {service.title}
          </h1>

          <div className="w-32 h-1 bg-red-700 mx-auto rounded-full mt-4" />

          <p className="max-w-3xl mx-auto mt-6 text-gray-600 text-lg leading-relaxed">
            {service.description}
          </p>
        </motion.div>

        {/* Premium Masonry Gallery */}
    <div className="columns-2 md:columns-3 xl:columns-4 gap-5 space-y-5">
  {service.gallery.map((img, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: index * 0.08,
      }}
      whileHover={{
        y: -12,
        scale: 1.03,
      }}
      whileTap={{ scale: 0.98 }}
      className="relative overflow-hidden rounded-3xl shadow-xl cursor-pointer break-inside-avoid group"
    >
      <img
        src={img}
        alt={service.title}
        className={`w-full object-cover transition-all duration-700 group-hover:scale-110 ${
          index % 4 === 0
            ? "h-[520px]"
            : index % 3 === 0
            ? "h-[420px]"
            : index % 2 === 0
            ? "h-[350px]"
            : "h-[280px]"
        }`}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

      <div className="absolute top-0 -left-[150%] h-full w-[45%] bg-white/30 skew-x-12 group-hover:left-[200%] transition-all duration-1000" />

      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-24 group-hover:translate-y-0 transition-all duration-500">
        <h3 className="text-white font-bold text-xl">
          {service.title}
        </h3>

        <p className="text-white/80 text-sm mt-1">
          Luxury Beauty Experience
        </p>
      </div>
    </motion.div>
  ))}
</div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mt-20"
        >
          <h2 className="text-3xl font-bold text-gray-900">
            Ready for Your Transformation?
          </h2>

          <p className="mt-4 text-gray-600">
            Book your appointment today and experience premium beauty care.
          </p>

          <Link
            to="/contact"
            className="inline-block mt-8 bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-red-300 transition-all duration-300"
          >
            Book Appointment
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

export default ServiceDetails;