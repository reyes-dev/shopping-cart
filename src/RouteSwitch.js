import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";

const RouteSwitch = () => {
  const [cartQuantity, setCartQuantity] = useState(0);

  const incrementCartQuantity = () => {
    setCartQuantity((cartQuantity) => cartQuantity + 1);
  };

  return (
    <BrowserRouter>
      <Navbar cartQuantity={cartQuantity} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/shop"
          element={<Shop incrementCartQuantity={incrementCartQuantity} />}
        />
        <Route path="/cart" element={<Cart cartQuantity={cartQuantity} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
