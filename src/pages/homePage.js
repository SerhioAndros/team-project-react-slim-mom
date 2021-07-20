import React, { useState } from "react";
import DailyCalorieIntake from "../components/DailyCalorieIntake/DailyCalorieIntake";
import MainForm from "../components/mainForm/MainForm";
import Modal from "../components/Modal/Modal";
import { getDailyRate } from "../services/apiService/getDailyRate";
import Container from "../components/Container/Container";
import Section from "../components/Section/Section";
import styles from "./homePage.module.css";
import { getnotAllowedProducts } from "../redux/filter/filterActions";
import { useDispatch } from "react-redux";

const HomePage = () => {
 const [data, setData] = useState(null);
 const dispatch = useDispatch();

 const onSubmit = async (values) => {
  try {
   const result = await getDailyRate(values);
   setData(result.data);
   dispatch(getnotAllowedProducts(result.data.notAllowedProducts));
  } catch (error) {}
 };
 
 return (
  <>
   <Container>
    <Section>
     <div className={styles.calcWrapper}>
      <MainForm
       onSubmit={onSubmit}
       phraze={"Просчитай свою суточную норму калорий прямо сейчас"}
       initialValues={{
        height: "",
        age: "",
        weight: "",
        desiredWeight: "",
        bloodType: "1",
       }}
      />
     </div>
    </Section>
   </Container>
   {data && (
    <Modal onClose={() => setData(null)}>
     <DailyCalorieIntake calories={data?.dailyRate} />
    </Modal>
   )}
  </>
 );
};

export default HomePage;
