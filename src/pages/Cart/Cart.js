import React, { useState } from "react";
import Modal from "../../components/Modal/Modal";
import "../../styles/cart.css";

const Cart = ({ cartQuantity, inventory, clearCart }) => {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleOpen = () => setShowModal(true);

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
      <Modal
        handleClose={handleClose}
        handleOpen={handleOpen}
        showModal={showModal}
      />
      <h1>Shopping Cart</h1>
      <div className="cart-gallery">
        <h2>Total # of Items: {cartQuantity}</h2>
        <ul>{displayCart()}</ul>
        <button
          onClick={() => {
            clearCart();
            handleOpen();
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
