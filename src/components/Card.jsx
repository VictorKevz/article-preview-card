import React, { useState } from "react";
import drawers from "../assets/images/drawers.jpg";
import avatar from "../assets/images/avatar.jpg";
import share from "../assets/images/icon-share.svg";
import Modal from "./Modal";

function Card() {
  const [isModalOpen, setModalOpen] = useState(false); // Initially set to false
  const [isClicked, setClicked] = useState(false); // Track button clicks

  function openModal() {
    setModalOpen(true); // Set isModalOpen to true to open the modal
    setClicked(true); // Set isClicked to true when the share button is clicked
  }

  function closeModal() {
    setModalOpen(false); // Set isModalOpen to false to close the modal
    setClicked(false); // Set isClicked to false when the modal is closed
  }

  return (
    <>
      <div className="item image">
        <img src={drawers} alt="drawers-image" />
      </div>

      <div className="item text">
        <h3>
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h3>
        <p>
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I've got some simple tips to help
          you make any room feel complete.
        </p>
        <div className="profile-container">
          <div className="child left-side">
            <img src={avatar} alt="michelle-avatar" className="avatar-img" />
            <h5>
              Michelle Appleton<span>28 Jun 2020</span>
            </h5>
          </div>
          <div className="child right-side">
            <img src={share} alt="share-icon" onClick={openModal} />
          </div>
        </div>
      </div>

      {isModalOpen && isClicked && <Modal onClose={closeModal} />}
    </>
  );
}
export default Card;