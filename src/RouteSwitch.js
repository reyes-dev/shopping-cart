import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";

const RouteSwitch = () => {
  const [cartQuantity, setCartQuantity] = useState(0);
  const [inventory, setInventory] = useState([]);

  const incrementCartQuantity = () => {
    setCartQuantity((cartQuantity) => cartQuantity + 1);
  };

  const addToCart = (item) => {
    setInventory((inventory) => [...inventory, item]);
  };

  const clearCart = () => {
    setCartQuantity(0);
    setInventory([]);
  };

  return (
    <BrowserRouter>
      <Navbar cartQuantity={cartQuantity} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/shop"
          element={
            <Shop
              incrementCartQuantity={incrementCartQuantity}
              addToCart={addToCart}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartQuantity={cartQuantity}
              inventory={inventory}
              clearCart={clearCart}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
