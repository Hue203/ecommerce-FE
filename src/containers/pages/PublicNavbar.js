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

  return (
    <Navbar collapseOnSelect expand="lg" className="publickNavbar">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="CompanyLogo"
            width="150px"
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
          <Nav>
            <Nav.Link eventKey={2}>
              {!loading && <>{isAuthenticated ? authLinks : publicLinks}</>}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    // <Navbar className="publicNavbar">
    //   <Navbar.Brand as={Link} to="/" className="mr-auto">
    //     <img
    //       src={logo}
    //       alt="CompanyLogo"
    //       width="150px"
    //       className="logo-resize"
    //     />

    //     <Navbar.Collapse id="navbar-dark-example">
    //       <Nav>
    //         <NavDropdown
    //           id="nav-dropdown-dark-example"
    //           title="Product"
    //           menuvariant="dark"
    //         >
    //           <NavDropdown.Item as={Link} to="/products">
    //             Fresh Detox Juice
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.3">Detox Tea</NavDropdown.Item>
    //           <NavDropdown.Divider />
    //           <NavDropdown.Item href="#action/3.4">
    //             Mixed Cereals
    //           </NavDropdown.Item>
    //           <NavDropdown.Divider />
    //           <NavDropdown.Item as={Link} to="/packages">
    //             Regular Drink
    //           </NavDropdown.Item>
    //           <NavDropdown.Divider />
    //           <NavDropdown.Item as={Link} to="/blogs">
    //             Blogs
    //           </NavDropdown.Item>
    //         </NavDropdown>
    //       </Nav>
    //       <Navbar.Brand as={Link} to="/">
    //         Home
    //       </Navbar.Brand>
    //       <br />
    //       <Navbar.Brand as={Link} to="/">
    //         About
    //       </Navbar.Brand>
    //     </Navbar.Collapse>
    //   </Navbar.Brand>

    //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //   <Navbar.Collapse id="basic-navbar-nav">
    //     <Nav className="mr-auto"></Nav>
    //     {!loading && <>{isAuthenticated ? authLinks : publicLinks}</>}
    //   </Navbar.Collapse>
    // </Navbar>
  );
};

export default PublicNavbar;
