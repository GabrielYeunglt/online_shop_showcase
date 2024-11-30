// src/App.js
import React, { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import Carousel from "./components/Carousel";
import SignupPage from "./pages/SignupPage";

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Carousel />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductList />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
