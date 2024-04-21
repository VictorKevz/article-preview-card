import React from "react";
import facebook from "../assets/images/icon-facebook.svg";
import twitter from "../assets/images/icon-twitter.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import "../modal.css";
function Modal(props) {
  
  function handleClick() {
    props.onClose();
  }
  return (
    <div className="modal-wrapper">
      <div className="modal-parent">
        <div className="child-wrapper" onClick={handleClick}>
          <h5>SHARE</h5>
          <img src={facebook} alt="Facebook icon" />
          <img src={twitter} alt="Twitter icon" />
          <img src={pinterest} alt="Pinterest icon" />
        </div>
        <div className="modal-child"></div>
      </div>
    </div>
  );
}

export default Modal;
