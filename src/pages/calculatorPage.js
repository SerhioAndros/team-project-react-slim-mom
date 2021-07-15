import React from "react";
import styles from "./calculatorPage.module.css";
import Container from "../components/Container/Container";
import Section from "../components/Section/Section";

import { useDispatch, useSelector } from "react-redux";
import MainForm from "../components/mainForm/MainForm";
import { calculatorOperation } from "../redux/calculator/calculatorOperation";
import { calculatorFormSelector } from "../redux/calculator/calculatorSelector";
import RightSideBar from "../components/rightSideBar/RightSideBar";

import ContainerGrid from "../components/ContainerGrid/ContainerGrid";
import GridElementLeft from "../components/ContainerGrid/GridElementLeft";
import GridElementRight from "../components/ContainerGrid/GridElementRight";
import { useMediaQuery } from "../shared/hooks/mediaRuleHook";

const CalculatorPage = () => {
  const selector = useSelector(calculatorFormSelector);
  const dispatch = useDispatch();
  const onSubmit = (values) => dispatch(calculatorOperation(values));

  const isPageWideLaptop = useMediaQuery("(min-width: 1280px)");
  //   const renderGrid = isAuthenticated && isPageWideLaptop;

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
                    height: selector?.height ?? "",
                    age: selector?.age ?? "",
                    weight: selector?.weight ?? "",
                    desiredWeight: selector?.desiredWeight ?? "",
                    bloodType: selector?.bloodType ?? "",
                  }}
                />
              </div>
              {/* <div className={styles.calculatorPageRigthSide}>
                <RightSideBar />
              </div> */}
            </div>
          </GridElementLeft>
          <GridElementRight>
            <div className={styles.calculatorPageRigthSide}>
              <RightSideBar />
            </div>
          </GridElementRight>
        </ContainerGrid>
      ) : (
        <Container>
          <Section>
            <div className={styles.PageContainer}>
              <div className={styles.calculatorPageLeftSide}>
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
              </div>
              <div className={styles.calculatorPageRigthSide}>
                <RightSideBar />
              </div>
            </div>
          </Section>
        </Container>
      )}
    </>
    //   <Container>
    //     <Section>
    //       <div className={styles.PageContainer}>
    //         <div className={styles.calculatorPageLeftSide}>
    //           <MainForm
    //             onSubmit={onSubmit}
    //             phraze={"Узнай свою суточную норму калорий"}
    //             initialValues={{
    //               height: selector?.height ?? "",
    //               age: selector?.age ?? "",
    //               weight: selector?.weight ?? "",
    //               desiredWeight: selector?.desiredWeight ?? "",
    //               bloodType: selector?.bloodType ?? "",
    //             }}
    //           />
    //         </div>
    //         <div className={styles.calculatorPageRigthSide}>
    //           <RightSideBar />
    //         </div>
    //       </div>
    //     </Section>
    //   </Container>
  );
};

export default CalculatorPage;
