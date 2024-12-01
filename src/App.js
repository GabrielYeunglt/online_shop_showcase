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
import FeaturesPage from "./pages/FeaturesPage";

const App = () => {
  return (
    <div className="app">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
      ></link>
      <Header />
      <main>
        <Carousel />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/features" element={<FeaturesPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
