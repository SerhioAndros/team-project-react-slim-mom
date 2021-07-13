import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import { getUserName } from "../redux/auth/auth-selector";
// import { logout } from "../redux/auth/auth-operations";
// import styles from "./UserMenu.module.css";

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

const UserMenu = ({ name, onLogout }) => (
  <>
    <div className="appNavigation">
      <NavLink
        to="/diary"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Дневник
      </NavLink>
      <NavLink
        to="/calculator"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Калькулятор
      </NavLink>
    </div>
    <div className="userInfo">
      <span>
        Привет, <span>{name}</span>
      </span>
      <button
        type="button"
        // onClick={onLogout}
      >
        Выйти
      </button>
    </div>
  </>
);

const mapStateToProps = (state) => ({
  name: getUserName(state),
});

// const mapDispatchToProps = (dispatch) => ({
//   onLogout: (data) => dispatch(logout(data)),
// });

export default connect(mapStateToProps, null)(UserMenu);
