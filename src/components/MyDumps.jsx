import React from "react";
import "./Dumps.css";

const Dumps = () => {
  return (
    <div className="dumps-container">
      <h2 className="dumps-title">
        Dumps <span className="updates-text">Updates Ready! 2025/01/24</span>
      </h2>

      <div className="filters">
        <div className="filter-group">
          <label>Category:</label>
          <select>
            <option>All</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Bin:</label>
          <input type="text" placeholder="Enter BIN" />
        </div>

        <div className="filter-group">
          <label>Last 4:</label>
          <input type="text" placeholder="Last 4" />
        </div>

        <div className="filter-group">
          <label>Type:</label>
          <select>
            <option>All</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Class:</label>
          <select>
            <option>All</option>
          </select>
        </div>
      </div>

      <table className="dumps-table">
        <thead>
          <tr>
            <th>Number</th>
            <th>Balance Checked (MIN=$)</th>
            <th>Level</th>
            <th>Class</th>
            <th>Code</th>
            <th>Type</th>
            <th>Category</th>
            <th>Country</th>
            <th>Bank</th>
            <th>Action/Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="10" className="no-dumps">You have no dumps available.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Dumps;
