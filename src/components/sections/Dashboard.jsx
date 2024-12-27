import React from 'react';
import "./Billing.css";
import { FaShoppingCart } from "react-icons/fa"; // Import cart icon from react-icons

const Dashboard = () => {
  return (
    <div className='bl'>
      <h1>Dashboard</h1>
      <div className="cards-container">
        {/* Card 1 */}
        <div className="card">
          <FaShoppingCart className="card-icon" />
          <div className="cont">
          <span className="card-heading">Total Sales</span>
          <span className="card-amount">$500</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card">
          <FaShoppingCart className="card-icon" />
          <h2 className="card-amount">$1,200</h2>
          <p className="card-heading">Revenue</p>
        </div>

        {/* Card 3 */}
        <div className="card">
          <FaShoppingCart className="card-icon" />
          <h2 className="card-amount">50</h2>
          <p className="card-heading">Orders</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
