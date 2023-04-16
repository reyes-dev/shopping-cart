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
    <div className="item" data-testid="item-component">
      <img src={filePath} alt={name}></img>
      <li>{name}</li>
      <div className="item-counter">
        <button onClick={decrementCount}>-</button>
        <p>{itemCount}</p>
        <button onClick={incrementCount}>+</button>
      </div>
      <button
        onClick={() => {
          if (itemCount > 0) {
            incrementCartQuantity();
            addToCart({
              name: name,
              filePath: filePath,
              quantity: itemCount,
            });
            setItemCount(0);
          }
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Item;
