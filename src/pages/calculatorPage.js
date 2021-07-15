import React from "react";

import { useDispatch, useSelector } from "react-redux";
import MainForm from "../components/mainForm/MainForm";
import { calculatorOperation } from "../redux/calculator/calculatorOperation";
import { calculatorFormSelector } from "../redux/calculator/calculatorSelector";
import Container from "../components/Container/Container";
import Section from "../components/Section/Section";
import RightSideBar from "../components/rightSideBar/RightSideBar";
import styles from "./calculatorPage.module.css";

const CalculatorPage = () => {
  const selector = useSelector(calculatorFormSelector);
  const dispatch = useDispatch();
  const onSubmit = (values) => dispatch(calculatorOperation(values));
  return (
    <div className={styles.CalculatorPageContainer}>
      <div className={styles.CalculatorPageInnerContainer}>
        <Container>
          <Section>
            <MainForm
              onSubmit={onSubmit}
              phraze={"Узнай свою суточную норму калорий"}
              initialValues={{
                height: selector?.height ?? "",
                age: selector?.age ?? "",
                weight: selector?.weight ?? "",
                desiredWeight: selector?.desiredWeight ?? "",
                bloodType: selector?.bloodType ?? "",
              }}
            />
          </Section>
        </Container>
      </div>
      <RightSideBar />
    </div>
  );
};

export default CalculatorPage;
