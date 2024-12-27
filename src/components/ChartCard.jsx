//import React from "react";
import "./ChartCard.css";

const ChartCard = ({ title }) => {
  return (
    <div className="card">
      <div className="card-header">
        <span>{title}</span>
      </div>
      <div className="card-body">
        <div className="chart">
          {/* Placeholder for chart */}
        </div>
      </div>
    </div>
  );
};

export default ChartCard;
