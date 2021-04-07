import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ROUTES, * as PAGE from "../../pages";
import { styleTheme } from "../../styles";
import { ThemeProvider } from "styled-components";
import { AuthProvider, useAuth } from "../../context/AuthContext";
import PrivateRoute from "../../PrivateRoute";
import { auth } from "../../database/firebaseConfig";
import { StateProvider, useStateValue } from "../../context/StateProvider";
import reducer, { actionTypes, initialState } from "../../context/reducer";

export default function App() {
  // Call this to access global state
  const [state, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // For dev purposes
      console.log("THE USER IS >>", authUser);

      // If user add user to global state else set user to null
      if (authUser) {
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        });
      } else {
        // user is logged out
        dispatch({
          type: actionTypes.SET_USER,
          user: null,
        });
      }
    });
  }, []);

  return (
    <>
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
    </>
  );
}
