import React from "react";
import StatsBox from "../molecules/StatsBox";
import "../../styles/organisms/StatsSection.css";

interface StatItem {
  title: string;
  subtitle: string;
}

interface StatsSectionProps {
  stats: StatItem[];
}

const StatsSection: React.FC<StatsSectionProps> = ({ stats }) => {
  return (
    <section className="stats-section">
      {stats.map((item, idx) => (
        <StatsBox key={idx} title={item.title} subtitle={item.subtitle} />
      ))}
    </section>
  );
};

export default StatsSection;
