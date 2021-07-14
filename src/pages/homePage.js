import React from "react";
import MainForm from "../components/mainForm/MainForm";
import { getDailyRate } from "../services/apiService/getDailyRate";
import Container from "../components/Container/Container";
import Section from "../components/Section/Section";

const HomePage = () => {
  return (
    <Container>
      <Section>
        <MainForm
          onSubmit={getDailyRate}
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
  );
};

export default HomePage;
