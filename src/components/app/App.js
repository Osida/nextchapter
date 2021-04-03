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
import { AuthProvider } from "../../context/AuthContext";
import PrivateRoute from "../../PrivateRoute";

export default function App() {
  return (
    <>
      <AuthProvider>
        <ThemeProvider theme={styleTheme}>
          <Router>
            <Switch>
              <Route exact path={ROUTES.ABOUT} component={About} />
              <Route exact path={ROUTES.SIGN_IN} component={SignIn} />
              <Route exact path={ROUTES.SIGN_UP} component={SignUp} />
              <Route exact path={ROUTES.PROFILE} component={Profile} />
              <Route exact path={ROUTES.SELL} component={Sell} />
              <Route exact path={ROUTES.BUY} component={Buy} />
              <Route exact path={ROUTES.TRADE} component={Trade} />
              <Route exact path={ROUTES.MAIN} component={Main} />
              <PrivateRoute exact path="/test" component={Test} />
              <Route path={ROUTES.HOME} component={Home} />
            </Switch>
          </Router>
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}
