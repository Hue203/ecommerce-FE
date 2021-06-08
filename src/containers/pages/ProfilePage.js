import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  Row,
  Col,
  Button,
  Form,
  ButtonGroup,
  Tab,
  Nav,
  Card,
  Container,
  Table,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { authActions } from "../../redux/actions/auth.actions";
import { ClipLoader } from "react-spinners";
import ModalOrderPage from "../../components/ModalOrderPage";
import { orderActions } from "../../redux/actions/order.actions";
import FooterPublic from "../../components/FooterPublic";

const ProfilePage = () => {
  const currentUser = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.auth.loading);
  const loadingOrder = useSelector((state) => state.order.loading);
  const currentUserOrder = useSelector((state) => state.order.orders);
  const [editable, setEditable] = useState(false);
  const [formData, setFormData] = useState({
    name: currentUser && currentUser.name,
    email: currentUser && currentUser.email,
    avatarUrl: currentUser && currentUser.avatarUrl,
  });
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  console.log(formData);
  console.log(currentUser);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, avatarUrl } = formData;
    dispatch(authActions.updateProfile(name, avatarUrl));
    setEditable(false);
  };

  const handleCancel = () => {
    setEditable(false);
  };

  const handleOnClick = (orderId) => {
    setShowModal(true);
    dispatch(orderActions.getSingleOrder(orderId));
    // history.push(`/orders/${id}`);
  };

  useEffect(() => {
    if (currentUser) {
      setFormData({
        name: currentUser && currentUser.name,
        email: currentUser && currentUser.email,
        avatarUrl: currentUser && currentUser.avatarUrl,
      });
    }
  }, [currentUser]);

  useEffect(() => {
    dispatch(authActions.getCurrentUser());
    dispatch(orderActions.getCurrentUserOrder());
  }, [dispatch]);
  const uploadWidget = () => {
    window.cloudinary.openUploadWidget(
      {
        cloud_name: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
        upload_preset: process.env.REACT_APP_CLOUDINARY_PRESET,
        tags: ["userAvatar"],
      },
      function (error, result) {
        if (!error) {
          console.log("resultimgblog", result);
          if (result.event === "success") {
            setFormData({ ...formData, avatarUrl: result.info.url });
          }
        } else {
          console.log(error);
        }
      }
    );
  };

  return (
    <>
      <div className="profile-container ">
        <div className="container">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav className="flex-column nav-custom">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Profile User</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Orders</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row>
                      <Col md={{ span: 8, offset: 2 }} className="accountInfo">
                        {loading ? (
                          <div className="d-flex justify-content-center align-items-center">
                            <ClipLoader
                              color="#f86c6b"
                              size={150}
                              loading={true}
                            />
                          </div>
                        ) : (
                          currentUser !== undefined && (
                            <Form onSubmit={handleSubmit}>
                              <Form.Group>
                                <div className="text-center">
                                  <div className="mb-3">
                                    <img
                                      src={formData.avatarUrl}
                                      className="avatar-lg"
                                      alt="avatar"
                                      style={{ width: "5rem" }}
                                    />
                                  </div>

                                  <br />
                                  <Button
                                    variant="success"
                                    onClick={uploadWidget}
                                    disabled={!editable}
                                  >
                                    Edit avatar
                                  </Button>
                                </div>
                                <br />
                              </Form.Group>
                              <Form.Group as={Row}>
                                <Form.Label
                                  column
                                  sm="2"
                                  className="profile-label"
                                >
                                  Name
                                </Form.Label>
                                <Col>
                                  <Form.Control
                                    type="text"
                                    required
                                    placeholder="Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    disabled={!editable}
                                  />
                                </Col>
                              </Form.Group>
                              <br />
                              <Form.Group as={Row}>
                                <Form.Label
                                  column
                                  sm="2"
                                  className="profile-label"
                                >
                                  Email
                                </Form.Label>
                                <Col>
                                  <Form.Control
                                    type="email"
                                    required
                                    placeholder="Email"
                                    name="email"
                                    value={formData.email}
                                    disabled={true}
                                  />
                                </Col>
                              </Form.Group>

                              <br />
                              <Row>
                                {editable && (
                                  <ButtonGroup className="d-flex mb-3 justify-content-center">
                                    {loading ? (
                                      <Button
                                        className="mr-3"
                                        variant="success"
                                        type="button"
                                        disabled
                                      >
                                        <span
                                          className="spinner-border spinner-border-sm"
                                          role="status"
                                          aria-hidden="true"
                                        ></span>
                                        Submitting...
                                      </Button>
                                    ) : (
                                      <div className="submit-button">
                                        <Button
                                          className="mr-3"
                                          type="submit"
                                          variant="success"
                                        >
                                          Submit
                                        </Button>
                                      </div>
                                    )}
                                    <div>
                                      <Button
                                        variant="danger"
                                        onClick={handleCancel}
                                        disabled={loading}
                                      >
                                        Cancel
                                      </Button>
                                    </div>
                                  </ButtonGroup>
                                )}
                              </Row>
                              <Row>
                                <Button
                                  className="edit-btn"
                                  variant="success"
                                  onClick={() => setEditable(true)}
                                >
                                  <FontAwesomeIcon icon="edit" size="1x" /> Edit
                                </Button>
                              </Row>
                            </Form>
                          )
                        )}
                      </Col>
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <div>
                      <h1>Order History</h1>
                      {loadingOrder ? (
                        <div className="text-center">
                          <ClipLoader
                            color="#f86c6b"
                            size={150}
                            loading={loadingOrder}
                          />
                        </div>
                      ) : (
                        <Table className="cart-table">
                          <thead>
                            <tr>
                              <th>ID</th>
                              <th>DATE</th>
                              <th>TOTAL</th>
                              <th>PAID</th>
                              <th>DELIVERED</th>
                              <th>ACTIONS</th>
                            </tr>
                          </thead>
                          <tbody>
                            {currentUserOrder !== undefined &&
                              currentUserOrder !== {} &&
                              currentUserOrder?.map((order) => (
                                <tr key={order._id}>
                                  <td>{`#${order?._id}`}</td>
                                  <td>{order?.createdAt.substring(0, 10)}</td>
                                  <td>{order?.totalPrice?.toFixed(2)}</td>
                                  <td>
                                    {order.statusOrder
                                      ? order.statusOrder.substring(0, 10)
                                      : "No"}
                                  </td>
                                  <td>
                                    {order.statusOrder === "Delivery"
                                      ? order.statusOrder.substring(0, 10)
                                      : "No"}
                                  </td>
                                  <td>
                                    <Button
                                      type="button"
                                      variant="success"
                                      onClick={() => {
                                        handleOnClick(order._id);
                                      }}
                                    >
                                      Details
                                    </Button>
                                  </td>
                                </tr>
                              ))}
                          </tbody>
                        </Table>
                      )}

                      <ModalOrderPage
                        showModal={showModal}
                        setShowModal={setShowModal}
                      />
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </div>
      <FooterPublic />
    </>
  );
};

export default ProfilePage;
