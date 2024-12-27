//import React from "react";
import "./UserCard.css";

const UserCard = ({ icon, role, count }) => {
  return (
    <div className="user-card">
      <div className="flex items-center">
        <i className={icon}></i>
        <span className="ml-2">{role}</span>
      </div>
      <span>{count}</span>
    </div>
  );
};

export default UserCard;
