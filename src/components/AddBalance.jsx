import React from "react";


const AddBalance = () => {
  return (
    <div className="add-balance-container">
      <h2 className="add-balance-title">Add Balance</h2>
      <p className="min-deposit">minimal = $50</p>

      {/* Payment Methods Table */}
      <div className="payment-table">
        <table>
          <thead>
            <tr>
              <th>Payment System</th>
              <th>Value (USD)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {["Bitcoin", "Ethereum", "Bnb Coin", "Tether"].map((crypto, index) => (
              <tr key={index}>
                <td className="crypto-name">{crypto}</td>
                <td><input type="text" placeholder="USD" /></td>
                <td><button className="deposit-btn">Deposit</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* BTC Rate */}
      <p className="btc-rate">1 USD = 0.00000943 BTC</p>
      <p className="btc-info">*Bitcoin - Automatically (~10min)</p>

      {/* Bonus Section */}
      <h3 className="bonus-title">FULL AUTOMATIC BONUS SYSTEMS:</h3>
      <div className="bonus-container">
        <div className="bonus-card">
          <p className="bonus-header">FOR ONE TIME DEPOSIT $100</p>
          <h3>5% BONUS</h3>
          <button className="bonus-btn">GET BONUS 5%</button>
        </div>

        <div className="bonus-card">
          <p className="bonus-header">FOR ONE TIME DEPOSIT $200-$400</p>
          <h3>10% BONUS</h3>
          <button className="bonus-btn">GET BONUS 10%</button>
        </div>

        <div className="bonus-card">
          <p className="bonus-header">FOR ONE TIME DEPOSIT $400-$600 <span className="hot-badge">HOT</span></p>
          <h3>15% BONUS</h3>
          <button className="bonus-btn">GET BONUS 15%</button>
        </div>
      </div>
    </div>
  );
};

export default AddBalance;
