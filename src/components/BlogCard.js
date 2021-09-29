import React from "react";
import { Button } from "react-bootstrap";

import Moment from "react-moment";

const BlogCard = ({ blog, handleClick }) => {
  return (
    <div onClick={() => handleClick(blog._id)} className="blog-card">
      <div className="blog-div">
        <img
          className="blog-img"
          variant="top"
          src={blog?.blogImage ? blog.blogImage : "holder.js/300px160"}
          alt="blog-img"
        />
      </div>

      <div className="blog-title">{blog.title}</div>

      <div className="blog-content">
        <p>
          {" "}
          {blog?.content?.length <= 150 && blog.content !== undefined
            ? blog.content
            : blog.content.slice(0, 150) + "..."}
        </p>

        <small className="text-muted">
          Posted<Moment fromNow>{blog.createdAt}</Moment>
        </small>
      </div>
      <Button
        className="btn readmore-btn"
        variant="success"
        onClick={() => handleClick(blog._id)}
      >
        Read More
      </Button>
    </div>
  );
};

export default BlogCard;
