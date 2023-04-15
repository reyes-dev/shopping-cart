import React from "react";
import "../../styles/cart.css";

const Cart = ({ cartQuantity, inventory, clearCart }) => {
  const displayCart = () => {
    return inventory.map((item) => {
      return (
        <li>
          <img src={item.filePath} alt={item.name}></img>
          {item.name} x {item.quantity}
        </li>
      );
    });
  };

  return (
    <div className="cart-page ">
      <h1>Shopping Cart</h1>
      <div className="cart-gallery">
        <h2>Total # of Items: {cartQuantity}</h2>
        <ul>{displayCart()}</ul>
        <button
          onClick={() => {
            clearCart();
            alert("Your purchase is complete. Thank you!");
          }}
          disabled={cartQuantity === 0}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
