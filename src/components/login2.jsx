import React from "react";
import "./login2.css"; // Import the login-specific CSS

const Login2 = () => {
  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Welcome to CC/CVV/Dumps with Pin SHOP</h2>
        <p>Sign in to your account</p>
        <p>Please enter your name and password for sign in.</p>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" placeholder="Enter your username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" />
          </div>
          <div className="form-options">
            <label>
              <input type="checkbox" name="keep-signed-in" /> Keep me signed in
            </label>
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="signup-link">
          Don't have an account yet? <a href="/signup">Create an account</a>
        </p>
      </div>
    </div>
  );
};

export default Login2;