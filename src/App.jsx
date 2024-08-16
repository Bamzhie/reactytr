import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./Hero";
import Features from "./Features";
import RankingSection from "./Ranking";
import Reason from "./Reason";
import Insight from "./Insight";
import Testimonial from "./Testimonial";
import Faq from "./Faq";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Features />
      <RankingSection />
      <Reason />
      <Insight />
      <Testimonial />
      <Faq />
    </div>
  );
};

export default App;
