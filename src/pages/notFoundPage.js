import React from "react";
import Container from "../components/Container/Container";
import Section from "../components/Section/Section";

const notFound = {
  color: "#212121",
  fontFamily: '"Montserrat", sans-serif',
  fontWeight: "700",
  fontSize: "16px",
  lineHeight: "1.1",
  letterSpacing: "0.04em",
};

const NotFound = () => {
  return (
    <Container>
      <Section>
        <p style={notFound}>Page not found or under construction...</p>
      </Section>
    </Container>
  );
};

export default NotFound;
