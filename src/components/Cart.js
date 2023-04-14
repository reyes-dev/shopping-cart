import React from "react";

const Cart = ({ cartQuantity, inventory }) => {
  const displayCart = () => {
    return inventory.map((item) => {
      return (
        <li>
          <img src={item.filePath}></img>
          {item.name} x {item.quantity}
        </li>
      );
    });
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <h2>Total # of Items: {cartQuantity}</h2>
      <ul>{displayCart()}</ul>
    </div>
  );
};

export default Cart;
