import styled from "styled-components";
export const ModalStyled = styled.div`
  .overlay {
    position: fixed;
    top: 80px;
    left: 0;
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(33, 33, 33, 0.12);
    z-index: 1200;
  }
  .stopScroll {
    overflow-y: hidden;
  }
  .notShow {
    opacity: 0;
    transition: 0.3s;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: scroll;
    pointer-events: none;
    background-color: rgba(33, 33, 33, 0.12);
  }

  .modal {
    position: absolute;
    top: 35px;
    width: 100%;
    padding: 40px 15px 80px;
    background-color: white;
    overflow: hidden;
  }
  .closeModalImg {
    display: none;
  }
  .goBackImg {
    display: block;
    position: absolute;
    min-width: 20px;
    top: -24px;
    left: 10px;
  }
  .closeModalBtn {
    border: none;
  }

  @media screen and (min-width: 768px) {
    .overlay {
      top: 0;
    }
    .modal {
      position: absolute;
      top: 222px;
      width: 595px;
      padding: 40px 15px 80px;
      background-color: white;
    }
    .closeModalImg {
      display: block;
      position: absolute;
      top: 25px;
      right: 25px;
    }
    .goBackImg {
      display: none;
    }
  }
  @media screen and (min-width: 1280px) {
    .modal {
      top: 135px;
      width: 690px;
    }
  } ;
`;
