import React from "react";
import Container from "../components/Container/Container";
import Section from "../components/Section/Section";
import { Link } from "react-router-dom";
import css from "./notFoundPage.module.css";
import comingSoon from "../images/coming-soon.jpg";

const NotFound = () => {
  return (
    <Container>
      <Section>
        <div className={css.notFoundWrapper}>
          <p className={css.text}>
            Страница не найдена, или еще в разработке...
          </p>
          <img
            className={css.comingSoon}
            src={comingSoon}
            alt="Coming soon..."
          />
          <Link to="/" exact>
            <button type="button" className={css.secondary_form_btn}>
              На главную
            </button>
          </Link>
        </div>
      </Section>
    </Container>
  );
};

export default NotFound;
