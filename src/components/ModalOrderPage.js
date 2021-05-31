import React, { useEffect } from "react";
import { Modal, Col, Row, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { orderActions } from "../redux/actions/order.actions";

const ModalOrderPage = ({ showModal, setShowModal, product }) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.order.loading);
  const selectedOrder = useSelector((state) => state.order.selectedOrder);

  const handleClose = () => setShowModal(false);
  return (
    <div>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={showModal}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Order Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedOrder !== undefined && selectedOrder && (
            <>
              <Col>Product </Col>
              {product.productList.map((product) => {
                <h1>{product.productId.name}</h1>;
              })}

              <Col>Price </Col>
              <Col>Quantity</Col>
              <Col>Discount</Col>
              <Col>Amount</Col>
              <Row>
                <Col>Total</Col>
              </Row>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalOrderPage;
