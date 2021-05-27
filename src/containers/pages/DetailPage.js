import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../redux/actions/product.actions";
import { reviewActions } from "../../redux/actions/review.action";
import { Button } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import { Col, Row, Container } from "react-bootstrap";
import ReviewForm from "../../components/ReviewForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReviewList from "../../components/ReviewList";

const DetailPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const singleProduct = useSelector((state) => state.product.selectedProduct);
  const loading = useSelector((state) => state.product.loading);
  const history = useHistory();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const submitLoading = useSelector((state) => state.product.submitLoading);
  const [reviewText, setReviewText] = useState("");
  const reviewList = useSelector((state) => state.review.reviews);
  const reviewLoading = useSelector((state) => state.review.loading);

  useEffect(() => {
    if (params?.id) {
      dispatch(productActions.getSingleProduct(params.id));
      // dispatch(reviewActions.reviewsRequest(params.id));
    }
  }, [dispatch, params]);

  const handleGoBackClick = (e) => {
    history.goBack();
  };
  const handleInputChange = (e) => {
    setReviewText(e.target.value);
  };
  const handleSubmitReview = (e) => {
    e.preventDefault();
    dispatch(productActions.createReview(params.id, reviewText));
    setReviewText("");
  };
  const handleOnClickReview = (id) => {
    history.push(`/reviews/${id}`);
  };
  return (
    <>
      <Container className="product-container-detail">
        {/* <div className="d-flex justify-content-between">
          <Button onClick={handleGoBackClick}>
            <FontAwesomeIcon icon="chevron-left" size="1x" /> Back
          </Button>
        </div> */}
        {loading ? (
          <div className="text-center">
            <ClipLoader color="#FFD700" size={150} loading={loading} />
          </div>
        ) : (
          <>
            {singleProduct && (
              <>
                <Row>
                  <Col>
                    <div className="product-card-detail " data-toggle="tooltip">
                      <img
                        src={singleProduct.images[0].imageUrl}
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
                                <h1>{singleProduct.name}</h1>
                              </p>
                            </strong>
                          }
                        </ul>
                      </div>
                      <div>
                        <ul>
                          {
                            <strong>
                              <h5>{`Quantity: ${singleProduct.quantity}`}</h5>
                            </strong>
                          }
                        </ul>
                      </div>

                      <div>
                        <ul>
                          {<p>{`Price: $ ${singleProduct.price}`}</p>}

                          <Button variant="warning"> Add to Card </Button>
                        </ul>
                      </div>
                      <div>
                        <ul>
                          {
                            <strong>
                              <h5>{`Review : ${singleProduct.reviewsCount} review `}</h5>
                            </strong>
                          }
                        </ul>
                      </div>
                    </div>
                    <div>
                      <ul>
                        {
                          <strong>
                            <h5>{`Ingredients: ${singleProduct.ingredients}`}</h5>
                          </strong>
                        }
                      </ul>
                    </div>

                    <div>
                      <ul>
                        {
                          <strong>
                            <p>
                              <h1>{singleProduct.name}</h1>
                            </p>
                          </strong>
                        }
                      </ul>
                    </div>
                    <div>
                      <ul>
                        {
                          <strong>
                            <h5>{singleProduct.description}</h5>
                          </strong>
                        }
                      </ul>
                    </div>
                  </Col>
                </Row>
              </>
            )}
            <Container className="reviewForm">
              {isAuthenticated && (
                <ReviewForm
                  reviewText={reviewText}
                  handleInputChange={handleInputChange}
                  handleSubmitReview={handleSubmitReview}
                  loading={submitLoading}
                />
              )}
            </Container>
            <Container>
              <>
                {reviewList.map((review) => (
                  <ReviewList
                    review={review}
                    handleClick={handleOnClickReview}
                  />
                ))}
              </>
            </Container>
          </>
        )}
      </Container>
    </>
  );
};

export default DetailPage;
