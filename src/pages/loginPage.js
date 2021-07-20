import React from "react";
import Container from "../components/Container/Container";
import Section from "../components/Section/Section";
import LoginForm from "../components/loginForm/LoginForm";

const LoginPage = () => {
  return (
    <Container>
      <Section>
        <LoginForm />
      </Section>
    </Container>
  );
};

export default LoginPage;
