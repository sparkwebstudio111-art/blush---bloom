import React from "react";
import banner from "../images/banner.png";

function Hero() {
  return (
    <section className="relative py-10 w-full overflow-hidden bg-red-700">
      
      {/* Background */}
      <div className="absolute inset-0 bg-red-700"></div>

      {/* Blur Effects */}
      <div className="absolute top-0 left-0 w-40 h-40 sm:w-72 sm:h-72 bg-red-300/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-40 h-40 sm:w-72 sm:h-72 bg-pink-300/20 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 w-full">
        
        {/* Image Container */}
        <div className="w-full">
          
          <img
            src={banner}
            alt="Blush and Bloom Banner"
            className="
              w-full
              h-auto
              max-h-screen
              object-contain
              block
              
            "
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;