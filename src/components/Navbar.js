import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to={`/`}>Homepage</Link>
      <Link to={`shop`}>Shop</Link>
    </div>
  );
};

export default Navbar;
