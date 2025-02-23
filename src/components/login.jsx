import React from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Perform login validation here (e.g., check username and password)
    const username = e.target.username.value;
    const password = e.target.password.value;

    // For now, assume login is successful if username and password are not empty
    if (username && password) {
      setIsAuthenticated(true);
      navigate("/dashboard");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Welcome to CC/CVV/Dumps with Pin SHOP</h2>
        <p>Sign in to your account</p>
        <p>Please enter your name and password for sign in.</p>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="form-options">
            <label>
              <input type="checkbox" name="keep-signed-in" /> Keep me signed in
            </label>
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <p className="signup-link">
          Don't have an account yet? <a href="/signup">Create an account</a>
        </p>
      </div>
    </div>
  );
};

export default Login;