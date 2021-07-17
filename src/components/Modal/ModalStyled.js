// import styled from "styled-components";
// export const ModalStyled = styled.div`
// .overlay {
//   /* position: fixed; */
//   top: 80px;
//   left: 0;
//   width: 100vw;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   overflow-y: scroll;
//   background-color: rgba(33, 33, 33, 0.12);
// }
// /* .overlay::after{

//   position: relative;
//   top: 80px;
//   left: 0;
// } */
// .stopScroll {
//   overflow-y: hidden;
// }
// .notShow {
//   opacity: 0;
//   transition: 0.3s;
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   overflow-y: scroll;
//   pointer-events: none;
//   background-color: rgba(33, 33, 33, 0.12);
// }
// .closeModalImg{
//   display: none;
// }
// .goBackImg{
//   min-width: 16px;
//     right: 0;
//     display: block;
//     position: absolute;
//     top: 0;
//     height: 10px;
// }
// .modal {
//   position: absolute;
// top: 40px;
//   width: 100%;
//   padding: 40px 15px 80px;
//   background-color: white;
// }
// .closeModalBtn {
//   display: block;
//   position: absolute;
//   top: 24px;
//   right: 24px;
//   border-radius: 50%;
//   background-color: white;
//   border: none;
//   color: #000000;
// }
/* .closeModalImg {
  display: none;
} */

/* @media screen and (min-width: 768px) {
  .modal {
    width: 594px;
    height: 580px;
    padding: 64px 42px 68px;
    top: 222px;
  }
  .overlay {
    top: 0;
  }

} */
/* @media screen and (max-width: 480px){
.goBackImg{
  display: block;
}
.closeModalImg {
    display: none;
  } */
/* } */
/* @media screen and (max-width: 320px){
  .modal {
    width: 100%;
  height: 100%;
  } */
  /* .closeModalImg{
    display: none;
  } */
  /* .goBackImg {
    display: block;
  }
  */
/* } */
/* @media screen and (min-width: 1024px) {
  .modal {
    width: 690px;
    height: 580px;
    padding: 64px 90px 81px;
    top: 135px;
  }
} */
/* .enter {
  opacity: 0;
  transform: scale(0.3);
}
.enterActive {
  opacity: 1;
  transform: scale(1);
  transition: all 300ms linear;
}
.exit {
  opacity: 1;
  transform: scale(1);
}
.exitActive {
  opacity: 0;
  transform: scale(0.3);
  transition: all 300ms linear;
} */
/* @media screen and (min-width: 320px){
  .modal {
    position: absolute;
width: 594px;
height: 580px;


background: #FFFFFF;
box-shadow: 0px 22px 40px rgba(0, 0, 0, 0.1)
  } */

/* } */
// `
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
    overflow-y: scroll;
    background-color: rgba(33, 33, 33, 0.12);
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
  }
;` 
