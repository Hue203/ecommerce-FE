import React from "react";

import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { orderActions } from "../redux/actions/order.actions";
const ModalDeleteOrder = ({ showDeleted, setShowDelete }) => {
  const handleClose = () => setShowDelete(false);
  const selectedOrder = useSelector((state) => state.product.selectedOrder);
  let dispatch = useDispatch();
  const handleDelete = async () => {
    dispatch(orderActions.updateProduct(selectedOrder._id));
    handleClose();
  };

  return (
    <Modal show={showDeleted} onHide={handleClose}>
      <Modal.Header className="modal_head">
        <Modal.Title>Do you wish to delete this Order?</Modal.Title>
      </Modal.Header>

      <Modal.Body className="delete_product_form ">
        <Button
          variant="danger"
          type="submit"
          className="delete_product_btn"
          onClick={handleDelete}
        >
          Delete
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default ModalDeleteOrder;
