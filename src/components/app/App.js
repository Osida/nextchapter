import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ROUTES, * as PAGE from "../../pages";
import { styleTheme } from "../../styles";
import { ThemeProvider } from "styled-components";
import { AuthProvider, useAuth } from "../../context/AuthContext";
import PrivateRoute from "../../PrivateRoute";
import { auth } from "../../database/firebaseConfig";
import { StateProvider } from "../../context/StateProvider";
import reducer, { initialState } from "../../context/reducer";

export default function App() {
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>", authUser);

      if (authUser) {
        // user is logged in / was logged in
      } else {
        // user is logged out
      }
    });
  }, []);

  return (
    <>
      <StateProvider initialState={initialState} reducer={reducer}>
        <AuthProvider>
          <ThemeProvider theme={styleTheme}>
            <Router>
              <Switch>
                <Route exact path={ROUTES.ABOUT} component={PAGE.About} />
                <Route exact path={ROUTES.SIGN_IN} component={PAGE.SignIn} />
                <Route exact path={ROUTES.SIGN_UP} component={PAGE.SignUp} />
                <Route exact path={ROUTES.PROFILE} component={PAGE.Profile} />
                <Route exact path={ROUTES.SELL} component={PAGE.Sell} />
                <Route exact path={ROUTES.BUY} component={PAGE.Buy} />
                <Route exact path={ROUTES.TRADE} component={PAGE.Trade} />
                <Route exact path={ROUTES.MAIN} component={PAGE.Main} />
                {/* <PrivateRoute exact path="/test" component={Test} /> */}
                <Route exact path="/test" component={PAGE.Test} />
                <Route path={ROUTES.HOME} component={PAGE.Home} />
              </Switch>
            </Router>
          </ThemeProvider>
        </AuthProvider>
      </StateProvider>
    </>
  );
}
