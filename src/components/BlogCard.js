import React from "react";
import { Container } from "react-bootstrap";
import { Card, Col, Row } from "react-bootstrap";
import Moment from "react-moment";

const BlogCard = ({ blog, handleClick }) => {
  return (
    <>
      <Container className="blog-container">
        <Card onClick={() => handleClick(blog._id)}>
          <Row className="blog-card">
            <Col>
              <img
                className="blog-img "
                variant="top"
                src={blog?.blogImage ? blog.blogImage : "holder.js/100px160"}
                alt="blog-img"
              />
            </Col>
            <Col className="blog-content-div">
              <Card.Body>
                <Card.Title>{blog.title}</Card.Title>
                <Card.Text>
                  {blog?.content?.length <= 350 && blog.content !== undefined
                    ? blog.content
                    : blog.content.slice(0, 350) + "..."}
                </Card.Text>
              </Card.Body>
            </Col>
            <Card.Footer>
              <small className="text-muted">
                <span className="text-muted">
                  <Moment fromNow>{blog.createdAt}</Moment>
                </span>
              </small>
            </Card.Footer>
          </Row>
        </Card>
      </Container>
    </>
  );
};

export default BlogCard;
