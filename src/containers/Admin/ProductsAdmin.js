import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ModalEditProduct from "../../components/ModalEditProduct";
import { productActions } from "../../redux/actions/product.actions";
import ModalAddProduct from "../../components/ModalAddProduct";
import ModalDeleteProduct from "../../components/ModalDeleteProduct";
import { ClipLoader } from "react-spinners";
import PaginationBar from "../../components/PaginationBar";
import HeaderBar from "../../components/HeaderBar";
import SideMenuAdmin from "../../components/SideMenuAdmin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductsAdmin = () => {
  const [searchInput, setSearchInput] = useState("");
  const [sortBy, setSortBy] = useState({ key: "", ascending: -1 });
  const [query, setQuery] = useState("");
  const [pageNum, setPageNum] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showDeleted, setshowDeleted] = useState(false);
  const loading = useSelector((state) => state.product.loading);
  const products = useSelector((state) => state.product.products);
  const totalPageNum = useSelector((state) => state.product.totalPageNum);

  const dispatch = useDispatch();

  const handleSort = (key) => {
    if (!loading) {
      setSortBy((sortBy) => ({
        key,
        ascending: -sortBy.ascending,
      }));
    }
  };
  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    setPageNum(1);
    setQuery(searchInput);
  };
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
    dispatch(productActions.productsRequest(pageNum, 10, query, sortBy));
  }, [dispatch, pageNum, sortBy, query]);

  return (
    <>
      <div style={{ marginTop: "30px" }}></div>
      <div className="search-product container">
        <HeaderBar
          searchInput={searchInput}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmitSearch}
          loading={loading}
        />
      </div>

      <Container>
        <Row>
          <Col xs={2}>
            <SideMenuAdmin page={"products"} />
          </Col>
          <Col xs={10}>
            {loading ? (
              <div className="text-center">
                <ClipLoader color="#f86c6b" size={150} loading={loading} />
              </div>
            ) : (
              <Container className="table-product" fluid>
                <Row>
                  <Col style={{ paddingLeft: 0 }}>
                    <Button variant="success" onClick={handleOnclickAdd}>
                      ADD
                    </Button>
                  </Col>
                  <Col>
                    <PaginationBar
                      pageNum={pageNum}
                      setPageNum={setPageNum}
                      totalPageNum={totalPageNum}
                      loading={loading}
                    />
                  </Col>
                </Row>

                <Row>
                  <Table striped bordered hover className="cart-table">
                    <thead>
                      <tr>
                        <th
                          className="mouse-hover"
                          onClick={() => handleSort("name")}
                        >
                          <FontAwesomeIcon icon="sort" size="sm" /> Name
                        </th>
                        <th
                          className="mouse-hover"
                          onClick={() => handleSort("ingredient")}
                        >
                          <FontAwesomeIcon icon="sort" size="sm" /> Ingredients
                        </th>
                        <th
                          className="mouse-hover"
                          onClick={() => handleSort("description")}
                        >
                          <FontAwesomeIcon icon="sort" size="sm" /> Description
                        </th>
                        <th
                          className="mouse-hover"
                          onClick={() => handleSort("quantity")}
                        >
                          <FontAwesomeIcon icon="sort" size="sm" /> Quantity
                        </th>
                        <th
                          className="mouse-hover"
                          onClick={() => handleSort("price")}
                        >
                          <FontAwesomeIcon icon="sort" size="sm" /> Price
                        </th>
                        <th>Images</th>
                        <th
                          className="mouse-hover"
                          onClick={() => handleSort("service")}
                        >
                          <FontAwesomeIcon icon="sort" size="sm" /> Service
                        </th>
                        {/*  <th
                          className="mouse-hover"
                          onClick={() => handleSort("catagories")}
                        >
                          <FontAwesomeIcon icon="sort" size="sm" /> Catagories
                        </th> */}
                        <th>Actions </th>
                      </tr>
                    </thead>
                    <tbody>
                      {products &&
                        products.map((item) => (
                          <tr key={item._id}>
                            <td>{item.name}</td>
                            <td>{item.ingredients}</td>
                            <td>
                              {item.description?.length <= 150 &&
                              item.description !== undefined
                                ? item.description
                                : item.description.slice(0, 99) + "..."}
                            </td>
                            <td>{item.quantity}</td>
                            <td>{item.price}</td>
                            <td>
                              <img
                                src={item.images[0].imageUrl}
                                alt="product-img"
                                width="80px"
                              />
                            </td>
                            <td>{item.service}</td>
                            {/* <td>{item.catagories}</td> */}
                            <td className="action-btn">
                              <Button
                                variant="outline-success"
                                onClick={() => handleOnclickEdit(item._id)}
                              >
                                EDIT
                              </Button>

                              <Button
                                variant="outline-success"
                                onClick={() => handleOnclickDelete(item._id)}
                              >
                                DELETE
                              </Button>
                            </td>{" "}
                          </tr>
                        ))}
                    </tbody>{" "}
                  </Table>
                </Row>
                <ModalAddProduct
                  showModal={showModal}
                  setShowModal={setShowModal}
                />
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
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductsAdmin;
