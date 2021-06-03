import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Row,
  Col,
} from "react-bootstrap";

const HeaderBar = ({
  searchInput,
  handleInputChange,
  handleSubmit,
  loading,
}) => {
  return (
    <Navbar>
      <Navbar.Brand></Navbar.Brand>
      <Navbar.Brand></Navbar.Brand>
      <Navbar.Brand></Navbar.Brand>
      <Navbar.Brand></Navbar.Brand>
      <Navbar.Brand></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Form className="d-flex" onSubmit={handleSubmit}>
          <Form.Row>
            <Row>
              <Col className="formsearch" xs={8}>
                <Form.Control
                  className="mr-2"
                  id="search-input"
                  type="text"
                  placeholder="Search.."
                  value={searchInput}
                  onChange={handleInputChange}
                />
              </Col>
              <Col>
                {loading ? (
                  <Button variant="outline-success" type="button" disabled>
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Searching...
                  </Button>
                ) : (
                  <Button type="submit" variant="outline-success">
                    Search
                  </Button>
                )}
              </Col>
            </Row>
          </Form.Row>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default HeaderBar;
