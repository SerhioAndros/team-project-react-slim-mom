import React, { Component, Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";

import PublicRoute from "./routes/publicRoute";
import PrivateRoute from "./routes/privateRoute";
import NotFound from "./pages/notFoundPage";

const HomePage = lazy(() =>
  import("./pages/HomePage" /* webpackChunkName: 'home-page' */)
);

const NavBar = lazy(() =>
  import("./navBar/NavBar.js" /* webpackChunkName: 'navigation-page' */)
);

const LoginPage = lazy(() =>
  import("./pages/LoginPage.js" /* webpackChunkName: 'login-page' */)
);

const RegistrationPage = lazy(() =>
  import("./pages/RegistrationPage" /* webpackChunkName: 'registration-page' */)
);

const CalculatorPage = lazy(() =>
  import("./pages/CalculatorPage" /* webpackChunkName: 'calculator-page' */)
);

const DiaryPage = lazy(() =>
  import("./pages/DiaryPage.js" /* webpackChunkName: 'diary-page' */)
);

class App extends Component {
  state = {
    isModal: false,
  };
  render() {
    return (
      <>
        <Suspense fallback={<p>Loading...</p>}>
          <NavBar />
          <Switch>
            <PublicRoute exact path="/" component={HomePage} />
            <PublicRoute
              exact
              path="/login"
              redirectTo="/calculator"
              restricted
              component={LoginPage}
            />
            <PublicRoute
              exact
              path="/registration"
              redirectTo="/calculator"
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
      </>
    );
  }
}

export default App;
