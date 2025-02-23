import React, { useState } from "react";
import "./Dashboard.css";
import News from "./News";
import CreditCards from "./CreditCards";
import Dumps from "./Dumps";
import CCChecker from "./CCChecker";
import Bonus from "./Bonus";
import MyCards from "./MyCards";
import MyDumps from "./MyDumps";
import AddBalance from "./AddBalance";
import WithdrawMoney from "./WithdrawMoney";

const Dashboard = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeContent, setActiveContent] = useState(null);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleMenuClick = (content) => {
    setActiveContent(content);
  };

  const renderContent = () => {
    switch (activeContent) {
      case "News":
        return <News />;
      case "Credit Cards":
        return <CreditCards />;
      case "Dumps":
        return <Dumps />;
      case "CC Checker":
        return <CCChecker />;
      case "Bonus":
        return <Bonus />;
      case "My Cards":
        return <MyCards />;
      case "My Dumps":
        return <MyDumps />;
      case "Add Balance":
        return <AddBalance />;
      case "Withdraw Money":
        return <WithdrawMoney />;
      default:
        return <div>Welcome! Select a menu item to view and edit content.</div>;
    }
  };

  return (
    <div className="dashboard">
      <div className={`drawer ${isDrawerOpen ? "open" : ""}`}>
        <button className="drawer-toggle" onClick={toggleDrawer}>
          {isDrawerOpen ? "✕" : "☰"}
        </button>
        <div className="drawer-content">
          <h2>Menu</h2>
          <ul>
            <li onClick={() => handleMenuClick("News")}>News</li>
            <li onClick={() => handleMenuClick("Credit Cards")}>Credit Cards</li>
            <li onClick={() => handleMenuClick("Dumps")}>Dumps</li>
            <li onClick={() => handleMenuClick("CC Checker")}>CC Checker</li>
            <li onClick={() => handleMenuClick("Bonus")}>Bonus</li>
            <li onClick={() => handleMenuClick("My Cards")}>My Cards</li>
            <li onClick={() => handleMenuClick("My Dumps")}>My Dumps</li>
            <li onClick={() => handleMenuClick("Add Balance")}>Add Balance</li>
            <li onClick={() => handleMenuClick("Withdraw Money")}>Withdraw Money</li>
          </ul>
        </div>
      </div>
      <div className="main-content">
        <h1>Welcome to CCDCVVIDarrays.viii</h1>
        <div className="content-window">
          {renderContent()}
        </div>
        <div className="user-panel">
          <h2>User Panel</h2>
          <div className="menu">
            <h3>Menu</h3>
            <div className="category">
              <span>Category: All</span>
              <span>Bits:</span>
              <span>Country: All</span>
              <span>Stats:</span>
              <span>City: All</span>
              <span>Zip:</span>
              <span>Type: All</span>
            </div>
          </div>
          <div className="client-cards">
            <h3>Client cards</h3>
            <div className="card-actions">
              <button>GC Checker</button>
              <button>BOXING $</button>
              <button>My Clients</button>
              <button>My Daming</button>
              <button>Add Balance</button>
              <button>Withdraw Money</button>
            </div>
          </div>
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Bits</th>
                <th>Exp Date</th>
                <th>Category</th>
                <th>Country</th>
                <th>Stats</th>
                <th>City</th>
                <th>Zip</th>
                <th>Action/Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>VISA</td>
                <td>471630</td>
                <td>1/20203</td>
                <td>Category Info</td>
                <td>U.S.A</td>
                <td>NE</td>
                <td>Omaha</td>
                <td>68168</td>
                <td><button>Buy ($5.00)</button></td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;