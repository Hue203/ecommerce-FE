import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import AdminLayout from "./AdminLayout";
import ProtectedRoute from "../ProtectedRoute";
import { useSelector } from "react-redux";

const Routes = () => {
  const role = useSelector((state) => state.auth.role);
  const history = useHistory();

  return (
    <Switch>
      <ProtectedRoute path="/admin" component={AdminLayout} />
      <Route path="/" component={PublicLayout} />
    </Switch>
  );
};
export default Routes;
