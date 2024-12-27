//import React from "react";
import "./Calendar.css";

const Calendar = () => {
  return (
    <div className="calendar">
      <div className="calendar-header">
        <div className="flex items-center">
          <button className="mr-2"><i className="fas fa-chevron-left"></i></button>
          <button className="mr-2"><i className="fas fa-chevron-right"></i></button>
          <span>November 17 - 23 2024</span>
        </div>
        <div className="flex items-center">
          <button className="mr-2">Month</button>
          <button className="mr-2">Week</button>
          <button className="mr-2">Day</button>
        </div>
      </div>
      <div className="calendar-body">
        <table>
          <thead>
            <tr>
              <th>Sun 11/17</th>
              <th>Mon 11/18</th>
              <th>Tue 11/19</th>
              <th>Wed 11/20</th>
              <th>Thu 11/21</th>
              <th>Fri 11/22</th>
              <th>Sat 11/23</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>all-day</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>all-day</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>all-day</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>all-day</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>all-day</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Calendar;
