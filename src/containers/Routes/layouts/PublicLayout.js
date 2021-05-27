import React from "react";
import HomePage from "../../pages/HomePage";
import { Switch, Route } from "react-router-dom";
import PublicNavbar from "../../pages/PublicNavbar";
import AlertMsg from "../../../components/AlertMsg";
import NotFoundPage from "../../../components/NotFoundPage";
import RegisterPage from "../../pages/RegisterPage";
import LoginPage from "../../pages/LoginPage";
import DetailPage from "../../pages/DetailPage";
import UserDashBoard from "../../pages/UserDashboard";
import ProtectedRoute from "../ProtectedRoute";
import PakagesDetailPage from "../../pages/PakagesDetailPage";
import BlogDetailPage from "../../pages/BlogDetailPage";
import ProductsPage from "../../pages/ProductsPage";

const PublicLayout = () => {
  return (
    <>
      <PublicNavbar />

      <AlertMsg />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/products" component={ProductsPage} />
        <Route exact path="/products/:id" component={DetailPage} />
        <Route exact path="/packages/:id" component={PakagesDetailPage} />
        <Route exact path="/blogs/:id" component={BlogDetailPage} />
        <ProtectedRoute
          exact
          path="/user/dashboard"
          component={UserDashBoard}
        />

        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
};

export default PublicLayout;
