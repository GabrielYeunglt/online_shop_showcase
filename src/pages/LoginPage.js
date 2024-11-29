// src/components/LoginPage.js
import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import "../css/pages/LoginPage.css";


const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if both fields are provided
    if (username === "" || password === "") {
      setError("Please fill in both fields.");
    } else {
      setError("");
      // Handle successful login (e.g., authentication logic here)
      console.log("Username:", username);
      console.log("Password:", password);
    }
  };

  return (
    <div className="container-sm login-container">
      <main className="form-signin w-100 m-auto">
        <form>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="form-check text-start my-3">
            <input
              className="form-check-input"
              type="checkbox"
              value="remember-me"
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Remember me
            </label>
          </div>
          <button className="btn btn-primary w-100 py-2" type="submit">
            Sign in
          </button>
        </form>
      </main>
      </div>
  );
};

export default LoginPage;
