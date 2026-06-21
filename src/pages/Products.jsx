import React from "react";
import { motion } from "framer-motion";

import cream from "../images/cream.jpg";
import moisturizer from "../images/moisturizer.jpg";
import nightCream from "../images/nightCream.jpg";
import eyelinerPen from "../images/eyelinerPen.jpg";
import makeupSponge from "../images/makeupSponge.jpg";
import compactPowder from "../images/compactPowder.jpg";
import makeupBrush from "../images/makeupBrush.jpg";
import mascara from "../images/mascara.jpg";
import lipstick from "../images/lipstick.jpg";

function Products() {
  const products = [
    {
      name: "Luxury Face Cream",
      image: cream,
      price: "₹799",
      oldPrice: "₹999",
      badge: "Best Seller",
    },
    {
      name: "Hydrating Moisturizer",
      image: moisturizer,
      price: "₹399",
      oldPrice: "₹500",
      badge: "New",
    },
    {
      name: "Night Repair Cream",
      image: nightCream,
      price: "₹899",
      oldPrice: "₹1199",
      badge: "Popular",
    },
    {
      name: "Precision Eyeliner Pen",
      image: eyelinerPen,
      price: "₹100",
      oldPrice: "₹299",
      badge: "Trending",
    },
    {
      name: "Professional Makeup Sponge",
      image: makeupSponge,
      price: "₹80",
      oldPrice: "₹120",
      badge: "Sale",
    },
    {
      name: "Silk Compact Powder",
      image: compactPowder,
      price: "₹599",
      oldPrice: "₹799",
      badge: "Hot",
    },
    

    {
      name: "Luxury Matte Lipstick",
      image: lipstick,
      price: "₹90",
      oldPrice: "₹200",
      badge: "Favorite",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#050505] via-[#101010] to-[#181818] text-white">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-yellow-500/10 blur-[150px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-yellow-400/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="uppercase tracking-[6px] text-yellow-400 text-xs sm:text-sm font-medium">
            Beauty Collection
          </p>

          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold font-['Cormorant_Garamond']">
            Premium
            <span className="block bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Beauty Products
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400 text-sm sm:text-base leading-7">
            Discover our luxurious beauty essentials crafted to elevate your
            skincare and makeup routine.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -10,
              }}
              className="group overflow-hidden rounded-3xl border border-yellow-500/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:border-yellow-500/40"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Badge */}
                <div className="absolute left-4 top-4 rounded-full bg-yellow-500 px-3 py-1 text-xs font-semibold text-black shadow-lg">
                  {product.badge}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">

                <h3 className="text-xl font-semibold text-white font-['Cormorant_Garamond']">
                  {product.name}
                </h3>

                <div className="mt-3 flex items-center gap-3">
                  <span className="text-2xl font-bold text-yellow-400">
                    {product.price}
                  </span>

                  <span className="text-gray-500 line-through">
                    {product.oldPrice}
                  </span>
                </div>

                <p className="mt-3 text-sm text-gray-400 leading-6">
                  Premium quality beauty product designed for flawless results
                  and long-lasting performance.
                </p>

             
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 rounded-[35px] border border-yellow-500/20 bg-white/[0.03] p-8 sm:p-10 lg:p-14 text-center backdrop-blur-xl"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold font-['Cormorant_Garamond']">
            Beauty Starts With
            <span className="block text-yellow-400">
              Premium Care
            </span>
          </h2>

      
        </motion.div>

      </div>
    </div>
  );
}

export default Products;