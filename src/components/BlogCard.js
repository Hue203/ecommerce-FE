import React from "react";
import { Button, Container } from "react-bootstrap";
import { Card, Col, Row } from "react-bootstrap";
import Moment from "react-moment";

const BlogCard = ({ blog, handleClick }) => {
  return (
    <>
      <Container className="blog-container">
        <Card onClick={() => handleClick(blog._id)} className="blog-card">
          <Row className="blog-row">
            <Col>
              <div className="blog-div">
                <img
                  className="blog-img "
                  variant="top"
                  src={blog?.blogImage ? blog.blogImage : "holder.js/300px160"}
                  alt="blog-img"
                />
              </div>
            </Col>
            <Col className="blog-content-div">
              <Card.Title className="blog-title">{blog.title}</Card.Title>

              <Card.Text className="blog-content">
                {blog?.content?.length <= 350 && blog.content !== undefined
                  ? blog.content
                  : blog.content.slice(0, 350) + "..."}
              </Card.Text>
              <Button
                className="readmore-btn"
                variant="success"
                onClick={() => handleClick(blog._id)}
              >
                Read More
              </Button>
            </Col>

            <small className="text-muted">
              <span className="text-muted">
                <p>
                  Posted:<Moment fromNow>{blog.createdAt}</Moment>
                </p>
              </span>
            </small>
          </Row>
        </Card>
      </Container>
    </>
  );
};

export default BlogCard;
