import React, { useState } from "react";
import Item from "./Item";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Shop = ({ incrementCartQuantity }) => {
  return (
    <div>
      <h1>Shop</h1>
      <Item incrementCartQuantity={incrementCartQuantity}></Item>
    </div>
  );
};

export default Shop;
