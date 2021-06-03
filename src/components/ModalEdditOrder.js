import React, { useState, useEffect } from "react";
import { Modal, Col, Row, Form, Button, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../redux/actions/product.actions";
import { ClipLoader } from "react-spinners";
import { orderActions } from "../redux/actions/order.actions";

const ModalEdditOrder = ({ showModal, setShowModal }) => {
  const handleClose = () => setShowModal(false);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.order.loading);
  const selectedOrder = useSelector((state) => state.order.selectedOrder);

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

  console.log(formData);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(orderActions.updateOrder(selectedOrder._id, formData));
    handleClose();
  };
  console.log(selectedOrder);
  return (
    <div>
      <Modal show={showModal} onHide={handleClose}>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Order</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Service</th>
                </tr>
              </thead>
              <tbody>
                {selectedOrder?.productList?.map((order) => {
                  return (
                    <tr>
                      <td>{order.productId.name}</td>
                      <td>{order.productId.price}</td>
                      <td>{order.productId.service}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>

            <Row>
              <Col>Status</Col>
              <Col>{selectedOrder.statusOrder}</Col>
              <Col>
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
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit" className="add_product_btn">
              Save
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default ModalEdditOrder;
