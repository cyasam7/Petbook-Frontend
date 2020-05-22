import React from "react";
import { createPortal } from "react-dom";
import "../assets/styles/Modal.scss";
function Modal({ children, isOpen , onClose}) {
  if (!isOpen) {
    return null;
  }
  return createPortal(
    <div className="Modal">
      <div className="Modal__container">
        <button className="Modal__close" onClick={onClose}>x</button>
        <div className="Modal__container-post">{children}</div>
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export default Modal;
