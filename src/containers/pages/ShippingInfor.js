import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button, Card, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { userActions } from "../../redux/actions/user.actions";
import { orderActions } from "../../redux/actions/order.actions";

const ShippingInfor = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    address1: "",
    address2: "",
    phone: "",
    city: "",
    paymentMethod: "COD",
    shippingFee: 0,
  });
  const [errors, setErrors] = useState({
    fullname: "",
    email: "",
    address1: "",
    phone: "",
    city: "",
  });
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.user.loading);
  const selectedUser = useSelector((state) => state.user.selectedUser);
  const history = useHistory();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  console.log(setFormData);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userActions.updateBillingAddress(formData));
    // dispatch(orderActions.createOrder());
    history.push("/orders/review");
  };

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
    <Container>
      <Card>
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

            {loading ? (
              <Button
                className="btn-block"
                variant="primary"
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
              <Button className="btn-block" type="submit" variant="primary">
                Continue
              </Button>
            )}
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ShippingInfor;
