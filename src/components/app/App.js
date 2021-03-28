import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ROUTES, Home, Main, Login, SignIn, About, Profile } from "../../pages";

import { Sell } from "./../../pages/Sell";
import { Buy } from "./../../pages/Buy";
import { Trade } from "./../../pages/Trade";

import { ThemeProvider, styleTheme } from "../../styles/utilities";
import Test from "../../pages/Test";

export default function App() {
  return (
    <>
      <ThemeProvider theme={styleTheme}>
        <div className="app">
          <Router>
            <Switch>
              <Route exact path="/test">
                <Test />
              </Route>
              <Route exact path={ROUTES.MAIN}>
                <Main />
              </Route>
              <Route exact path={ROUTES.PROFILE}>
                <Profile />
              </Route>
              <Route exact path={ROUTES.LOGIN}>
                <Login />
              </Route>
              <Route exact path={ROUTES.SIGN_IN}>
                <SignIn />
              </Route>
              <Route exact path={ROUTES.ABOUT}>
                <About />
              </Route>
              <Route exact path={ROUTES.HOME}>
                <Home />
              </Route>
              <Route exact path={ROUTES.SELL}>
                <Sell />
              </Route>
              <Route exact path={ROUTES.BUY}>
                <Buy />
              </Route>
              <Route exact path={ROUTES.TRADE}>
                <Trade />
              </Route>
            </Switch>
          </Router>
        </div>
      </ThemeProvider>
    </>
  );
}
