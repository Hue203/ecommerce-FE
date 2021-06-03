import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Container } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { blogActions } from "../../redux/actions/blog.action";
import SearchItem from "../../components/SearchItem";
import Moment from "react-moment";
import FooterPublic from "../../components/FooterPublic";

const BlogDetailPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const singleBlog = useSelector((state) => state.blog.selectedBlog);
  const loading = useSelector((state) => state.blog.loading);
  const history = useHistory();

  useEffect(() => {
    if (params?.id) {
      dispatch(blogActions.getSingleBlog(params.id));
    }
  }, [dispatch, params]);

  return (
    <>
      <Container>
        <Row>
          <Col>
            {loading ? (
              <div className="text-center">
                <ClipLoader color="#FFD700" size={150} loading={loading} />
              </div>
            ) : (
              <>
                {singleBlog && (
                  <Card>
                    <Row>
                      <Col>
                        <div data-toggle="tooltip">
                          <img
                            className="blog-img-single"
                            src={singleBlog.blogImage}
                            alt="product-img"
                          />
                        </div>
                      </Col>
                      <Card.Body>
                        <Col>
                          <div className="content">
                            <ul>{<h3>{singleBlog.title}</h3>}</ul>

                            <div>
                              <ul>
                                <p>{singleBlog.content}</p>
                              </ul>
                            </div>
                          </div>
                        </Col>
                      </Card.Body>
                    </Row>
                    <Card.Title>
                      <small className="posted-blog">
                        Posted <Moment fromNow>{singleBlog.createdAt}</Moment>
                      </small>
                    </Card.Title>
                  </Card>
                )}
              </>
            )}
          </Col>
        </Row>
      </Container>
      <FooterPublic />
    </>
  );
};

export default BlogDetailPage;
