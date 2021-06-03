import React from "react";
import { Form, Button, Col, Row } from "react-bootstrap";

const SearchItem = ({
  searchInput,
  handleInputChange,
  handleSubmit,
  loading,
}) => {
  return (
    <Form className="d-flex" onSubmit={handleSubmit}>
      <Form.Row>
        <Row>
          <Col>
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
  );
};

export default SearchItem;
