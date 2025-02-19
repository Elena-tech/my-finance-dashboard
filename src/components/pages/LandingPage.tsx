import React from "react";
import HeroSection from "../organisms/HeroSection";
import SingleStatSection from "../organisms/SingleStatSection";
import ChartsShowcaseSection from "../organisms/ChartsShowcaseSection";

const LandingPage: React.FC = () => {
  return (
    <>
      <HeroSection
        title="We have our pulse on the global software market."
        subtitle="Track billions of data points and capture market momentum."
        ctaText="Get Started"
        onCtaClick={() => console.log("CTA Clicked")}
      />

      {/* First single-stat block */}
      <SingleStatSection
        headline="1bn+ private tech market data points tracked"
        description="Our market analysis is anchored in a decade of proprietary data. Our AI-enabled platform helps you expand and scale."
      />

      {/* Second single-stat block */}
      <SingleStatSection
        headline="14m+ companies monitored daily"
        description="Pulse monitors both software companies and individual experts, surfacing attractive M&A opportunities and identifying relevant talent."
      />

      {/* The new 2×2 charts section goes here */}
      <ChartsShowcaseSection />
    </>
  );
};

export default LandingPage;
