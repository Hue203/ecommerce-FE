import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import logo from "../../images/logonavbar.jpg";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../redux/actions/auth.actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PublicNavbar = () => {
  const history = useHistory();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const selectedUser = useSelector((state) => state.user.selectedUser);
  console.log("selectedUser", selectedUser);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(authActions.logout());
    history.push("/");
  };
  const role = useSelector((state) => state.auth.role);

  const authLinks = (
    <Nav bg="dark" responsive="sm">
      <Nav.Link as={Link} to="/user/profile">
        <FontAwesomeIcon icon="user" size="lg" />
      </Nav.Link>
      <Nav.Link as={Link} to="/cart/checkout">
        {" "}
        {selectedUser && selectedUser.cart?.length ? (
          <span className="number-cart">
            {selectedUser.cart.reduce((a, b) => a + b.quantity, 0)}
          </span>
        ) : (
          ""
        )}
        <FontAwesomeIcon icon="shopping-cart" size="lg" />
      </Nav.Link>
      <Nav.Link onClick={handleLogout}>
        <FontAwesomeIcon icon="sign-out-alt" size="lg" />
      </Nav.Link>
    </Nav>
  );
  const adminAuthLinks = (
    <Nav bg="dark" responsive="sm">
      <Nav.Link as={Link} to="/admin/management">
        <FontAwesomeIcon icon="user" size="lg" /> Dashboard
      </Nav.Link>

      <Nav.Link onClick={handleLogout}>
        <FontAwesomeIcon icon="sign-out-alt" size="lg" /> Logout
      </Nav.Link>
    </Nav>
  );

  const publicLinks = (
    <Nav responsive="sm">
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
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>

              <Nav.Link as={Link} to="/products">
                Detox Juice
              </Nav.Link>
              <Nav.Link as={Link} to="/packages">
                {" "}
                Package
              </Nav.Link>
              {/* <NavDropdown.Item as={Link} to="/blogs">
                Blogs
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/">
                Mixed Cereals
              </NavDropdown.Item> */}
            </Nav>

            {isAuthenticated && role
              ? role === "user"
                ? authLinks
                : adminAuthLinks
              : publicLinks}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="break"></div>
    </>
  );
};

export default PublicNavbar;
