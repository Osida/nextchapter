import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { NotFound } from "..";
import { actionTypes } from "../../context/reducer";
import { useStateValue } from "../../context/StateProvider";
import { auth } from "../../database/firebaseConfig";
import ROUTES, * as PAGE from "../../pages";
import { styleTheme } from "../../styles";

export default function App() {
  // Call this to access global state
  const [state, dispatch] = useStateValue();

  useEffect(() => {
    // auth.onAuthStateChanged() is a Firebase method - sets the user
    // unsubscribe = return method will unsubscribe the onAuthStateChanged() event
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      // For dev purposes
      console.log("THE USER IS >>", authUser);
      // a user exist then set global state user
      if (authUser) {
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        });
      }
      // a user doesn't exist then set global state user
      else {
        dispatch({
          type: actionTypes.SET_USER,
          user: null,
        });
      }
    });
    return unsubscribe;
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
            <Route exact path={ROUTES.HOME} component={PAGE.Home} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}
