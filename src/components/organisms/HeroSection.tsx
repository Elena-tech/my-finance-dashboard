import React from "react";
import Button from "../atoms/Button";
import "../../styles/organisms/HeroSection.css";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  onCtaClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  ctaText,
  onCtaClick,
}) => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <Button text={ctaText} onClick={onCtaClick} />
      </div>
    </section>
  );
};

export default HeroSection;
