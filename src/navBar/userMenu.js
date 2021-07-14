import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { UserInfo } from "../components/UserInfo/UserInfo";

import { getAuthUserName } from "../redux/auth/auth-selectors";
// import { logout } from "../redux/auth/auth-operations";
import styles from "./userMenu.module.css";

const activeLink = {
  color: "#212121",
};

const UserMenu = () => (
  <>
    <div className={styles.navWrapper}>
      <NavLink
        to="/diary"
        exact
        className={styles.link}
        activeStyle={activeLink}
      >
        Дневник
      </NavLink>
      <NavLink
        to="/calculator"
        exact
        className={styles.link}
        activeStyle={activeLink}
      >
        Калькулятор
      </NavLink>
    </div>
    <UserInfo />
  </>
);

const mapStateToProps = (state) => ({
  name: getAuthUserName(state),
});

// const mapDispatchToProps = (dispatch) => ({
//   onLogout: (data) => dispatch(logout(data)),
// });

export default connect(mapStateToProps, null)(UserMenu);
