import React, { Component } from "react";
import closeModalBtn from "../../images/modal/close-burger-menu.png";
import goBackBtn from "../../images/modal/go-back.png";
import { ModalStyled } from "./ModalStyled";
import DailyCalorieIntake from '../DailyCalorieIntake/DailyCalorieIntake'
import  ReactDOM  from "react";


class Modal extends Component {
  state = { showModal:false }
  componentDidMount() {
    window.addEventListener("keydown", this.closeModal);
  }

  componentWillUnmount() {
    this.removeScroll();
    window.removeEventListener("keydown", this.closeModal);
  }
  onModalToggle = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
    document.body.classList.add("stopScroll");
  };

  closeOverlay = event => {
    if (event.target.className.includes("overlay")) {
      this.onModalToggle();
    }
  };

  closeModal = event => {
    this.removeScroll();

    if (event.code === "Escape") {
      this.onModalToggle();
    }
  };

  removeScroll = () => {
    document.body.classList.remove("stopScroll");
  };

  render() {
    return ReactDOM.createPortal((
      <><div id='overlay' className='overlay' onClick={this.closeOverlay}> <ModalStyled >
          <div className="modal">
            <button type="button" onClick={this.onModalToggle} className="closeModalBtn">
              <img src={closeModalBtn} alt="close-modal" className="closeModalImg" />
              <img src={goBackBtn} alt="close-modal" className="goBackImg" />
            </button>
            {this.props.children}

          </div>
        </ModalStyled></div>
       
      </>
    ),document.getElementById('portal')) 
  }
}

export default Modal;
