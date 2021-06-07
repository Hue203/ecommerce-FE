import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../redux/actions/product.actions";
const ModalDeleteProduct = ({ showDeleted, setShowDelete }) => {
  const handleClose = () => setShowDelete(false);
  const selectedProduct = useSelector((state) => state.product.selectedProduct);
  const dispatch = useDispatch();
  const handleDelete = async () => {
    dispatch(productActions.deleteProduct(selectedProduct._id));
    handleClose();
  };

  return (
    <Modal show={showDeleted} onHide={handleClose}>
      <Modal.Header className="modal_head">
        <Modal.Title>Do you wish to delete this product?</Modal.Title>
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

export default ModalDeleteProduct;
