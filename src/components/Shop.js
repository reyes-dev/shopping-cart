import React from "react";
import Item from "./Item";
import { itemData } from "../data/itemdata";
import "../styles/shop.css";

const Shop = ({ incrementCartQuantity, addToCart }) => {
  const items = itemData.map((item) => {
    return (
      <Item
        filePath={item.filePath}
        name={item.name}
        incrementCartQuantity={incrementCartQuantity}
        addToCart={addToCart}
        key={item.id}
      />
    );
  });
  return (
    <div className="shop-page">
      <h1>Item Shop</h1>
      <div className="shop-gallery">{items}</div>
    </div>
  );
};

export default Shop;
