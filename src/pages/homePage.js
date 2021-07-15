import React, { useState } from "react";
import DailyCalorieIntake from "../components/DailyCalorieIntake/DailyCalorieIntake";
import MainForm from "../components/mainForm/MainForm";
import Modal from "../components/Modal/Modal";
import { getDailyRate } from "../services/apiService/getDailyRate";
import Container from "../components/Container/Container";
import Section from "../components/Section/Section";

const HomePage = () => {

  const [showModal, setShowModal] = useState(false);
  const onSubmit = async (values) => {
    try {
      const result = await getDailyRate(values);
      if (result) {
        setShowModal(true);
      }
    } catch (error) {}
  };
  return (
    <>
    <Container>
      <Section>
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
    </Section>
    </Container>
      {showModal && (
        <Modal>
          <DailyCalorieIntake />
        </Modal>
      )}
    </>

  );
};

export default HomePage;
