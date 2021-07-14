import React from "react";

import { useDispatch, useSelector } from "react-redux";
import MainForm from "../components/mainForm/MainForm";
import { calculatorOperation } from "../redux/calculator/calculatorOperation";
import { calculatorFormSelector } from "../redux/calculator/calculatorSelector";

const CalculatorPage = () => {
const selector = useSelector(calculatorFormSelector);
const dispatch = useDispatch();
const onSubmit = (values) => dispatch(calculatorOperation(values));
 
 return (
  <>
   <h2>Узнай свою суточную норму калорий</h2>
   <MainForm
    onSubmit={onSubmit}
    initialValues={{
     height: selector?.height ?? "",
     age: selector?.age ?? "",
     weight: selector?.weight ?? "",
     desiredWeight: selector?.desiredWeight ?? "",
     bloodType: selector?.bloodType ?? "",
    }}
   />
  </>
 );
};

export default CalculatorPage;
