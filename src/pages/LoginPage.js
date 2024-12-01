// src/components/LoginPage.js
import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
// import "../css/pages/LoginPage.css";
import { Link } from "react-router-dom";

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
    // <div className="container login-container">
    //   <main className="form-signin col col-lg-6 m-auto">
    //     <form>
    //       <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

    //       <div className="form-floating">
    //         <input
    //           type="email"
    //           className="form-control"
    //           id="floatingInput"
    //           placeholder="name@example.com"
    //         />
    //         <label htmlFor="floatingInput">Email address</label>
    //       </div>
    //       <div className="form-floating">
    //         <input
    //           type="password"
    //           className="form-control"
    //           id="floatingPassword"
    //           placeholder="Password"
    //         />
    //         <label htmlFor="floatingPassword">Password</label>
    //       </div>

    //       <div className="form-check text-start my-3">
    //         <input
    //           className="form-check-input"
    //           type="checkbox"
    //           value="remember-me"
    //           id="flexCheckDefault"
    //         />
    //         <label className="form-check-label" htmlFor="flexCheckDefault">
    //           Remember me
    //         </label>
    //       </div>
    //       <button className="btn btn-primary w-100 py-2" type="submit">
    //         Sign in
    //       </button>
    //     </form>
    //   </main>
    //   </div>
    <section className="vh-100">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black">
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-2 order-lg-1">
                    <img
                      src={process.env.PUBLIC_URL + "/login.webp"}
                      className="img-fluid"
                      alt="Signin art"
                    />
                  </div>

                  <div className="col-md-10 col-lg-6 col-xl-5 order-1 order-lg-2">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Login
                    </p>

                    <form className="mx-1 mx-md-4">

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div
                          data-mdb-input-init
                          className="form-outline flex-fill mb-0"
                        >
                          <input
                            type="email"
                            id="form3Example3c"
                            className="form-control"
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example3c"
                          >
                            Your Email
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div
                          data-mdb-input-init
                          className="form-outline flex-fill mb-0"
                        >
                          <input
                            type="password"
                            id="form3Example4c"
                            className="form-control"
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example4c"
                          >
                            Password
                          </label>
                        </div>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="button"
                          data-mdb-button-init
                          data-mdb-ripple-init
                          className="btn btn-primary btn-lg"
                        >
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
