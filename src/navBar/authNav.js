import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./authNav.module.css";
import { goToRegistr } from "../redux/auth/auth-actions"
import { useDispatch } from "react-redux";

const activeLink = {
  color: "#212121",
};

const AuthNav = () => {
  const dispatch = useDispatch();
  const goReg = (state) => dispatch(goToRegistr(state));

  return (
    <div className={styles.navWrapper}>
      <NavLink
        to="/login"
        exact
        className={styles.link}
        activeStyle={activeLink}
      >
        Вход
      </NavLink>
      <NavLink
        to="/registration"
        exact
        className={styles.link}
        activeStyle={activeLink}
        onClick={goReg}
      >
        Регистрация
      </NavLink>
    </div>
  );
};

export default AuthNav;
