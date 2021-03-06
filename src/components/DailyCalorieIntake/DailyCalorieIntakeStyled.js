import styled from "styled-components";
export const DailyCalorieIntakeStyled = styled.div`
  .title {
    font-family: Verdana;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 26px;
    margin-bottom: 40px;
    color: #212121;
  }
  .container {
    padding: 0;
  }

  .input {
    position: relative;
    width: 90%;
    border: 0;
    border-bottom: 1px solid #e0e0e0;
  }
  .input:focus {
    outline: none;
  }

  .button {
    text-decoration: none;
    padding: 13px 0;
    margin: 0 auto;
    display: block;
    width: 176px;
    border: 2px solid #fc842d;
    border-radius: 30px;
    background-color: #fc842d;
    color: #ffffff;
    font-weight: 700;
    font-family: Verdana;
    font-size: 14px;
    line-height: 1.21;
    text-align: center;
    letter-spacing: 0.04em;
  }

  .button:hover {
    background-color: #fc842d;
    color: #ffffff;
    box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  }

  .caloriesText {
    font-family: Verdana;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 58px;
    text-align: center;
    letter-spacing: 0.04em;
    font-size: 16px;
    line-height: 19.45px;
    color: #264061;
  }

  .caloriesValue {
    font-size: 48px;
    line-height: 58px;
  }
  .productsTitle {
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 22px;
    padding-top: 30px;
  }
  .searchLogo {
    margin-left: 10px;
    display: inline-block;
  }

  .productsList {
    overflow-y: scroll;
    height: 100px;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;
    font-family: Verdana;
    font-style: normal;
    font-weight: normal;
    color: #9b9faa;
    margin-bottom: 40px;
  }
  .productsItem:not(:last-child) {
    margin-bottom: 10px;
  }

  .caloriesText {
    position: relative;
  }

  @media screen and (min-width: 768px) {
    .title {
      font-size: 26px;
      line-height: 32px;
      text-align: center;
      margin-bottom: 20px;
    }
    .container {
      padding-left: 83px;
      padding-right: 83px;
    }
    .productsTitle {
      padding-top: 20px;
    }
  }
  @media screen and (min-width: 1280px) {
  }
`;
