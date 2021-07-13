import React from "react";
import { NavLink } from "react-router-dom";
import logoImg from "../images/logo.png";
import styles from "./navigation.module.css";

const Navigation = () => (
  <NavLink exact to="/">
    <div className={styles.logoWrapper}>
      <img className={styles.logoImg} src={logoImg} alt="Website logo" />
      <span className={styles.logoText}>Slim</span>
      <span className={styles.logoTextAccent}>Mom</span>
    </div>
  </NavLink>
);

export default Navigation;
