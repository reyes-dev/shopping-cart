import React, { useState } from "react";
import Item from "./Item";
import { itemData } from "../data/itemdata";

const Shop = ({ incrementCartQuantity, addToCart }) => {
  return (
    <div>
      <h1>Shop</h1>
      <Item
        filePath={itemData[0].filePath}
        name={itemData[0].name}
        incrementCartQuantity={incrementCartQuantity}
        addToCart={addToCart}
      ></Item>
    </div>
  );
};

export default Shop;
