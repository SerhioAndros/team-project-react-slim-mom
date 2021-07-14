import React from "react";
import Container from "../components/Container/Container";
import Section from "../components/Section/Section";
import RegistrationForm from "../components/registerForm/RegistrationForm";

const registerPage = () => {
  return (
    <Container>
      <Section>
        <RegistrationForm />
      </Section>
    </Container>
  );
};

export default registerPage;
