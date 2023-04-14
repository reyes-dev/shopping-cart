import React, { useState } from "react";

const Cart = ({ cartQuantity }) => {
  const [items, setItems] = useState([]);
  return (
    <div>
      <h1>Shopping Cart</h1>
      <h2>Total # of Items: {cartQuantity}</h2>
    </div>
  );
};

export default Cart;
