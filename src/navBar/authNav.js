import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./authNav.module.css";

const activeLink = {
  color: "#212121",
};

const AuthNav = () => (
  <div className={styles.navWrapper}>
    <NavLink to="/login" exact className={styles.link} activeStyle={activeLink}>
      Вход
    </NavLink>
    <NavLink
      to="/registration"
      exact
      className={styles.link}
      activeStyle={activeLink}
    >
      Регистрация
    </NavLink>
  </div>
);

export default AuthNav;
