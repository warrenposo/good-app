import React from "react";
import "./CreditCards.css";

const CreditCards = () => {
  const cards = [
    { type: "VISA", bin: "471530", expDate: "1202029", category: "Category Info", country: "U.S.A", state: "NE", city: "Omaha", zip: "68108", action: "Buy (55.00)" },
    { type: "VISA", bin: "471530", expDate: "1202029", category: "Category Info", country: "U.S.A", state: "NE", city: "Omaha", zip: "68108", action: "Buy (55.00)" },
    { type: "VISA", bin: "471530", expDate: "012030", category: "Category Info", country: "U.S.A", state: "CA", city: "Los Angeles", zip: "90001", action: "Buy (55.00)" },
    { type: "VISA", bin: "471530", expDate: "012030", category: "Category Info", country: "U.S.A", state: "TX", city: "Houston", zip: "77001", action: "Buy (55.00)" },
    { type: "VISA", bin: "471530", expDate: "020031", category: "Category Info", country: "U.S.A", state: "FL", city: "Miami", zip: "33101", action: "Buy (55.00)" },
    { type: "VISA", bin: "471530", expDate: "1202029", category: "Category Info", country: "U.S.A", state: "NE", city: "Omaha", zip: "68108", action: "Buy (55.00)" },
    { type: "VISA", bin: "471530", expDate: "012030", category: "Category Info", country: "U.S.A", state: "CA", city: "Los Angeles", zip: "90001", action: "Buy (55.00)" },
    { type: "VISA", bin: "471530", expDate: "012030", category: "Category Info", country: "U.S.A", state: "TX", city: "Houston", zip: "77001", action: "Buy (55.00)" },
    { type: "VISA", bin: "471530", expDate: "020031", category: "Category Info", country: "U.S.A", state: "FL", city: "Miami", zip: "33101", action: "Buy (55.00)" },
    { type: "VISA", bin: "471530", expDate: "1202029", category: "Category Info", country: "U.S.A", state: "NE", city: "Omaha", zip: "68108", action: "Buy (55.00)" },
    { type: "VISA", bin: "471530", expDate: "012030", category: "Category Info", country: "U.S.A", state: "CA", city: "Los Angeles", zip: "90001", action: "Buy (55.00)" },
    { type: "VISA", bin: "471530", expDate: "012030", category: "Category Info", country: "U.S.A", state: "TX", city: "Houston", zip: "77001", action: "Buy (55.00)" },
    { type: "VISA", bin: "471530", expDate: "020031", category: "Category Info", country: "U.S.A", state: "FL", city: "Miami", zip: "33101", action: "Buy (55.00)" },
    { type: "VISA", bin: "471530", expDate: "1202029", category: "Category Info", country: "U.S.A", state: "NE", city: "Omaha", zip: "68108", action: "Buy (55.00)" },
    { type: "VISA", bin: "471530", expDate: "012030", category: "Category Info", country: "U.S.A", state: "CA", city: "Los Angeles", zip: "90001", action: "Buy (55.00)" },
    { type: "VISA", bin: "471530", expDate: "012030", category: "Category Info", country: "U.S.A", state: "TX", city: "Houston", zip: "77001", action: "Buy (55.00)" },
    { type: "VISA", bin: "471530", expDate: "020031", category: "Category Info", country: "U.S.A", state: "FL", city: "Miami", zip: "33101", action: "Buy (55.00)" },
    { type: "VISA", bin: "471530", expDate: "1202029", category: "Category Info", country: "U.S.A", state: "NE", city: "Omaha", zip: "68108", action: "Buy (55.00)" },
    { type: "VISA", bin: "471530", expDate: "012030", category: "Category Info", country: "U.S.A", state: "CA", city: "Los Angeles", zip: "90001", action: "Buy (55.00)" },
    { type: "VISA", bin: "471530", expDate: "012030", category: "Category Info", country: "U.S.A", state: "TX", city: "Houston", zip: "77001", action: "Buy (55.00)" },
    { type: "VISA", bin: "471530", expDate: "020031", category: "Category Info", country: "U.S.A", state: "FL", city: "Miami", zip: "33101", action: "Buy (55.00)" },
    { type: "VISA", bin: "471530", expDate: "1202029", category: "Category Info", country: "U.S.A", state: "NE", city: "Omaha", zip: "68108", action: "Buy (55.00)" },
    { type: "VISA", bin: "471530", expDate: "012030", category: "Category Info", country: "U.S.A", state: "CA", city: "Los Angeles", zip: "90001", action: "Buy (55.00)" },
    { type: "VISA", bin: "471530", expDate: "012030", category: "Category Info", country: "U.S.A", state: "TX", city: "Houston", zip: "77001", action: "Buy (55.00)" },
    { type: "VISA", bin: "471530", expDate: "020031", category: "Category Info", country: "U.S.A", state: "FL", city: "Miami", zip: "33101", action: "Buy (55.00)" },
    { type: "VISA", bin: "471530", expDate: "020031", category: "Category Info", country: "U.S.A", state: "NY", city: "New York", zip: "10001", action: "Buy (55.00)" }
    
  ];

  return (
    <div className="credit-cards">
      <h2>Credit Cards</h2>
      <table>
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
          {cards.map((card, index) => (
            <tr key={index}>
              <td>{card.type}</td>
              <td>{card.bin}</td>
              <td>{card.expDate}</td>
              <td>{card.category}</td>
              <td>{card.country}</td>
              <td>{card.state}</td>
              <td>{card.city}</td>
              <td>{card.zip}</td>
              <td>
                <button className="buy-button">{card.action}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CreditCards;