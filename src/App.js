import React, { Component, Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";

import PublicRoute from "./routes/publicRoute";
import PrivateRoute from "./routes/privateRoute";
import NotFound from "./pages/notFoundPage";

// test2

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
  render() {
    return (
      <>
        <Suspense fallback={<p>Loading...</p>}>
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
