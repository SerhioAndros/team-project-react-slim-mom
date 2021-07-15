import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getIsRegistr } from "../redux/auth/auth-selectors";

const PublicRoute = ({
  component: Component,
  isRegistrated,
  redirectTo,
  restricted,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={(props) =>
      isRegistrated && restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapStateToProps = (state) => ({
  isRegistrated: getIsRegistr(state),
});

export default connect(mapStateToProps)(PublicRoute);
