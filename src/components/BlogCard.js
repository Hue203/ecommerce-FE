import React from "react";
import { Button } from "react-bootstrap";
import { Card, Col, Row, Container } from "react-bootstrap";
import Moment from "react-moment";

const BlogCard = ({ blog, handleClick }) => {
  return (
    <Container>
      {/* <div className="blog-container">
        <div className="card-blog" onClick={() => handleClick(blog._id)}>
          <div className="imgBx">
            <img
              className="blog-img "
              variant="top"
              src={blog?.blogImage ? blog.blogImage : "holder.js/300px160"}
              alt="blog-img"
            />
          </div>
        </div>
        <div className="content-blog">
          <h2>{blog.title}</h2>
          <p>
            {" "}
            {blog?.content?.length <= 150 && blog.content !== undefined
              ? blog.content
              : blog.content.slice(0, 150) + "..."}
          </p>
        </div>

        <Button
          className="readmore-btn"
          variant="success"
          onClick={() => handleClick(blog._id)}
        >
          Read More
        </Button>

        <small className="text-muted">
          <span className="text-muted">
            <p>
              Posted:<Moment fromNow>{blog.createdAt}</Moment>
            </p>
          </span>
        </small> */}
      <Card onClick={() => handleClick(blog._id)} className="blog-card">
        <Row className="blog-row">
          <Col>
            <div className="blog-div">
              <img
                className="blog-img"
                variant="top"
                src={blog?.blogImage ? blog.blogImage : "holder.js/300px160"}
                alt="blog-img"
              />
            </div>
          </Col>
          <Col className="blog-content-div">
            <Card.Title className="blog-title">{blog.title}</Card.Title>

            <Card.Text className="blog-content">
              <p>
                {" "}
                {blog?.content?.length <= 150 && blog.content !== undefined
                  ? blog.content
                  : blog.content.slice(0, 150) + "..."}
              </p>
            </Card.Text>
            <Button
              className="btn readmore-btn"
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
  );
};

export default BlogCard;
