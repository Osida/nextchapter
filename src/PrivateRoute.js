import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import { ROUTES } from "./pages";

// This private route is just a wrapper around another route
export default function PrivateRoute({ component: Component, ...restProps }) {
  const { currentUser } = useAuth();

  return (
    <Route
      {...restProps}
      render={(props) => {
        return currentUser ? (<Component {...props} />) : (<Redirect to={ROUTES.SIGN_IN} />);
      }}
    ></Route>
  );
}
