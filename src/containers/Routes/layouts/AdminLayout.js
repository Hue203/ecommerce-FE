import React from "react";
import { Switch, Route } from "react-router";
import AlertMsg from "../../../components/AlertMsg";
import NotFoundPage from "../../../components/NotFoundPage";
import OrdersAdmin from "../../Admin/OrdersAdmin";
import { Container, Col, Row } from "react-bootstrap";
import SideMenuAdmin from "../../../components/SideMenuAdmin";
import ProductsAdmin from "../../Admin/ProductsAdmin";
import AdminDashboard from "../../Admin/AdminDashboard";
import { useHistory } from "react-router-dom";
import BlogAdmin from "../../Admin/BlogAdmin";
import { useSelector } from "react-redux";

const AdminLayout = () => {
  const role = useSelector((state) => state.auth.role);
  const history = useHistory();
  if (role !== "admin") {
    history.push("/");
  }

  return (
    <>
      <Container fluid>
        <Row>
          <SideMenuAdmin />
          <Col md={9} lg={10}>
            <AlertMsg />
            <Switch>
              <Route
                exact
                path="/admin/management"
                component={AdminDashboard}
              />
              <Route exact path="/admin/products" component={ProductsAdmin} />
              <Route exact path="/admin/orders" component={OrdersAdmin} />
              <Route exact path="/admin/blogs" component={BlogAdmin} />

              <Route component={NotFoundPage} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminLayout;
