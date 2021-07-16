import React from "react";
import { connect } from "react-redux";

import styles from "./navBar.module.css";
import Navigation from "./navigation";
import UserMenu from "./userMenu";
import AuthNav from "./authNav";
import { getIsAuth } from "../redux/auth/auth-selectors";

// import Footer from "../components/footer/Footer";

const NavBar = ({ isAuthenticated }) => (
  <div className={styles.headerContainer}>
    <div className={styles.headerSection}>
      <Navigation auth={isAuthenticated} />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
      {/* <Footer /> */}
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  isAuthenticated: getIsAuth(state),
});

export default connect(mapStateToProps)(NavBar);
