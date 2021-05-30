import React, { useEffect, useState } from "react";
import { Container, Row, Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ModalEditProduct from "../../components/ModalEditProduct";
import { productActions } from "../../redux/actions/product.actions";
import ModalAddProduct from "../../components/ModalAddProduct";
import ModalDeleteProduct from "../../components/ModalDeleteProduct";
import { ClipLoader } from "react-spinners";

const ProductsAdmin = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showDeleted, setshowDeleted] = useState(false);
  const loading = useSelector((state) => state.product.loading);
  const products = useSelector((state) => state.product.products);
  console.log("products", products);

  const dispatch = useDispatch();

  const handleOnclickAdd = () => {
    setShowModal(true);
  };

  const handleOnclickEdit = (productId) => {
    setShowModalEdit(true);
    dispatch(productActions.getSingleProduct(productId));
  };

  const handleOnclickDelete = (productId) => {
    setshowDeleted(true);
    dispatch(productActions.deleteProduct(productId));
  };
  useEffect(() => {
    dispatch(productActions.productsRequest());
  }, []);

  return (
    <>
      {loading ? (
        <div className="text-center">
          <ClipLoader color="#f86c6b" size={150} loading={loading} />
        </div>
      ) : (
        <Container fluid>
          <Row>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Ingredients</th>
                  <th>Description</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Images</th>
                  <th>Service</th>
                  <th>Catagories</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products &&
                  products.map((item) => (
                    <tr key={item._id}>
                      <td>{item.name}</td>
                      <td>{item.ingredients}</td>
                      <td>{item.description}</td>
                      <td>{item.quantity}</td>
                      <td>{item.price}</td>
                      <td>
                        <img
                          src={item.images[0].imageUrl}
                          alt="product-img"
                          width="90px"
                          height="60px"
                        />
                      </td>
                      <td>{item.service}</td>
                      <td>{item.catagories}</td>
                      <th>
                        <span>
                          <Button onClick={() => handleOnclickEdit(item._id)}>
                            EDIT
                          </Button>
                        </span>
                        <span>
                          <Button onClick={() => handleOnclickDelete(item._id)}>
                            DELETE
                          </Button>
                        </span>
                      </th>{" "}
                    </tr>
                  ))}
              </tbody>

              <span>
                {" "}
                <Button onClick={handleOnclickAdd}>ADD</Button>
              </span>
            </Table>
          </Row>
          <ModalAddProduct showModal={showModal} setShowModal={setShowModal} />
          <ModalEditProduct
            showModal={showModalEdit}
            setShowModal={setShowModalEdit}
          />
          <ModalDeleteProduct
            showDeleted={showDeleted}
            setShowDelete={setshowDeleted}
          />
        </Container>
      )}
    </>
  );
};

export default ProductsAdmin;
