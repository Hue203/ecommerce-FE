import React from "react";
import {
  Row,
  Col,
  Button,
  Form,
  ButtonGroup,
  Tab,
  Nav,
  Card,
} from "react-bootstrap";
import ProductsAdmin from "./ProductsAdmin";
import OrdersAdmin from "./OrdersAdmin";
import BlogAdmin from "./BlogAdmin";
const AdminDashboard = () => {
  return (
    <>
      <Tab.Container id="left-tabs-example" defaultActiveKey="products">
        <Row>
          <Col sm={3}>
            <Nav className="flex-column nav-custom">
              <Nav.Item>
                <Nav.Link eventKey="products">Products</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="orders">Orders</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="blogs">Blogs</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="products">
                <ProductsAdmin />
              </Tab.Pane>
              <Tab.Pane eventKey="orders">
                <OrdersAdmin />
              </Tab.Pane>
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

export default AdminDashboard;
