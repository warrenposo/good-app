import React from "react";


const Dumps = () => {
  const dumpsData = [
    { balance: "$40002", level: "$+$228", type: "MASTERCARD", class: "STANDARD", code: "CREDIT", category: "201", country: "TURKEY", bank: "YAP I'VE KREDI BANXASI, A.S.", action: "Buy ($205)" },
    { balance: "$23411", level: "$+$600", type: "VISA", class: "PREMIUM", code: "DEBIT", category: "301", country: "USA", bank: "CHASE BANK", action: "Buy ($365)" },
    { balance: "$75923", level: "$+3700", type: "MASTERCARD", class: "GOLD", code: "CREDIT", category: "401", country: "UK", bank: "HSBC BANK", action: "Buy ($205)" },
    { balance: "402753", level: "$+3100", type: "VISA", class: "CLASSIC", code: "DEBIT", category: "201", country: "CANADA", bank: "RBC BANK", action: "Buy ($265)" },
    { balance: "432111", level: "$+5500", type: "AMEX", class: "PLATINUM", code: "CREDIT", category: "601", country: "FRANCE", bank: "BNP PARIBAS", action: "Buy ($905)" },
    { balance: "$21009", level: "$+4200", type: "MASTERCARD", class: "BUSINESS", code: "CREDIT", category: "301", country: "GERMANY", bank: "DEUTSCHE BANK", action: "Buy ($395)" },
    { balance: "$75923", level: "$+3700", type: "MASTERCARD", class: "GOLD", code: "CREDIT", category: "401", country: "UK", bank: "HSBC BANK", action: "Buy ($205)" },
    { balance: "402753", level: "$+3100", type: "VISA", class: "CLASSIC", code: "DEBIT", category: "201", country: "CANADA", bank: "RBC BANK", action: "Buy ($265)" },
    { balance: "432111", level: "$+5500", type: "AMEX", class: "PLATINUM", code: "CREDIT", category: "601", country: "FRANCE", bank: "BNP PARIBAS", action: "Buy ($905)" },
    { balance: "$40002", level: "$+$228", type: "MASTERCARD", class: "STANDARD", code: "CREDIT", category: "201", country: "TURKEY", bank: "YAP I'VE KREDI BANXASI, A.S.", action: "Buy ($205)" },
    { balance: "$23411", level: "$+$600", type: "VISA", class: "PREMIUM", code: "DEBIT", category: "301", country: "USA", bank: "CHASE BANK", action: "Buy ($365)" },
    { balance: "$75923", level: "$+3700", type: "MASTERCARD", class: "GOLD", code: "CREDIT", category: "401", country: "UK", bank: "HSBC BANK", action: "Buy ($205)" },
    { balance: "402753", level: "$+3100", type: "VISA", class: "CLASSIC", code: "DEBIT", category: "201", country: "CANADA", bank: "RBC BANK", action: "Buy ($265)" },
    { balance: "432111", level: "$+5500", type: "AMEX", class: "PLATINUM", code: "CREDIT", category: "601", country: "FRANCE", bank: "BNP PARIBAS", action: "Buy ($905)" },
    { balance: "$21009", level: "$+4200", type: "MASTERCARD", class: "BUSINESS", code: "CREDIT", category: "301", country: "GERMANY", bank: "DEUTSCHE BANK", action: "Buy ($395)" },
    { balance: "$75923", level: "$+3700", type: "MASTERCARD", class: "GOLD", code: "CREDIT", category: "401", country: "UK", bank: "HSBC BANK", action: "Buy ($205)" },
    { balance: "402753", level: "$+3100", type: "VISA", class: "CLASSIC", code: "DEBIT", category: "201", country: "CANADA", bank: "RBC BANK", action: "Buy ($265)" },
    { balance: "432111", level: "$+5500", type: "AMEX", class: "PLATINUM", code: "CREDIT", category: "601", country: "FRANCE", bank: "BNP PARIBAS", action: "Buy ($905)" },
    { balance: "$21009", level: "$+4200", type: "MASTERCARD", class: "BUSINESS", code: "CREDIT", category: "301", country: "GERMANY", bank: "DEUTSCHE BANK", action: "Buy ($395)" },
    { balance: "$75923", level: "$+3700", type: "MASTERCARD", class: "GOLD", code: "CREDIT", category: "401", country: "UK", bank: "HSBC BANK", action: "Buy ($205)" },
    { balance: "402753", level: "$+3100", type: "VISA", class: "CLASSIC", code: "DEBIT", category: "201", country: "CANADA", bank: "RBC BANK", action: "Buy ($265)" },
    { balance: "432111", level: "$+5500", type: "AMEX", class: "PLATINUM", code: "CREDIT", category: "601", country: "FRANCE", bank: "BNP PARIBAS", action: "Buy ($905)" },
    { balance: "$21009", level: "$+4200", type: "MASTERCARD", class: "BUSINESS", code: "CREDIT", category: "301", country: "GERMANY", bank: "DEUTSCHE BANK", action: "Buy ($395)" },
    { balance: "$75923", level: "$+3700", type: "MASTERCARD", class: "GOLD", code: "CREDIT", category: "401", country: "UK", bank: "HSBC BANK", action: "Buy ($205)" },
    { balance: "402753", level: "$+3100", type: "VISA", class: "CLASSIC", code: "DEBIT", category: "201", country: "CANADA", bank: "RBC BANK", action: "Buy ($265)" },
    { balance: "432111", level: "$+5500", type: "AMEX", class: "PLATINUM", code: "CREDIT", category: "601", country: "FRANCE", bank: "BNP PARIBAS", action: "Buy ($905)" },
    { balance: "$21009", level: "$+4200", type: "MASTERCARD", class: "BUSINESS", code: "CREDIT", category: "301", country: "GERMANY", bank: "DEUTSCHE BANK", action: "Buy ($395)" },
    { balance: "$75923", level: "$+3700", type: "MASTERCARD", class: "GOLD", code: "CREDIT", category: "401", country: "UK", bank: "HSBC BANK", action: "Buy ($205)" },
    { balance: "402753", level: "$+3100", type: "VISA", class: "CLASSIC", code: "DEBIT", category: "201", country: "CANADA", bank: "RBC BANK", action: "Buy ($265)" },
    { balance: "432111", level: "$+5500", type: "AMEX", class: "PLATINUM", code: "CREDIT", category: "601", country: "FRANCE", bank: "BNP PARIBAS", action: "Buy ($905)" },
    { balance: "$21009", level: "$+4200", type: "MASTERCARD", class: "BUSINESS", code: "CREDIT", category: "301", country: "GERMANY", bank: "DEUTSCHE BANK", action: "Buy ($395)" },
    { balance: "601256", level: "$+2600", type: "DISCOVER", class: "STANDARD", code: "DEBIT", category: "101", country: "AUSTRALIA", bank: "COMMONWEALTH BANK", action: "Buy ($2116)" },
    { balance: "412003", level: "$+5000", type: "VISA", class: "SIGNATURE", code: "CREDIT", category: "701", country: "SPAIN", bank: "SANTANDER", action: "Buy ($805)" },
    { balance: "352809", level: "$+4300", type: "JCB", class: "PREMIUM", code: "DEBIT", category: "501", country: "JAPAN", bank: "MIZUNO BANK", action: "Buy ($4105)" }
  ];

  return (
    <div className="dumps">
      <h1>Dumps Updates Ready! 2025/01/24</h1>
      <div className="filters">
        <div className="filter-section">
          <label>Category:</label>
          <select>
            <option>All</option>
            <option>Last 4:</option>
          </select>
        </div>
        <div className="filter-section">
          <label>Date:</label>
          <input type="text" placeholder="Enter BIN" />
        </div>
        <div className="filter-section">
          <label>Last 4:</label>
          <input type="text" placeholder="Last 4:" />
        </div>
        <div className="filter-section">
          <label>Type:</label>
          <select>
            <option>All</option>
          </select>
        </div>
        <div className="filter-section">
          <label>Class:</label>
          <select>
            <option>All</option>
          </select>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Balance Checked (MIN-S)</th>
            <th>Level</th>
            <th>Type</th>
            <th>Class</th>
            <th>Code</th>
            <th>Category</th>
            <th>Country</th>
            <th>Bank</th>
            <th>Action/Result</th>
          </tr>
        </thead>
        <tbody>
          {dumpsData.map((dump, index) => (
            <tr key={index}>
              <td>{dump.balance}</td>
              <td>{dump.level}</td>
              <td>{dump.type}</td>
              <td>{dump.class}</td>
              <td>{dump.code}</td>
              <td>{dump.category}</td>
              <td>{dump.country}</td>
              <td>{dump.bank}</td>
              <td><button className="buy-button">{dump.action}</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dumps;