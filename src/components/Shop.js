import React from "react";
import Item from "./Item";
import { itemData } from "../data/itemdata";

const Shop = () => {
  const item = itemData[0];

  return (
    <div>
      <h1>Shop</h1>
      <Item filePath={item.filePath} name={item.name} />
    </div>
  );
};

export default Shop;
