import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const ReviewForm = ({
  reviewText,
  handleInputChange,
  handleSubmitReview,
  loading,
}) => {
  return (
    <Form onSubmit={handleSubmitReview}>
      <Form.Group as={Row}>
        <Form.Label htmlFor="review" column sm="2">
          Review:
        </Form.Label>
        <Col sm="6">
          <Form.Control
            id="review"
            type="text"
            value={reviewText}
            onChange={handleInputChange}
          />
        </Col>
        <Col>
          {loading ? (
            <Button variant="warning" type="button" disabled>
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
              Submitting...
            </Button>
          ) : (
            <Button variant="warning" type="submit" disabled={!reviewText}>
              Submit
            </Button>
          )}
        </Col>
      </Form.Group>
    </Form>
  );
};

export default ReviewForm;
