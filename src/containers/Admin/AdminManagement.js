import React from "react";
import { Row, Col, Tab, Nav } from "react-bootstrap";
import ProductsAdmin from "./ProductsAdmin";
import OrdersAdmin from "./OrdersAdmin";
import BlogAdmin from "./BlogAdmin";
import Dashboard from "./Dashboard";
import CustomersAdmin from "./CustomersAdmin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PackageAdmin from "./PackageAdmin";

const AdminManagement = () => {
  return (
    <>
      <Tab.Container id="left-tabs-example" defaultActiveKey="dashboard">
        <Row style={{ marginTop: "70px", margin: "40px" }}>
          <Col sm={2} style={{ textAlign: "center" }}>
            <Nav className="flex-column nav-custom">
              <Nav.Item>
                <Nav.Link eventKey="dashboard">
                  <FontAwesomeIcon icon="home" size="sm" />
                  Dashboard
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="products">
                  <FontAwesomeIcon icon="shopping-cart" size="sm" /> Products
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="orders">
                  {" "}
                  <FontAwesomeIcon icon="file" size="sm" /> Orders
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="customers">
                  {" "}
                  <FontAwesomeIcon icon="users" size="sm" /> Customers
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="packages">
                  {" "}
                  <FontAwesomeIcon icon="shopping-cart" size="sm" /> Packages
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="blogs">
                  {" "}
                  <i class="fab fa-blogger" /> Blogs
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="dashboard">
                <Dashboard />
              </Tab.Pane>
              <Tab.Pane eventKey="products">
                <ProductsAdmin />
              </Tab.Pane>
              <Tab.Pane eventKey="orders">
                <OrdersAdmin />
              </Tab.Pane>
              <Tab.Pane eventKey="customers">
                <CustomersAdmin />
              </Tab.Pane>
              {/* <Tab.Pane eventKey="packages">
                <PackageAdmin />
              </Tab.Pane> */}
              <Tab.Pane eventKey="blogs">
                <BlogAdmin />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
};

export default AdminManagement;
