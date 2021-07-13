import React from "react";
import { connect } from "react-redux";

import styles from "./NavBar.module.css";
import Navigation from "./navigation";
import UserMenu from "./userMenu";
import AuthNav from "./authNav";
import { getIsAuthenticated } from "../redux/auth/auth-selector";

const NavBar = ({ isAuthenticated }) => (
  <header className={styles.header}>
    <Navigation />
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </header>
);

const mapStateToProps = (state) => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(NavBar);
