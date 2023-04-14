import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cartQuantity }) => {
  return (
    <div>
      <Link to="/">Homepage</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/cart">Cart: {cartQuantity} </Link>
    </div>
  );
};

export default Navbar;
