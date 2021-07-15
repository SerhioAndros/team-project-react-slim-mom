import React, { Component, Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";

import PublicRoute from "./routes/publicRoute";
import PrivateRoute from "./routes/privateRoute";
import NotFound from "./pages/notFoundPage";
import { AppLoader } from "./shared/components/loader/Loader";
import PublicRouteReg from "./routes/publicRouteReg";
import "./App.css";
import { connect } from "react-redux";
import { getCurrentUser } from "./redux/auth/auth-operation";

const HomePage = lazy(() =>
  import("./pages/homePage" /* webpackChunkName: 'home-page' */)
);

const NavBar = lazy(() =>
  import("./navBar/navBar" /* webpackChunkName: 'navigation-page' */)
);

const LoginPage = lazy(() =>
  import("./pages/loginPage" /* webpackChunkName: 'login-page' */)
);

const RegistrationPage = lazy(() =>
  import("./pages/registerPage" /* webpackChunkName: 'registration-page' */)
);

const CalculatorPage = lazy(() =>
  import("./pages/calculatorPage.js" /* webpackChunkName: 'calculator-page' */)
);

const DiaryPage = lazy(() =>
  import("./pages/diaryPage" /* webpackChunkName: 'diary-page' */)
);

class App extends Component {
  state = {
    isModal: false,
  };

  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    return (
      <div className="appWrapper">
        <Suspense fallback={<AppLoader />}>
          <NavBar />
          <Switch>
            <PublicRoute
              exact
              path="/"
              redirectTo="/calculator"
              restricted
              component={HomePage}
            />
            <PublicRoute
              exact
              path="/login"
              redirectTo="/calculator"
              restricted
              component={LoginPage}
            />
            <PublicRouteReg
              exact
              path="/registration"
              redirectTo="/login"
              restricted
              component={RegistrationPage}
            />
            <PrivateRoute
              exact
              path="/calculator"
              redirectTo="/"
              component={CalculatorPage}
            />
            <PrivateRoute
              exact
              path="/diary"
              redirectTo="/"
              component={DiaryPage}
            />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

const mapDispatchToProps = {
  getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
