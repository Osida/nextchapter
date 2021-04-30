import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { NotFound } from "..";
import { actionTypes } from "../../context/reducer";
import { useStateValue } from "../../context/StateProvider";
import { auth, db, collections } from "../../database";
import ROUTES, * as PAGE from "../../pages";
import { styleTheme } from "../../styles";

export default function App() {
  const [{ user, student }, dispatch] = useStateValue();

  useEffect(() => {
    let unsubscribeAuth;
    let unsubscribeDB;
    // auth.onAuthStateChanged() is a Firebase method - sets the user
    // unsubscribe = return method will unsubscribe the onAuthStateChanged() event
    unsubscribeAuth = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        });
        unsubscribeDB = db
          .collection(collections.students)
          .doc(authUser?.uid)
          .onSnapshot((doc) => {
            dispatch({
              type: actionTypes.SET_STUDENT,
              student: doc.data(),
            });
          });
      } else {
        dispatch({
          type: actionTypes.SET_USER,
          user: null,
        });
        dispatch({
          type: actionTypes.SET_STUDENT,
          student: null,
        });
      }
    });
    return { unsubscribeAuth, unsubscribeDB };
  }, []);

  return (
    <>
      <ThemeProvider theme={styleTheme}>
        <Router>
          <Switch>
            <Route exact path={ROUTES.ABOUT} component={PAGE.About} />
            <Route exact path={ROUTES.SIGN_IN} component={PAGE.SignIn} />
            <Route exact path={ROUTES.SIGN_UP} component={PAGE.SignUp} />
            <Route
              exact
              path={ROUTES.RESET_PASSWORD}
              component={PAGE.ResetPassword}
            />
            <Route exact path={ROUTES.PROFILE} component={PAGE.Profile} />
            <Route exact path={ROUTES.SELL} component={PAGE.Sell} />
            <Route exact path={ROUTES.BUY} component={PAGE.Buy} />
            <Route exact path={ROUTES.HOME} component={PAGE.Home} />
            <Route exact path="/test" component={PAGE.Test} />
            <Route component={NotFound} />
            {/* <PrivateRoute exact path="/test" component={Test} /> */}
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}
