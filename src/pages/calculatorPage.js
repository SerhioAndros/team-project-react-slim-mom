import React from "react";
import styles from "./calculatorPage.module.css";
import ContainerGrid from "../components/ContainerGrid/ContainerGrid";
import GridElementLeft from "../components/ContainerGrid/GridElementLeft";
import GridElementRight from "../components/ContainerGrid/GridElementRight";
import Container from "../components/Container/Container";
import Section from "../components/Section/Section";

import MainForm from "../components/mainForm/MainForm";
import RightSideBar from "../components/rightSideBar/RightSideBar";
import { calculatorOperation } from "../redux/calculator/calculatorOperation";
import { calculatorFormSelector } from "../redux/calculator/calculatorSelector";
import { useMediaQuery } from "../shared/hooks/mediaRuleHook";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

const CalculatorPage = () => {
 const selector = useSelector(calculatorFormSelector);
 const dispatch = useDispatch();
 const history = useHistory();

 const onSubmit = (formState) => {
  dispatch(calculatorOperation(formState));
  history.push("/diary");
 };

 const isPageWideLaptop = useMediaQuery("(min-width: 1280px)");

 return (
  <>
   {isPageWideLaptop ? (
    <ContainerGrid>
     <GridElementLeft>
      <div className={styles.PageContainer}>
       <div className={styles.calculatorPageLeftSide}>
        <MainForm
         onSubmit={onSubmit}
         phraze={"Узнай свою суточную норму калорий"}
         initialValues={{
          height:
           selector?.height && selector?.height > 0 ? selector?.height : "",
          age: selector?.age && selector?.age > 0 ? selector?.age : "",
          weight:
           selector?.weight && selector?.weight > 0 ? selector?.weight : "",
          desiredWeight:
           selector?.desiredWeight && selector?.desiredWeight
            ? selector?.desiredWeight
            : "",
          bloodType:
           selector?.bloodType && selector?.bloodType
            ? selector?.bloodType
            : "",
         }}
        />
       </div>
      </div>
     </GridElementLeft>
     <GridElementRight>
      <div className={styles.calculatorPageRigthSide}>
       <RightSideBar />
      </div>
     </GridElementRight>
    </ContainerGrid>
   ) : (
    <div className={styles.PageContainer}>
     <div className={styles.calculatorPageLeftSide}>
      <Container>
       <Section>
        <MainForm
         onSubmit={onSubmit}
         phraze={"Узнай свою суточную норму калорий"}
         initialValues={{
          height:
           selector?.height && selector?.height > 0 ? selector?.height : "",
          age: selector?.age && selector?.age > 0 ? selector?.age : "",
          weight:
           selector?.weight && selector?.weight > 0 ? selector?.weight : "",
          desiredWeight:
           selector?.desiredWeight && selector?.desiredWeight
            ? selector?.desiredWeight
            : "",
          bloodType:
           selector?.bloodType && selector?.bloodType
            ? selector?.bloodType
            : "",
         }}
        />
       </Section>
      </Container>
     </div>
     <div className={styles.calculatorPageRigthSide}>
      <RightSideBar />
     </div>
    </div>
   )}
  </>
 );
};

export default CalculatorPage;
