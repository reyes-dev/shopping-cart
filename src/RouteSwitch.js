import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/Cart/Cart";
import Navbar from "./components/Navbar/Navbar";
import "./styles/main.css";

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
        <Route path="/shopping-cart" element={<Homepage />} />
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
        <Route path="*" element={<Navigate to="/shopping-cart" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
