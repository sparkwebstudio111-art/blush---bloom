import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function Review() {
    const reviews = [
    {
      name: "Priya Akil",
      review:
        "Absolutely loved the bridal makeup! The team made me feel so beautiful and confident on my wedding day.",
    },
    {
      name: "Anjali ",
      review:
        "Professional service and relaxing atmosphere. My facial treatment was amazing and my skin feels glowing!",
    },
    {
      name: "Meera Joseph",
      review:
        "Best beauty parlour experience ever. The hairstyling was modern, elegant, and exactly what I wanted.",
    },
    {
      name: "Sneha A ",
      review:
        "Very friendly staff and luxurious service. I highly recommend their spa therapy sessions.",
    },
    {
      name: "Divya ",
      review:
        "Their bridal package is truly premium. Makeup stayed perfect throughout the entire event.",
    },
  ];
  return (
    <div>
          <section className="relative py-24 px-4 sm:px-6 lg:px-20 overflow-hidden bg-red-700">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-400/10 blur-3xl rounded-full"></div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 relative z-10"
      >
        <span className="px-5 py-2 rounded-full bg-white/10 border border-white/20 text-pink-200 text-sm tracking-widest uppercase backdrop-blur-md">
          Client Testimonials
        </span>

        <h2 className="mt-6 text-4xl sm:text-5xl font-extrabold text-white">
          What Our <span className="text-yellow-300">Clients Say</span>
        </h2>

        <p className="mt-5 text-white/70 text-lg max-w-2xl mx-auto">
          Trusted by hundreds of happy customers for beauty, elegance,
          and premium care.
        </p>
      </motion.div>

      {/* Slider */}
      <div className=" relative z-10">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
          }}
        >
          {reviews.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                transition={{ duration: 0.5 }}
                className="bg-white  backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-2xl h-full"
              >
            

                {/* Review */}
                <p className="text-red-700 text-lg leading-relaxed text-center">
                  “{item.review}”
                </p>

                {/* User */}
                <div className="mt-8 flex justify-between text-center">
                  

                      {/* Stars */}
                <div className="flex justify-center gap-1 text-yellow-300 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>

                <h3 className="text-xl font-semibold text-gray-700">
                    {item.name}
                  </h3>

                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
    </div>
  )
}

export default Review