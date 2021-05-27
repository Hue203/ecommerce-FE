import React, { useState, useEffect } from "react";
import { Modal, Col, Row, Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../redux/actions/product.actions";

const ModalEditProduct = ({ showModal, setShowModal }) => {
  const handleClose = () => setShowModal(false);

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.product.loading);
  const selectedProduct = useSelector((state) => state.product.selectedProduct);

  const [formData, setFormData] = useState({
    name: "",
    catagories: "fresh",
    ingredients: "",
    description: "",
    price: 1,
    quantity: 1,
    images: [],
    service: "fixed-drink",
  });

  useEffect(() => {
    if (selectedProduct) {
      setFormData((formData) => ({
        ...formData,
        name: selectedProduct.name,
        catagories: selectedProduct.catagories,
        ingredients: selectedProduct.ingredients,
        description: selectedProduct.description,
        price: selectedProduct.price,
        quantity: selectedProduct.quantity,
        images: selectedProduct.images,
        service: selectedProduct.service,
      }));
    }
  }, [selectedProduct, dispatch]);

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
    dispatch(productActions.updateProduct(selectedProduct._id, formData));
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
      <Modal show={showModal} onHide={handleClose}>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col>
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Col>
              <Col>
                <Form.Label>Ingredients</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="ingredients"
                  value={formData.ingredients}
                  onChange={handleChange}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </Col>
              <Col>
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  required
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                />
              </Col>
              <Col>
                <Form.Label>Price</Form.Label>
                <Form.Control
                  required
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label>Service Type</Form.Label>
                <Form.Control
                  required
                  as="select"
                  name="service"
                  onChange={handleChange}
                >
                  <option>fixed-drink</option>
                  <option>make-your-own</option>
                </Form.Control>
              </Col>
              <Col>
                <Form.Label>Catagories</Form.Label>
                <Form.Control
                  required
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
            <Button
              variant="primary"
              type="submit"
              disabled={
                !(
                  formData.name &&
                  formData.ingredients &&
                  formData.description &&
                  formData.quantity &&
                  formData.price &&
                  formData.images &&
                  formData.service &&
                  formData.catagories
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

export default ModalEditProduct;
