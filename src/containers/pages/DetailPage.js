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

import { userActions } from "../../redux/actions/user.actions";

const DetailPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const singleProduct = useSelector((state) => state.product.selectedProduct);

  const loading = useSelector((state) => state.product.loading);
  const history = useHistory();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const submitLoading = useSelector((state) => state.product.submitLoading);
  const [reviewText, setReviewText] = useState("");
  const [addQuantity, setAddQuantity] = useState(1);

  const reviewList = useSelector((state) => state.review.reviews);

  useEffect(() => {
    if (params?.id) {
      dispatch(productActions.getSingleProduct(params.id));
    }
  }, [dispatch, params]);

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
  const handleChangeQuantity = (e) => {
    setAddQuantity(e.target.value);
  };
  const handleAddToCart = () => {
    dispatch(
      userActions.addCartRequest({
        productId: params.id,
        quantity: addQuantity,
      })
    );
  };

  return (
    <>
      <Container className="product-container-detail">
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
                          Status:{" "}
                          {singleProduct.quantity > 0
                            ? "In Stock"
                            : "Unavailable."}
                        </ul>

                        <ul>
                          Quantity:{" "}
                          <select
                            type="number"
                            name="quantity"
                            value={addQuantity}
                            onChange={handleChangeQuantity}
                          >
                            {[...Array(singleProduct.quantity).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </select>
                        </ul>
                      </div>

                      <ul>
                        {singleProduct.quantity > 0 && (
                          <Button
                            variant="success"
                            onClick={handleAddToCart}
                            className="button primary"
                          >
                            Add to Cart
                          </Button>
                        )}
                      </ul>

                      <div>
                        <ul>{<p>{`Price: $ ${singleProduct.price}`}</p>}</ul>
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
