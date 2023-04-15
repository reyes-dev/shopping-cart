import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = ({ cartQuantity }) => {
  return (
    <div className="navbar">
      <Link to="/">HOMEPAGE</Link>
      <Link to="/shop" className="shop">
        SHOP
      </Link>
      <Link to="/cart" className="cart">
        CART: {cartQuantity}{" "}
      </Link>
    </div>
  );
};

export default Navbar;
