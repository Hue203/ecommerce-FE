import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const SideMenuUser = () => {
  return (
    <Nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="sidebar-sticky pt-3">
        <Nav.Item>
          <Nav.Link
            as={NavLink}
            to="/user/profile"
            activeClassName="active"
            strict={true}
          >
            Profile User
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            as={NavLink}
            to="/user/orders"
            activeClassName="active"
            strict={true}
          >
            Orders
          </Nav.Link>
        </Nav.Item>
      </div>
    </Nav>
  );
};

export default SideMenuUser;
