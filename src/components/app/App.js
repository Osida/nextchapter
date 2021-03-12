import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ROUTES, Home, Main, Login, SignIn, About } from "../../pages";

export default function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path={ROUTES.MAIN}>
            <Main />
          </Route>
          <Route path={ROUTES.LOGIN}>
            <Login />
          </Route>
          <Route path={ROUTES.SIGN_IN}>
            <SignIn />
          </Route>
          <Route path={ROUTES.ABOUT}>
            <About />
          </Route>
          <Route path={ROUTES.HOME}>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
