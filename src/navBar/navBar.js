import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./navBar.module.css";

const style = {
  fontFamily: `"Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif`,
  fontSize: 25,
  color: "white",
  textDecoration: "none",
};
const styleActive = {
  fontFamily: `"Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif`,
  fontSize: 25,
  color: "darkblue",
  textDecoration: "none",
};
const Navigation = () => {
  return (
    <div className={styles.HeaderBar}>
      <nav>
        <ul className={styles.List}>
          <li className={styles.ListItem}>
            <NavLink exact to="/" style={style} activeStyle={styleActive}>
              Homepage
            </NavLink>
          </li>
          <li className={styles.ListItem}>
            <NavLink to="/login" style={style} activeStyle={styleActive}>
              Login
            </NavLink>
          </li>
          <li className={styles.ListItem}>
            <NavLink to="/registration" style={style} activeStyle={styleActive}>
              Registration
            </NavLink>
          </li>

          <li className={styles.ListItem}>
            <NavLink to="/diary" style={style} activeStyle={styleActive}>
              Diary
            </NavLink>
          </li>

          <li className={styles.ListItem}>
            <NavLink to="/calculator" style={style} activeStyle={styleActive}>
              Calculator
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
