import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Button, Card } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import { Col, Row } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { blogActions } from "../../redux/actions/blog.action";

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

  const handleGoBackClick = (e) => {
    history.goBack();
  };

  return (
    <>
      <div className="d-flex justify-content-between">
        <Button onClick={handleGoBackClick}>
          <FontAwesomeIcon icon="chevron-left" size="1x" /> Back
        </Button>
      </div>
      {loading ? (
        <div className="text-center">
          <ClipLoader color="#FFD700" size={150} loading={loading} />
        </div>
      ) : (
        <>
          {singleBlog && (
            <Card className="product-card">
              <Row>
                <Col>
                  <div data-toggle="tooltip">
                    <img
                      src={singleBlog.blogImage}
                      alt="product-img"
                      className="re-size-img-single"
                    />
                  </div>
                </Col>
                <Col>
                  <div className="content">
                    <div>
                      <ul>
                        {
                          <strong>
                            <p>
                              <h1>{singleBlog.title}</h1>
                            </p>
                          </strong>
                        }
                      </ul>
                    </div>
                    <div>
                      <ul>
                        {
                          <strong>
                            <h5>{`Ingredients: ${singleBlog.content}`}</h5>
                          </strong>
                        }
                      </ul>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card>
          )}
        </>
      )}
    </>
  );
};

export default BlogDetailPage;
