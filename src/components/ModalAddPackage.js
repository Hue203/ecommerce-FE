import React, { useState } from "react";
import { Modal, Col, Row, Form, Button } from "react-bootstrap";

import { useDispatch } from "react-redux";

import { packageActions } from "../redux/actions/package.action";
const ModalAddPackage = ({ showModal, setShowModal, fullscreen }) => {
  const handleClose = () => setShowModal(false);

  const [formData, setFormData] = useState({
    name: "",
    product1: "",
    product2: "",
    images: [],
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(packageActions.createNewPackage(formData));
    handleClose();
  };
  const uploadWidget = () => {
    window.cloudinary.openUploadWidget(
      {
        cloud_name: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
        upload_preset: process.env.REACT_APP_CLOUDINARY_PRESET,
        multiple: false,
      },
      function (error, result) {
        if (!error) {
          console.log("result", result);
          if (result.event === "success") {
            const arr = formData.images;
            arr.push({ imageUrl: result.info.url });
            setFormData({ ...formData, images: arr });
          }
        } else {
          console.log(error);
        }
      }
    );
  };
  return (
    <div>
      <Modal show={showModal} onHide={handleClose} fullscreen={fullscreen}>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title className="modalTitle">Add Package</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col>
                <Form.Label>Package Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Col>
              <Col>
                <Form.Label>ProductId 1</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="product1"
                  value={formData.product1}
                  onChange={handleChange}
                />
              </Col>
              <Col>
                <Form.Label>ProductId 2</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="product2"
                  value={formData.product2}
                  onChange={handleChange}
                />
              </Col>
            </Row>
            <Row>
              {/* <Col>
                <Form.Label>Delivery Time</Form.Label>
                <Form.Control
                  required
                  as="select"
                  name="deliveryTime"
                  value={formData.deliveryTime}
                  onChange={handleChange}
                >
                  <option>8am</option>
                  <option>10am</option>
                  <option>1pm</option>
                </Form.Control>
              </Col>
              <Col>
                <Form.Label>Date Start</Form.Label>
                <Form.Control
                  required
                  type="date"
                  name="dateStart"
                  value={formData.dateStart}
                  onChange={handleChange}
                />
              </Col> */}
            </Row>
            <Row>
              <Col>
                <Form.Label>Images</Form.Label>
                <Button onClick={() => uploadWidget()}>Upload</Button>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
            <Button variant="success" type="submit" className="add_product_btn">
              Save
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default ModalAddPackage;
