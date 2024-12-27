//import React from "react";
import "./DashboardCard.css";

const DashboardCard = ({ icon, title, amount, color }) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="flex items-center">
          <i className={`${icon} ${color}`}></i>
          <span className="ml-2">{title}</span>
        </div>
        <span>{amount}</span>
      </div>
    </div>
  );
};

export default DashboardCard;
