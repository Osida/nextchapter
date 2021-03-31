import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ROUTES,
  Home,
  Main,
  SignUp,
  SignIn,
  About,
  Profile,
  Sell,
  Buy,
  Trade,
} from "../../pages";
import Test from "../../pages/Test";
import { styleTheme } from "../../styles";
import { ThemeProvider } from "styled-components";

export default function App() {
  return (
    <>
      <ThemeProvider theme={styleTheme}>
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
            <Route exact path={ROUTES.SIGN_UP}>
              <SignUp />
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
      </ThemeProvider>
    </>
  );
}
