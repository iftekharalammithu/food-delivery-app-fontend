import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Placeorder from "./pages/PlaceOrder/Placeorder";
import Footer from "./components/Footer/Footer";
import Loginpopup from "./components/Loginpopup/Loginpopup";

const App = () => {
  const [showlogin, setshowlogin] = useState(false);
  return (
    <div>
      {showlogin ? (
        <Loginpopup setshowlogin={setshowlogin}></Loginpopup>
      ) : (
        <></>
      )}
      <div className="app">
        <Navbar setshowlogin={setshowlogin}></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="cart" element={<Cart></Cart>}></Route>
          <Route path="order" element={<Placeorder></Placeorder>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
