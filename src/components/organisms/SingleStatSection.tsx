import React from "react";
import "../../styles/organisms/SingleStatSection.css";

interface SingleStatSectionProps {
  headline: string;
  description: string;
}

const SingleStatSection: React.FC<SingleStatSectionProps> = ({
  headline,
  description,
}) => {
  return (
    <section className="single-stat-section">
      <h2 className="stat-headline">{headline}</h2>
      <p className="stat-description">{description}</p>
    </section>
  );
};

export default SingleStatSection;
