import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./components/login";
import Login2 from "./components/login2";
import Dashboard from "./components/dashboard";
import Dashboard2 from "./components/dashboard2";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="home-container">
              <header className="header">
                <h1>GOOD HIGH QUALITY CC FULLZ & CVV DUMPS SHOP 2025</h1>
                <p>WELCOME TO HIGH QUALITY CC CVV DUMPS SHOP | FIRST HAND NO RESELL</p>
                <p1>⭐❗ Welcome to the CARDINGCLUB the Best and NEW CC CVV & Dump Shop with HIGHEST quality. ❗⭐</p1>
              </header>

              <section className="buttons-container">
                <Link to="/login" className="button">CC site</Link>
                <Link to="/login2" className="button">Cvv shop</Link>
                <button className="button">Valid Cards</button>
                <button className="button">Bank Logs</button>
              </section>

              <section className="pages-container">
                {/* Page 1 */}
                <div className="page page-1">
                  <h2>Domain: CARDINGCLUB</h2>
                  <p>
                    - FIRST HAND STUFF<br />
                    - GOOD/HIGH VALID RATE<br />
                    - WORLDWIDE / USA CC<br />
                    - VOUCHER CODE SYSTEM<br />
                    - WE USE CHKCARDS/ ALL REFUNDS ARE AUTOMATIC<br />
                    - DAILY UPDATES<br />
                    - TICKET SYSTEM FOR PROBLEM SOLVING<br /><br />

                    Seller request is open now:<br />
                    -&gt; 70-100% vr needed<br />
                    -&gt; daily updates [min 100cc]<br />
                    -&gt; you get 100% of your sales if first hand data<br />
                    -&gt; fast sales<br />
                    -&gt; fast withdrawals [same day]<br />
                    -&gt; Support in sites 24/7<br /><br />

                    #Dumpshop #Cvvdumps #cvvdumpssite #bestdumpsshop<br />
                    #cvvshop #cvvsite #cvvfullz #fullzstore #fullzshop
                  </p>
                  <button className="card-button">Visit Carding Club</button>
                </div>

                {/* Page 2 */}
                <div className="page page-2">
                  <h2>⭐❗ Welcome to the CARDINGCLUB the Best and NEW CC CVV & Dump Shop with HIGHEST quality. ❗⭐</h2>
                  <p>#Cvvfullz #cvvshop #bestcvvshop #cvvsites #buycvv #buyfullz #bestcvvsites #cheapcvv #cvvsite #fullzstore #fullzshop #bestfullz #cvvdumps #cvvshoponline #cvvfullzinfo</p>
                  <h3>SALES RULES:</h3>
                  <p>
                    The probability of being valid of these cards is very high.<br />
                    The price is favorable.<br />
                    We have a large database with great diversity.<br /><br />

                    Deliver purchased CVV immediately.<br /><br />

                    We cannot guarantee or control the account balance of the cards we sell.<br /><br />

                    There are different types of cards: non-refundable and refundable.<br /><br />

                    <strong>REFUND RULES:</strong><br /><br />

                    Purchased refundable cards can be refunded within 5 to 30 minutes after sales.<br /><br />

                    Valid cards cannot be refunded.<br /><br />

                    We only accept BTC, USDT, ETH, and LTC payments.<br /><br />

                    Quick / automatic payment.<br /><br />

                    The first deposit of a new user created is $50, and $55 will be added to your balance.<br />
                    Accounts of new users who do not deposit within 7 days will be automatically deleted.
                  </p>
                  <h3>PRECAUTIONS FOR USE:</h3>
                  <p>
                    Please keep your own account and password. Do not share your password with anyone.<br /><br />

                    We will not save your password. If your password is lost, we will not be responsible.<br /><br />

                    buy cvv with debit card, buy cvv2, cvv shop telegram, buy non vbv cc online, buy cvv fullz online, sites to buy cc for<br />
                    buy credit card dumps online, buy live cc for carding, cvv shop sites, cvv bins for sale, legit cvv shops,<br />
                    dumps for sale cvv, milad cc shop, forum cvv shop, buy ssn dob dl fullz, buy cvv with paypal, cvv dumps for sale,<br />
                    buy cc fullz with debit card, shop dumps with pin, buy cvv shop, master cvv shop, trusted cvv shop 2023 list,<br />
                    approved cvv shop, buy cc fullz with paypal, legit dumps, good cvv shop, non vbv live cc, cc cvv shop online,<br />
                    dark web cvv shop, dumps and cvv2 shop, new dumps shop, top cvv shop, cvv fullz online shop, dumps and cvv<br />
                    buy ssn fullz online, dumps with pin sites, new cc dump sites, dumps with pin online shop, live non vbv cc with<br />
                    beat cvv shop online, best sites to buy cc dumps, best cvv shop 2023, cvv ssn dob shop, buy cvv 2023, valid cc<br />
                    card dumps for sale, buy cheap fullz, buy cc online for carding, new cvv shop, cvv shop reddit, buy cc dumps with<br />
                    buy bank logins cvv, no cvv shopping, legit cc dumps, buy cc cvv online, verified cvv shop, cvv selling sites, legit<br />
                    sites to buy cc,<br />
                    auto cvv shop, buy fullz ssn dob dl, fullz for sale 2023, sites for buying cc, buy cc dumps fullz, buy cvv and<br />
                    dumps, buy fullz with paypal,<br />
                    non vbv cvv shop, full cvv shop, paypal cvv shop, trusted cc shops, buy cvv2 online, dumpscc, best site for buying<br />
                    cc, buy cheap cvv,<br />
                    no cvv shopping sites, buy vbv cc online, dumps with pin website, buy ssn cvv, good dumps shop, buy cc dumps<br />
                    online, buy cvv with credit card,<br />
                    cvv account shop, trusted cvv sites, buy track 1 and 2 dumps online, buy cc cvv fullz, buy cvv dumps<br />
                    online, centralshop cvv shop,<br />
                    buy cvv cheap, cvv vbv shop, buy cvv cards online, buy live cc non vbv, freshbase cvv, buy cheap cc dumps, legit cvv<br />
                    shop 2023,<br />
                    atm dumps with pin shop, unicc dumps cvv shop, buy live fullz, buy fresh cvv, best cvv shop forum, buy gift cards<br />
                    no cvv,<br />
                    valid dumps shop, buy fullz info, credit card dump shop, trusted dumps shop, cvv shop fresh, no cvv shop, top<br />
                    dumps shop,<br />
                    buy cc and dumps, buy dumps shop credit cards with cvv2, buy gift cards online no cvv, buy online no cvv, cvv<br />
                    shop cheap,
                  </p>

                  <button className="card-button">Darkweb shop</button>
                </div>

                {/* Page 3 */}
                <div className="page page-3">
                  <h2>⭐❗ Welcome to the CARDINGCLUB the Best and NEW CC CVV & Dump Shop with HIGHEST quality. ❗⭐</h2>
                  <button className="card-button">Visit Carding Club</button>
                  <p>
                    - Only FRESH sniffed with good valid from our team<br />
                    - Free registration<br /><br />

                    - CC + CVV + full address<br /><br />

                    - DO NOT STORE RUBISH DEAD CC OR POOR VALID<br /><br />

                    - Support 24/7 in site<br />
                    We are looking for partners with cc bases with premium terms.<br /><br />

                    • FLEXIBLE TERMS FOR OUR SELLERS<br />
                    • PERSONAL ADMIN PANEL FOR SELLER WITH ALL STATS<br />
                    • BEST PERCENT FOR BEST VALID<br />
                    • NOREF FOR FRESH SNIFFED CC<br />
                    • PERMANENT base sellers can may recive up to 90%<br />
                    • GOOD cvv shop engine with comfortable design and filters<br />
                    • HQ staff<br />
                    • Fast payments<br /><br />

                    #Cvvshop #Bestcvvshop #cvvfullz #fullzstore #buycvv<br />
                    #cvvsite #cvvshopadmin #freshcvv #newcvvshop
                  </p>
                  <button className="card-button">Darkweb shop</button>
                </div>

                {/* Page 4 */}
                <div className="page page-4">
                  <h2>⭐❗ Welcome to the CARDINGCLUB the Best and NEW CC CVV & Dump Shop with HIGHEST quality. ❗⭐</h2>
                  <button className="card-button">Darknet cc shop</button>
                </div>

                {/* Page 5 */}
                <div className="page page-5">
                  <h2>Verified tutorials</h2>
                  <p>WELCOME TO BIGGEST CVV SHOP ⭐ CARDINGCLUB ⭐ SALE - CHEAP FIRST-HAND CC , CVV FULLZ BIG BASES</p>
                </div>

                {/* Page 6 */}
                <div className="page page-6">
                  <h2>⭐❗ Welcome to the CARDINGCLUB the Best and NEW CC CVV & Dump Shop with HIGHEST quality. ❗⭐</h2>
                  <p>the Best and NEW CC CVV & Dump Shop with HIGHEST quality.</p>
                </div>

                {/* Page 7 */}
                <div className="page page-7">
                  <h2>Only FRESH sniffed with good valid from our team<br />- Free registration</h2>
                  <p>the Best and NEW CC CVV & Dump Shop with HIGHEST quality</p>
                </div>
              </section>
            </div>
          }
        />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/login2" element={<Login2 setIsAuthenticated={setIsAuthenticated} />} />
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/dashboard2"
          element={isAuthenticated ? <Dashboard2 /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;