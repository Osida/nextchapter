import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ROUTES, Home, Main, Login, SignIn, About } from '../../pages';

import { Sell } from './../../pages/Sell';
import { Buy } from './../../pages/Buy';

import {
  ThemeProvider as StyleThemeProvider,
  styleTheme,
} from '../../styles/utilities';

export default function App() {
  return (
    <>
      <StyleThemeProvider theme={styleTheme}>
        <div className="app">
          <Router>
            <Switch>
              <Route exact path={ROUTES.MAIN}>
                <Main />
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
            </Switch>
          </Router>
        </div>
      </StyleThemeProvider>
    </>
  );
}
