import React from "react";
import Hero from "../components/Hero";
// import Intro from "../components/Intro";
import Footer from "../components/Footer";
import WhyMe from "../components/WhyMe";
import SimpleService from "../components/SimpleService";
import UserReview from "../components/UserReview";

import aboutImg from "../images/aboutImg.jpeg";

function Home() {
  return (

    <div className="relative min-h-screen overflow-hidden">

      {/* Fixed Background */}
      <div
        className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${aboutImg})`,
          backgroundAttachment: "fixed",
        }}
      />

      {/* Dark Overlay */}
      <div className="fixed inset-0 -z-10 bg-black/75" />

      {/* Content */}
      
      <Hero />
      <WhyMe />
      <SimpleService />
      <UserReview />
      
     

    </div>
  );
}

export default Home;