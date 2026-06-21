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

function Services() {
 const services = [
  {
    id: "bridal-makeup",
    title: "Bridal Makeover",
    description: "Luxury bridal makeup...",
    image: bridal,
    icon: Crown,
  },
  {
    id: "hair-styling",
    title: "Hair Styling",
    description: "Professional haircuts...",
    image: hair,
    icon: Scissors,
  },
  {
    id: "facial-treatment",
    title: "Facial Treatments",
    description: "Deep cleansing facials...",
    image: facial,
    icon: Sparkles,
  },
  {
    id: "spa-therapy",
    title: "Spa & Wellness",
    description: "Relax with luxurious body massages...",
    image: spa,
    icon: Heart,
  },
  {
    id: "party-makeup",
    title: "Professional Makeup",
    description: "Party, engagement, reception...",
    image: makeup,
    icon: Brush,
  },
  {
    id: "nail-care",
    title: "Nail Studio",
    description: "Elegant manicures and pedicures...",
    image: nails,
    icon: Flower2,
  },
];

  return (
    <section className="relative overflow-hidden bg-black py-24">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[150px]" />
        <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-yellow-400/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-4 tracking-[0.35em] uppercase text-yellow-400 text-sm">
            Premium Beauty Services
          </p>

          <h2 className="text-4xl md:text-6xl font-serif text-white">
            Luxury Salon Experience
          </h2>

          <div className="mx-auto mt-6 h-[2px] w-28 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

          <p className="mx-auto mt-8 max-w-2xl text-gray-400 leading-8">
            Experience elegance and transformation with our premium beauty,
            makeup, skincare, hair, spa, and nail services designed to enhance
            your confidence.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group overflow-hidden rounded-[30px] border border-yellow-500/20 bg-white/5 backdrop-blur-xl"
              >
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center rounded-full border border-yellow-400/40 bg-black/60 backdrop-blur-lg"
                  >
                    <Icon className="text-yellow-400" size={26} />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="mb-4 text-2xl font-semibold text-white">
                    {service.title}
                  </h3>

                  <p className="leading-7 text-gray-400">
                    {service.description}
                  </p>

                 <Link
 
  to={`/services/${service.id}`}
  className="mt-8 inline-flex items-center gap-3 text-yellow-400 transition hover:gap-5"
>
  View More

  <ArrowUpRight
    size={18}
    className="transition group-hover:rotate-45"
  />
</Link>
                </div>

                {/* Gold Line */}
                <div className="h-[2px] w-0 bg-gradient-to-r from-yellow-400 to-yellow-200 transition-all duration-700 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 flex justify-center"
        >
          <Link
            to="/contact"
            className="rounded-full border border-yellow-400 bg-yellow-400 px-10 py-4 font-semibold text-black transition duration-300 hover:scale-105 hover:bg-yellow-300"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;