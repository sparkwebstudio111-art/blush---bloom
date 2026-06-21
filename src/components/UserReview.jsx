import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function UserReview() {
  const reviews = [
    {
      name: "Ananya R",
      review:
        "Absolutely loved my bridal makeover. The look stayed flawless throughout the entire wedding.",
    },
    {
      name: "Priya S",
      review:
        "Professional service and amazing attention to detail. Highly recommended!",
    },
    {
      name: "Keerthana M",
      review:
        "The hairstyle and makeup exceeded my expectations. I received so many compliments.",
    },
    {
      name: "Aishwarya P",
      review:
        "Very friendly and talented artist. The products used were premium quality.",
    },
    {
      name: "Sneha K",
      review:
        "Perfect party makeup with an elegant finish. Will definitely book again.",
    },
    {
      name: "Divya L",
      review:
        "Amazing experience from start to finish. Thank you for making my special day memorable.",
    },
  ];

  return (
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
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-3xl border border-yellow-500/20 bg-white/5 p-8 backdrop-blur-xl h-[300px] flex flex-col justify-between"
                >
                  <div>
                    <div className="text-yellow-400 text-xl">
                      ★★★★★
                    </div>

                    <p className="mt-5 text-gray-300 leading-7">
                      "{item.review}"
                    </p>
                  </div>

                  <div className="flex items-center gap-4 mt-8">
                    <div className="h-14 w-14 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 flex items-center justify-center text-black font-bold text-lg">
                      {item.name.charAt(0)}
                    </div>

                    <div>
                      <h3 className="text-white font-semibold">
                        {item.name}
                      </h3>
                      <p className="text-xs text-gray-500 uppercase">
                        Verified Client
                      </p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default UserReview;