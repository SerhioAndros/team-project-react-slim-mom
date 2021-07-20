import React, { Component } from "react";
import closeModalBtn from "../../images/modal/close-burger-menu.png";
import goBackBtn from "../../images/modal/go-back.png";
import { ModalStyled } from "./ModalStyled";
import ReactDOM from "react-dom";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", (e) => {
      if (e.code === "Escape") {
        this.closeModal();
      }
    });

    document.body.classList.add("stopScroll");
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.closeModal);
  }

  closeOverlay = (event) => {
    if (event.target.className.includes("overlay")) {
      this.closeModal();
    }
  };

  closeModal = () => {
    document.body.classList.remove("stopScroll");
    this.props.onClose();
  };

  render() {
    return ReactDOM.createPortal(
      <>
        <ModalStyled>
          <div id="overlay" className="overlay" onClick={this.closeOverlay}>
            <div className="modal">
              <button
                type="button"
                onClick={this.closeModal}
                className="closeModalBtn"
              >
                <img
                  src={closeModalBtn}
                  alt="close-modal"
                  className="closeModalImg"
                />
                <img src={goBackBtn} alt="close-modal" className="goBackImg" />
              </button>

              {this.props.children}
            </div>
          </div>
        </ModalStyled>
      </>,
      document.getElementById("portal")
    );
  }
}

export default Modal;
