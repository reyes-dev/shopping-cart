import React from "react";
import "../../styles/modal.css";

const Modal = ({ handleClose, showModal }) => {
  return (
    <div className="modal-container">
      {showModal && (
        <div className="modal">
          Thank you for your purchase!
          <span className="close" onClick={handleClose}>
            &times;
          </span>
        </div>
      )}
    </div>
  );
};

export default Modal;
