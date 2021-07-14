import React, { useState } from "react";
import DailyCalorieIntake from "../components/DailyCalorieIntake/DailyCalorieIntake";
import MainForm from "../components/mainForm/MainForm";
import Modal from "../components/Modal/Modal";
import { getDailyRate } from "../services/apiService/getDailyRate";

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
      <MainForm
        onSubmit={onSubmit}
        initialValues={{
          height: "",
          age: "",
          weight: "",
          desiredWeight: "",
          bloodType: "1",
        }}
      />

      {showModal && (
        <Modal>
          <DailyCalorieIntake />
        </Modal>
      )}
    </>
  );
};

export default HomePage;
