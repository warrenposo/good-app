import React from "react";
import "./Mycards.css";

const Mycards = () => {
  return (
    <div className="user-panel">
      <h3 className="panel-title">User Panel</h3>
      
      <div className="filter-section">
        <div className="filter-group">
          <label>Category:</label>
          <select>
            <option>All</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Bin:</label>
          <input type="text" />
        </div>

        <div className="filter-group">
          <label>Country:</label>
          <select>
            <option>All</option>
          </select>
        </div>

        <div className="filter-group">
          <label>State:</label>
          <select>
            <option>All</option>
          </select>
        </div>

        <div className="filter-group">
          <label>City:</label>
          <select>
            <option>All</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Zip:</label>
          <input type="text" />
        </div>

        <div className="filter-group">
          <label>Type:</label>
          <select>
            <option>All</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Cards per page:</label>
          <select>
            <option>10</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Page:</label>
          <select>
            <option>1</option>
          </select>
        </div>
      </div>

      <div className="button-container">
        <button className="go-button">Go!</button>
      </div>

      <table className="cards-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Bin</th>
            <th>Exp Date</th>
            <th>Category</th>
            <th>Country</th>
            <th>State</th>
            <th>City</th>
            <th>Zip</th>
            <th>Action/Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="9" className="no-cards">
              You have no cards available.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Mycards;
