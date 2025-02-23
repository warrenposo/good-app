import React from "react";
import "./CCChecker.css";

const CCChecker = () => {
  return (
    <div className="cc-checker">
      <h1>Credit Card Checker 1 line = 1 card</h1>
      <div className="price-info">
        <p>Price:</p>
        <p>Checker price: 0.3 $ /piece</p>
        <p>1 card = 1 line</p>
      </div>
      <div className="example">
        <p>Example:</p>
        <pre>
          54574797921000000003224116
          54574797921000000003224116
          5.4542.4999.1000.0000000002445184.00a.Do_Ls_3.76rawCStandardKDMIStandardLd:270C275.CrowardMw1
        </pre>
      </div>
      <div className="input-section">
        <h2>Credit Card Checker</h2>
        <textarea placeholder="Paste your credit card list here..." />
      </div>
      <div className="actions">
        <button>Duplicates Remove</button>
        <button>Sort by type</button>
        <button>Sort Date</button>
        <button>Check DIN Info</button>
      </div>
      <button className="check-now">Check Now</button>
    </div>
  );
};

export default CCChecker;