import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const ProtectedRoute = ({ ...rest }) => {
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // console.log("isAuthenticated", isAuthenticated);
  // if (isAuthenticated) return <Route {...rest} />;

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  if (isAuthenticated) return <Route {...rest} />;
  delete rest.component;

  return <Redirect to="/login" />;
};

export default ProtectedRoute;
