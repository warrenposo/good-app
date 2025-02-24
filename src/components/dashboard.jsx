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
import { useNavigate } from "react-router-dom";

const Dashboard = ({ setIsAuthenticated }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeContent, setActiveContent] = useState(null);
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleMenuClick = (content) => {
    setActiveContent(content);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate("/login");
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
        return <div>Welcome! .</div>;
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
            <li onClick={handleLogout}>Logout</li>
          </ul>
        </div>
      </div>
      <div className="main-content">
        <h1>Washington CC</h1>
        <div className="content-window">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;