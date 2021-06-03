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
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col xs={4}>
          <Form.Control
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
    </Form>
  );
};

export default HeaderBar;
