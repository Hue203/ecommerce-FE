import React, { useState } from "react";
import { Modal, Col, Row, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { cycleActions } from "../redux/actions/cycle.action";

const ModalAddCycle = ({ showModalCycle, setShowModalCycle }) => {
  const handleClose = () => setShowModalCycle(false);

  const [formData, setFormData] = useState({
    cycleName: "",
    price: 1,
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(cycleActions.createCycle(formData));
    handleClose();
  };

  return (
    <div>
      <Modal show={showModalCycle} onHide={handleClose}>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Add Cycle</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col>
                <Form.Label>Cycle Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="cycleName"
                  value={formData.cycleName}
                  onChange={handleChange}
                ></Form.Control>
              </Col>
              <Col>
                <Form.Label>Price</Form.Label>
                <Form.Control
                  required
                  type="number"
                  name="price"
                  onChange={handleChange}
                />
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" type="submit" className="add_product_btn">
              Save
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default ModalAddCycle;
