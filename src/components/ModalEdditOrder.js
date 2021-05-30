import React, { useState, useEffect } from "react";
import { Modal, Col, Row, Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../redux/actions/product.actions";

const ModalEdditOrder = ({ showModal, setShowModal }) => {
  const handleClose = () => setShowModal(false);

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.order.loading);
  const selectedOrder = useSelector((state) => state.product.selectedOrder);

  const [formData, setFormData] = useState({
    productList: [],
    statusOrder: "",
    shippingFee: 0,
    totalPrice: 0,
    discount: 0,
    totalProduct: 0,
  });

  useEffect(() => {
    if (selectedOrder) {
      setFormData((formData) => ({
        ...formData,
        productList: selectedOrder.productList,
        statusOrder: selectedOrder.statusOrder,
        shippingFee: selectedOrder.shippingFee,
        totalPrice: selectedOrder.totalPrice,
        discount: selectedOrder.discount,
        totalProduct: selectedOrder.totalProduct,
      }));
    }
  }, [selectedOrder, dispatch]);

  const handleChange = (e) => {
    if (e.target.name === "images") {
      console.log(e.target.files);
      setFormData({ ...formData, images: e.target.files });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(productActions.updateProduct(selectedOrder._id, formData));
    handleClose();
  };

  return (
    <div>
      <Modal show={showModal} onHide={handleClose}>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Order</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col>
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.productList.map(
                    (product) => product.productId.name
                  )}
                  onChange={handleChange}
                />
              </Col>
              <Col>
                <Form.Label>Status Order</Form.Label>
                <Form.Control
                  type="text"
                  as="select"
                  name="statusOrder"
                  value={formData.statusOrder}
                  onChange={handleChange}
                >
                  <option>Pending</option>
                  <option>Cancel</option>
                  <option>Delivery</option>
                  <option>Paid</option>
                </Form.Control>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label>Shipping Fee</Form.Label>
                <Form.Control
                  type="text"
                  name="shippingFee"
                  value={formData.shippingFee}
                  onChange={handleChange}
                />
              </Col>
              <Col>
                <Form.Label>Amount</Form.Label>
                <Form.Control
                  type="number"
                  name="totalPrice"
                  value={formData.totalPrice}
                  onChange={handleChange}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  name="totalProduct"
                  onChange={handleChange}
                  value={formData.totalProduct}
                ></Form.Control>
              </Col>
              <Col>
                <Form.Label>Catagories</Form.Label>
                <Form.Control
                  as="select"
                  name="catagories"
                  value={formData.catagories}
                  onChange={handleChange}
                >
                  <option>fresh</option>
                  <option>dried</option>
                  <option>cereal</option>
                </Form.Control>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              type="submit"
              disabled={
                !(
                  formData.name ||
                  (formData.ingredients &&
                    formData.description &&
                    formData.quantity &&
                    formData.price &&
                    formData.images &&
                    formData.service &&
                    formData.catagories)
                )
              }
              className="add_product_btn"
            >
              Save
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default ModalEdditOrder;
