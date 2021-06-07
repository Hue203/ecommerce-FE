import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import BlogCard from "../../components/BlogCard";
import { Row, Col, Container } from "react-bootstrap";
import { blogActions } from "../../redux/actions/blog.action";
import BeforeAfter from "../../components/BeforeAfter";
import { ClipLoader } from "react-spinners";
import PaginationBar from "../../components/PaginationBar";
import CardTest from "../../components/CartTest";
import FooterPublic from "../../components/FooterPublic";
const BlogPage = () => {
  const [pageNum, setPageNum] = useState(1);
  const loading = useSelector((state) => state.product.loading);
  const blogs = useSelector((state) => state.blog.blogs);
  const totalPageNum = useSelector((state) => state.package.totalPageNum);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(blogActions.blogsRequest(pageNum));
  }, [dispatch, pageNum]);

  const handleClickOnBlog = (id) => {
    history.push(`/blogs/${id}`);
  };
  return (
    <>
      <Container>
        {loading ? (
          <div className="text-center">
            <ClipLoader color="#f86c6b" size={150} loading={loading} />
          </div>
        ) : (
          <div>
            <BeforeAfter className="beforeafteCompo" />
            <Container className="blog-box">
              {blogs?.length ? (
                <>
                  {blogs.map((blog) => (
                    <BlogCard
                      blog={blog}
                      handleClick={handleClickOnBlog}
                      key={blog._id}
                    />
                  ))}
                </>
              ) : (
                <p>There are no Blog</p>
              )}
            </Container>
          </div>
        )}

        <PaginationBar
          pageNum={pageNum}
          setPageNum={setPageNum}
          totalPageNum={totalPageNum}
          loading={loading}
        />
      </Container>
      <FooterPublic />
    </>
  );
};

export default BlogPage;
