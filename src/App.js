import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Placeorder from "./pages/PlaceOrder/Placeorder";

const App = () => {
  return (
    <div className="app">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="cart" element={<Cart></Cart>}></Route>
        <Route path="order" element={<Placeorder></Placeorder>}></Route>
      </Routes>
    </div>
  );
};

export default App;
