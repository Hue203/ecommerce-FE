import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../redux/actions/product.actions";
import { Button, Card } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import { Col, Row, Container, Tabs, Tab } from "react-bootstrap";
import ReviewForm from "../../components/ReviewForm";
import SearchItem from "../../components/SearchItem";
import ReviewList from "../../components/ReviewList";
import SliderProductPage from "../../components/SliderProductPage";
import ProductCard from "../../components/ProductCard";
import { userActions } from "../../redux/actions/user.actions";
import StarRatings from "react-star-ratings";

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
  const [searchInput, setSearchInput] = useState("");
  const [sortBy, setSortBy] = useState({ key: "", ascending: -1 });
  const [query, setQuery] = useState("");
  const product = useSelector((state) => state.product.selectedProduct);
  const loadingAll = useSelector((state) => state.product.loading);
  const products = useSelector((state) => state.product.products);
  const reviewList = useSelector((state) => state.review.reviews);

  useEffect(() => {
    if (params?.id) {
      dispatch(productActions.getSingleProduct(params.id));
    }
    dispatch(productActions.productsRequest(query));
  }, [dispatch, params, query]);

  // const handleInputChangeSearch = (e) => {
  //   setSearchInput(e.target.value);
  // };
  const handleClickOnProduct = (id) => {
    history.push(`/products/${id}`);
  };

  // const handleSubmitSearch = (e) => {
  //   e.preventDefault();
  //   setQuery(searchInput);
  // };
  const handleInputChange = (e) => {
    setReviewText(e.target.value);
  };
  const handleSubmitReview = (e) => {
    e.preventDefault();
    dispatch(productActions.createReview(singleProduct._id, reviewText));
    setReviewText("");
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
  useEffect(() => {
    if (params?.id) {
      dispatch(productActions.getSingleProduct(params.id));
    }
  }, [dispatch, params]);

  return (
    <>
      <SliderProductPage />
      <Container className="product-detail-page">
        {loading ? (
          <div className="text-center">
            <ClipLoader color="#FFD700" size={150} loading={loading} />
          </div>
        ) : (
          <>
            <Row>
              {/* <Col className="product-catagories">
                <Card>
                  <Row>
                    <h5>Product categories</h5>
                    <br />
                    <Nav>
                      <NavDropdown.Item as={Link} to="/products">
                        Fresh Detox Juice
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        Detox Tea
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">
                        Mixed Cereals
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item as={Link} to="/packages">
                        Regular Drink
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item as={Link} to="/blogs">
                        Blogs
                      </NavDropdown.Item>
                    </Nav>
                  </Row>
                </Card>
                <Row>
                 
                </Row>
              </Col> */}

              <Col xs={10}>
                {singleProduct && (
                  <>
                    <Row>
                      <Col>
                        <div
                          className="product-card-detail "
                          data-toggle="tooltip"
                        >
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
                                  <h1>{singleProduct.name}</h1>
                                </strong>
                              }
                            </ul>
                          </div>
                          <ul>
                            {" "}
                            <StarRatings
                              rating={4.5}
                              starRatedColor="gold"
                              numberOfStars={5}
                              name="rating"
                            />
                          </ul>

                          <div>
                            <ul>
                              <p>{` £${singleProduct.price} only`}</p>
                            </ul>
                          </div>
                          <div>
                            <ul>
                              {singleProduct.quantity > 0
                                ? "In Stock"
                                : "Unavailable."}
                            </ul>

                            <ul>
                              <h5>Quantity</h5>
                              <select
                                className="quantity-slect"
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
                                class="andro_btn-custom"
                              >
                                Add to Cart
                              </Button>
                            )}
                          </ul>
                        </div>
                        <div>
                          <ul>
                            <span>Ingredients:</span>
                            <br />
                            <p>{singleProduct.ingredients}</p>
                          </ul>
                        </div>
                      </Col>
                    </Row>
                    <div>
                      <Tabs
                        defaultActiveKey="description"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                      >
                        <Tab eventKey="description" title="Description">
                          <Card className="description-card">
                            <Card.Title>
                              <h3 className="singleProduct-name">
                                {singleProduct.name}
                              </h3>
                            </Card.Title>
                            <Card.Body>
                              <p>{singleProduct.description}</p>{" "}
                            </Card.Body>
                          </Card>
                        </Tab>
                        <Tab eventKey="review" title="Review">
                          <Card className="reviewlist">
                            <Card.Title>
                              <h5 className="singleProduct-name">
                                What's people say:{" "}
                              </h5>
                            </Card.Title>
                            <Card.Body>
                              <div>
                                <ReviewList reviews={singleProduct.reviews} />
                              </div>
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
                            </Card.Body>
                          </Card>
                        </Tab>
                      </Tabs>
                    </div>
                  </>
                )}
              </Col>
            </Row>
            <Container className="relatedProduct-container">
              <Card>
                <br />
                <Card.Title className="relatedproduct-title">
                  Related Product
                </Card.Title>
                <Card.Body>
                  {loadingAll ? (
                    <div className="text-center">
                      <ClipLoader
                        color="#f86c6b"
                        size={150}
                        loading={loading}
                      />
                    </div>
                  ) : (
                    <>
                      <section>
                        <Container className="productContainer">
                          {products?.length ? (
                            <div className="product-card">
                              {products.map((product) => (
                                <ProductCard
                                  product={product}
                                  key={product._id}
                                  handleClick={handleClickOnProduct}
                                />
                              ))}
                            </div>
                          ) : (
                            <p>There are no Products</p>
                          )}
                        </Container>
                      </section>
                    </>
                  )}
                </Card.Body>
              </Card>
            </Container>
          </>
        )}
      </Container>
    </>
  );
};

export default DetailPage;
