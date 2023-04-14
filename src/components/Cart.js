import React from "react";

const Cart = ({ cartQuantity, inventory, clearCart }) => {
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
      <button
        onClick={() => {
          clearCart();
          alert("Your purchase is complete. Thank you!");
        }}
      >
        Checkout
      </button>
    </div>
  );
};

export default Cart;
