import React, { Component, Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "./pages/notFoundPage";

const HomePage = lazy(() =>
  import("./pages/homePage" /* webpackChunkName: 'home-page' */)
);
const LoginPage = lazy(() =>
  import("./pages/loginPage" /* webpackChunkName: 'movie-page' */)
);
const Navigation = lazy(() =>
  import("./navBar/navBar" /* webpackChunkName: 'navigation-page' */)
);
const RegistrationPage = lazy(() =>
  import("./pages/registerPage" /* webpackChunkName: 'movie-deatils-page' */)
);

const CalculatorPage = lazy(() =>
  import("./pages/calculatorPage" /* webpackChunkName: 'movie-deatils-page' */)
);

const DiaryPage = lazy(() =>
  import("./pages/diaryPage" /* webpackChunkName: 'movie-deatils-page' */)
);

class App extends Component {
  state = {
    isModal: false,
  };
  render() {
    return (
      <>
        <Suspense fallback="Loading...">
          <Navigation />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/registration" component={RegistrationPage} />
            <Route exact path="/calculator" component={CalculatorPage} />
            <Route exact path="/diary" component={DiaryPage} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default App;
