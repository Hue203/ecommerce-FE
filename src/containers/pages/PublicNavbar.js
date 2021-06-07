import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/logonavbar.jpg";
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
  const role = useSelector((state) => state.auth.user.role);

  const authLinks = (
    <Nav bg="dark">
      <Nav.Link as={Link} to="/user/profile">
        <FontAwesomeIcon icon="user" size="sm" />
      </Nav.Link>
      <Nav.Link as={Link} to="/cart/checkout">
        <FontAwesomeIcon icon="shopping-basket" size="sm" />
      </Nav.Link>
      <Nav.Link onClick={handleLogout}>
        <FontAwesomeIcon icon="sign-out-alt" size="sm" />
      </Nav.Link>
    </Nav>
  );
  const adminAuthLinks = (
    <Nav bg="dark">
      <Nav.Link as={Link} to="/admin/products">
        <FontAwesomeIcon icon="user" size="sm" /> Dashboard
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

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="publickNavbar">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src="https://res.cloudinary.com/hue203/image/upload/v1622744142/LogoMakr-4nseHJ_fgvegi.png"
              alt="CompanyLogo"
              className="logo-resize"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <NavDropdown title="Product" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/products">
                  Fresh Detox Juice
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/packages">
                  {" "}
                  Regular Drink
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/blogs">
                  Blogs
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/">
                  Mixed Cereals
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            {!loading && (
              <>
                {isAuthenticated
                  ? role === "user"
                    ? authLinks
                    : adminAuthLinks
                  : publicLinks}
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="break"></div>
    </>
  );
};

export default PublicNavbar;
