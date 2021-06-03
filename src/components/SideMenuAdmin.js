import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const SideMenuAdmin = ({ page }) => {
  return (
    <Nav>
      <div className="sidebar-sticky pt-3">
        {/* <Nav.Item>
          <Nav.Link
            as={NavLink}
            to="/admin/management"
            activeClassName="active"
            strict={true}
          >
            DashBoard
          </Nav.Link>
        </Nav.Item> */}
        <Nav.Item>
          <Nav.Link
            as={NavLink}
            to="/admin/products"
            className={page === "products" ? "active-side" : "normal-side"}
            strict={true}
          >
            Products
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            as={NavLink}
            to="/admin/orders"
            className={page === "orders" ? "active-side" : "normal-side"}
            strict={true}
          >
            Orders
          </Nav.Link>
        </Nav.Item>
        {/* <Nav.Item>
          <Nav.Link
            as={NavLink}
            to="/admin/payment"
            activeClassName="active"
            strict={true}
          >
            Payments
          </Nav.Link>
        </Nav.Item> */}

        {/*  <Nav.Item>
          <Nav.Link
            as={NavLink}
            to="/admin/blogs"
            activeClassName="active"
            strict={true}
          >
            Blogs
          </Nav.Link>
        </Nav.Item> */}
        {/* <Nav.Item>
          <Nav.Link
            as={NavLink}
            to="/admin/messenger"
            activeClassName="active"
            strict={true}
          >
            Messenger
          </Nav.Link>
        </Nav.Item> */}
      </div>
    </Nav>
  );
};

export default SideMenuAdmin;
