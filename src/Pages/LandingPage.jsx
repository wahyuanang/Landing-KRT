import React from "react";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import JadwalPiket from "../Components/JadwalPiket";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="py-8">
        <HeroSection />
      </div>

      <div>
        <JadwalPiket />
      </div>
    </div>
  );
};

export default LandingPage;
