import React from "react";
import "../../styles/molecules/StatsBox.css";

interface StatsBoxProps {
  title: string;
  subtitle: string;
}

const StatsBox: React.FC<StatsBoxProps> = ({ title, subtitle }) => {
  return (
    <div className="stats-box">
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  );
};

export default StatsBox;
