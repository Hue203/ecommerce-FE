import React from "react";
import { Switch, Route } from "react-router";
import AlertMsg from "../../../components/AlertMsg";
import NotFoundPage from "../../../components/NotFoundPage";
import OrdersAdmin from "../../Admin/OrdersAdmin";
import { Container, Col, Row } from "react-bootstrap";
import SideMenuAdmin from "../../../components/SideMenuAdmin";
import ProductsAdmin from "../../Admin/ProductsAdmin";
import AdminManagement from "../../Admin/AdminManagement";
import { useHistory } from "react-router-dom";
import BlogAdmin from "../../Admin/BlogAdmin";
import { useSelector } from "react-redux";
import NavbarAdmin from "../../pages/NavbarAdmin";
import PackageAdmin from "../../Admin/PackageAdmin";
import Dashboard from "../../Admin/Dashboard";

const AdminLayout = () => {
  const role = useSelector((state) => state.auth.role);
  const history = useHistory();
  if (role !== "admin") {
    console.log("hahahah", role);
    history.push("/");
  }

  return (
    <>
      <AlertMsg />
      <NavbarAdmin />
      <Switch>
        <Route exact path="/admin/management" component={AdminManagement} />
        <Route exact path="/admin/dashboard" component={Dashboard} />
        <Route exact path="/admin/products" component={ProductsAdmin} />
        <Route exact path="/admin/orders" component={OrdersAdmin} />
        <Route exact path="/admin/blogs" component={BlogAdmin} />
        <Route exact path="/admin/packages" component={PackageAdmin} />

        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
};

export default AdminLayout;
