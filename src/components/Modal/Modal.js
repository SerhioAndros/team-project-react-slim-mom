import React, { Component } from "react";
import closeModalBtn from "../../images/modal/close-burger-menu.png";
import goBackBtn from "../../images/modal/go-back.png";
import { ModalStyled } from "./ModalStyled";
import DailyCalorieIntake from "../DailyCalorieIntake/DailyCalorieIntake";

class Modal extends Component {
  state = { showModal: false };
  componentDidMount() {
    window.addEventListener("keydown", this.closeModal);
    document
      .getElementById("overlay")
      .addEventListener("click", this.closeOverlay);
  }

  componentWillUnmount() {
    this.removeScroll();
    window.removeEventListener("keydown", this.closeModal);
    document
      .getElementById("overlay")
      .removeEventListener("click", this.closeModalOverlay);
  }
  onModalToggle = () => {
    this.setState((prevState) => ({ showModal: !prevState.showModal }));
    document.body.classList.add("stopScroll");
  };

  closeOverlay = (event) => {
    if (event.target.className.includes("overlay")) {
      this.onModalToggle();
    }
  };

  closeModal = (event) => {
    this.removeScroll();

    if (event.code === "Escape") {
      this.onModalToggle();
    }
  };

  removeScroll = () => {
    document.body.classList.remove("stopScroll");
  };

  render() {
    return (
      <>
        <ModalStyled>
          <div className="modal">
            <button
              type="button"
              onClick={this.onModalToggle}
              className="closeModalBtn"
            >
              <img
                src={closeModalBtn}
                alt="close-modal"
                className="closeModalImg"
              />
              <img src={goBackBtn} alt="close-modal" className="goBackImg" />
            </button>
            <DailyCalorieIntake />
          </div>
        </ModalStyled>
      </>
    );
  }
}

export default Modal;
