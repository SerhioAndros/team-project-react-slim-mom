import React from "react";
import { NavLink } from "react-router-dom";

const styles = {
  link: {
    display: "inline-block",
    textDecoration: "none",
    padding: 12,
    fontWeight: 700,
    fontSize: 21,
    color: "#2A363B",
  },
  activeLink: {
    color: "rgb(89, 89, 199)",
  },
};

const AuthNav = () => (
  <div>
    <NavLink
      to="/login"
      exact
      style={styles.link}
      activeStyle={styles.activeLink}
    >
      Вход
    </NavLink>
    <NavLink
      to="/registration"
      exact
      style={styles.link}
      activeStyle={styles.activeLink}
    >
      Регистрация
    </NavLink>
  </div>
);

export default AuthNav;
