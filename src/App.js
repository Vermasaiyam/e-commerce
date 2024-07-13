import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from "./Components/Footer";
import Categories from './Components/Categories'
import Products from './Components/Products'
import About from './Components/About'
import Cart from './Components/Cart'
import Exp from './Components/Exp'
import Dashboard from './Components/Dashboard'
import Details from './Components/Details'
import AOS from "aos";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route exact path="/" element={
            <>
              <Main />
              <Categories />
              <Products />
            </>
          }>

          </Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/product" element={<Products />}></Route>
          <Route exact path="/cart" element={<Cart />}></Route>
          <Route exact path="/login" element={<Exp />}></Route>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
          <Route exact path="/details" element={<Details />}></Route>
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
