import React, { useState } from "react";

const Item = ({ filePath, name, incrementCartQuantity, addToCart }) => {
  // The amount of an item that the shopper wants to purchase
  const [itemCount, setItemCount] = useState(0);
  // Set amount of item to add to cart
  const incrementCount = () => {
    setItemCount((count) => count + 1);
  };
  const decrementCount = () => {
    setItemCount((count) => {
      if (count > 0) {
        return count - 1;
      } else {
        return 0;
      }
    });
  };

  return (
    <div>
      <img src={filePath} alt={name}></img>
      <li>{name}</li>
      <button onClick={incrementCount}>+</button>
      <p>{itemCount}</p>
      <button onClick={decrementCount}>-</button>
      <button
        onClick={() => {
          incrementCartQuantity();
          addToCart({ name: name, filePath: filePath, quantity: itemCount });
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Item;
