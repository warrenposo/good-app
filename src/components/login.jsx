import React from "react";
import { useNavigate, Link } from "react-router-dom"; // Import Link
import "./login.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Perform login validation here (e.g., check username and password)
    const email = e.target.username.value;
    const password = e.target.password.value;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (!user) {
          alert('No user found');
        } else {
          setIsAuthenticated(true);
          navigate("/dashboard");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`${errorCode}: ${errorMessage}`);
      });
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
          Don't have an account yet? <Link to="/signup">Create an account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;