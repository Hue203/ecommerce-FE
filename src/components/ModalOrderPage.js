import React, { useEffect } from "react";
import { Modal, Col, Row, Form, Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { orderActions } from "../redux/actions/order.actions";
import { ClipLoader } from "react-spinners";
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
          {loading ? (
            <div className="text-center">
              <ClipLoader color="#f86c6b" size={150} loading={loading} />
            </div>
          ) : (
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
              <Col>{`Amount: $${selectedOrder.totalPrice}`}</Col>
            </Table>
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
