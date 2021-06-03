import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { userActions } from "../../redux/actions/user.actions";
import { useHistory } from "react-router-dom";
import {
  Container,
  Table,
  Row,
  Col,
  Card,
  Button,
  Form,
} from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import { orderActions } from "../../redux/actions/order.actions";
import FooterPublic from "../../components/FooterPublic";

const CartPage = () => {
  const loading = useSelector((state) => state.user.loading);
  const selectedUser = useSelector((state) => state.user.selectedUser);

  const dispatch = useDispatch();
  const history = useHistory();

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    address1: "",
    address2: "",
    phone: "",
    city: "",
    paymentMethod: "",
  });
  const [errors, setErrors] = useState({
    fullname: "",
    email: "",
    address1: "",
    phone: "",
    city: "",
  });

  let totalAmount;

  if (selectedUser) {
    totalAmount = selectedUser.cart?.reduce((total, currentElement) => {
      return (
        total +
        parseInt(currentElement.productId.price) *
          parseInt(currentElement.quantity)
      );
    }, 0);
  }

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userActions.updateBillingAddress(formData));
    dispatch(orderActions.createOrder(totalAmount));
    history.push(`/orders/thankyou`);
  };

  useEffect(() => {
    dispatch(userActions.getCartRequest());
  }, [dispatch]);
  // const checkoutHandler = (e) => {
  //   history.push(`/shipping`);
  // };

  useEffect(() => {
    if (selectedUser) {
      setFormData((formData) => ({
        ...formData,
        fullname: selectedUser.fullname,
        address1: selectedUser.address1,
        address2: selectedUser.address2,
        phone: selectedUser.phone,
        city: selectedUser.city,
      }));
    }
  }, [selectedUser, dispatch]);

  return (
    <section className="cart-page-sections">
      <Container className="cart-page">
        {loading ? (
          <div className="text-center">
            <ClipLoader color="#FFD700" size={150} loading={loading} />
          </div>
        ) : (
          <section className="cart-part">
            <h2>{`SHOPPING CART `}</h2>

            <Container fluid>
              {selectedUser && (
                <Row>
                  <Col>
                    <Row>
                      <Table className="cart-table" striped bordered hover>
                        <thead>
                          <tr className="cart-table">
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                          </tr>
                        </thead>
                        <tbody>
                          {selectedUser.cart?.length ? (
                            <>
                              {selectedUser.cart.map((product) => (
                                <tr key={product._id}>
                                  <td>{product.productId.name}</td>
                                  <td>{`$ ${product.productId.price}`}</td>
                                  <td>{product.quantity}</td>
                                </tr>
                              ))}
                            </>
                          ) : (
                            <p>There are no Products in cart</p>
                          )}
                        </tbody>
                      </Table>
                    </Row>
                  </Col>

                  <Col>
                    <Card>
                      <Card.Body>
                        <Row>
                          <Col>Provisional</Col>
                          <Col>{`$ ${totalAmount}`}</Col>
                        </Row>
                        <Row>
                          <Col>Discount</Col>
                          <Col>0%</Col>
                        </Row>
                        <Row>
                          <Col>Total</Col>
                          <Col>{`$ ${totalAmount}`}</Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              )}
            </Container>
          </section>
        )}

        <Container>
          <Card className="shipping-detail">
            <Card.Title className="shipping-cart">Shipping Detail</Card.Title>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Row>
                <Form.Group>
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="1234 Nguyen Van Linh, dist 7"
                    name="address1"
                    value={formData.address1}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Address 2</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Apart,floor,.."
                    name="address2"
                    value={formData.address2}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Phone Number </Form.Label>
                  <Form.Control
                    placeholder="Phone Number"
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>City </Form.Label>
                  <Form.Control
                    placeholder="Ho Chi Minh City"
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form>
                  <Form.Label>Payment Method</Form.Label>
                  <Form.Check
                    type="radio"
                    label="COD"
                    defaultChecked
                    name="paymentMethod"
                  ></Form.Check>
                </Form>
                <p>Shipping Fee : 0</p>

                {loading ? (
                  <Button
                    className="btn-block"
                    variant="success"
                    type="button"
                    disabled
                  >
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Loading...
                  </Button>
                ) : (
                  <Button
                    className="btn-Continue"
                    type="submit"
                    variant="success"
                  >
                    Continue
                  </Button>
                )}
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </Container>
      <FooterPublic />
    </section>
  );
};

export default CartPage;
