import React, { useState, useEffect } from "react";
import { FaRegBell, FaWhatsapp, FaBed, FaHome, FaBars } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { IoMdCheckboxOutline } from "react-icons/io";
import "./Topbar.css";
import axios from "axios"; // Import Axios for API calls

const Topbar = () => {
  // State for bubble visibility and hospital name
  const [showBubble, setShowBubble] = useState(false);
  const [hospitalName, setHospitalName] = useState("Loading...");

  // Toggle bubble visibility
  const toggleBubble = () => {
    setShowBubble((prev) => !prev);
  };

  // Fetch hospital name based on latestId from localStorage
  useEffect(() => {
    const fetchHospitalName = async () => {
      try {
        const latestId = localStorage.getItem('latestId') || '13';
        const response = await axios.get(`http://localhost:5000/settings/general/${latestId}`);
        setHospitalName(response.data.hospitalName || "Unknown Hospital");
      } catch (error) {
        console.error('Error fetching hospital name:', error);
        setHospitalName("Failed to load hospital name");
      }
    };

    fetchHospitalName();
  }, []);

  return (
    <div className="topbar">
      {/* Left Section */}
      <div className="rn">
        <h2 className="dd">
          <FaBars className="fb" />
          {hospitalName}
          <a href="/" className="home-link">
            <FaHome className="hi" />
          </a>
        </h2>
      </div>

      {/* Right Section */}
      <div className="ht">
        {/* Search Input */}
        <span className="bb">
          <input type="text" placeholder="Search By Patient Name" />
        </span>
        {/* Flag Icon */}
        <img
          alt="United States"
          src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
          className="ic"
        />
        {/* Icons Section */}
        <a href="/notifications" className="notification-link">
          <FaRegBell className="ic" />
        </a>
        <FaBed className="ic" />
        <FaWhatsapp className="ic" />
        <a href="/calendar" className="calendar-link">
          <SlCalender className="ic" />
        </a>
        {/* Bubble Toggle */}
        <div className="icon-with-bubble">
          <IoMdCheckboxOutline className="ic" onClick={toggleBubble} />
          {showBubble && (
            <div className="bubble">
              <p>. Today you have 0 Pending Tasks</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
