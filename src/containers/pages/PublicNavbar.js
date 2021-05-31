import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/simpleBlen-logo.png";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../redux/actions/auth.actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PublicNavbar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const loading = useSelector((state) => state.auth.loading);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authActions.logout());
  };

  const authLinks = (
    <Nav bg="dark">
      <Nav.Link as={Link} to="/user/profile">
        <FontAwesomeIcon icon="user" size="sm" /> Account
      </Nav.Link>

      <Nav.Link as={Link} to="/cart/checkout">
        <FontAwesomeIcon icon="shopping-cart" size="sm" /> Carts
        <i class="fas fa-shopping-cart"></i>
      </Nav.Link>
      <Nav.Link onClick={handleLogout}>
        <FontAwesomeIcon icon="sign-out-alt" size="sm" /> Logout
      </Nav.Link>
    </Nav>
  );

  const publicLinks = (
    <Nav>
      <Nav.Link as={Link} to="/register">
        <FontAwesomeIcon icon="registered" size="sm" /> Register
      </Nav.Link>
      <Nav.Link as={Link} to="/login">
        <FontAwesomeIcon icon="sign-in-alt" size="sm" /> Login
      </Nav.Link>
    </Nav>
  );

  <Nav>
    <Nav.Link as={Link} to="/user/dashboard">
      <FontAwesomeIcon icon="user" size="sm" /> Dashboard
    </Nav.Link>
  </Nav>;

  return (
    <Navbar className="publicNavbar">
      <Navbar.Brand as={Link} to="/" className="mr-auto">
        <img
          src={logo}
          alt="CompanyLogo"
          width="150px"
          className="logo-resize"
        />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Catagories"
              menuvariant="dark"
            >
              <NavDropdown.Item>
                {" "}
                <FontAwesomeIcon icon="list-alt" size="sm" /> Detox products
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/products">
                Fresh Detox Juice
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Detox Tea</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Mixed Cereals
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/packages">
                Regular Drink
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/blogs">
                Blogs
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar.Brand>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="mr-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
      <Nav className="mr-auto"></Nav>
      {!loading && <>{isAuthenticated ? authLinks : publicLinks}</>}
    </Navbar>
  );
};

export default PublicNavbar;
