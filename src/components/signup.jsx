import React from "react";
import { useNavigate, Link } from "react-router-dom"; // Import Link
 // Reuse the same CSS
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    // Get form data
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    // Validate password match
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Firebase authentication
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          setIsAuthenticated(true); // Set authentication state
          navigate("/dashboard"); // Redirect to dashboard
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
        <h2>Create an Account</h2>
        <p>Join us to access exclusive features.</p>
        <p>Please enter your details to sign up.</p>
        <form className="login-form" onSubmit={handleSignUp}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
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
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
              required
            />
          </div>
          <div className="form-options">
            <label>
              <input type="checkbox" name="terms" required /> I agree to the terms and conditions
            </label>
          </div>
          <button type="submit" className="login-button">
            Sign Up
          </button>
        </form>
        <p className="signup-link">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;