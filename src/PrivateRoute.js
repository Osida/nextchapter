import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import { useStateValue } from "./context/StateProvider";
import ROUTES from "./pages";

// This private route is just a wrapper around another route
export default function PrivateRoute({ component: Component, ...restProps }) {
  // const { currentUser } = useAuth();
  const [{ user }] = useStateValue();

  return (
    <Route
      {...restProps}
      render={(props) => {
        return user ? (<Component {...props} />) : (<Redirect to={ROUTES.SIGN_IN} />);
      }}
    ></Route>
  );
}
