import React, { useState } from "react";
import Item from "./Item";
import { itemData } from "../data/itemdata";

const Shop = ({ incrementCartQuantity, addToCart }) => {
  const items = itemData.map((item) => {
    return (
      <Item
        filePath={item.filePath}
        name={item.name}
        incrementCartQuantity={incrementCartQuantity}
        addToCart={addToCart}
      />
    );
  });
  return (
    <div>
      <h1>Shop</h1>
      {items}
    </div>
  );
};

export default Shop;
