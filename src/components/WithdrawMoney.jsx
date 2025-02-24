import React from "react";


const Withdrawmoney = () => {
  return (
    <div className="withdraw-container">
      <h2 className="withdraw-title">Instant Withdraw</h2>

      {/* Withdraw Table */}
      <div className="withdraw-table">
        <table>
          <thead>
            <tr>
              <th>Withdraw System</th>
              <th>Value</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="text" placeholder="Your Bitcoin Wallet" />
              </td>
              <td>
                <input type="text" placeholder="USD" />
              </td>
              <td>
                <button className="withdraw-btn">WITHDRAW</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Withdrawmoney;
