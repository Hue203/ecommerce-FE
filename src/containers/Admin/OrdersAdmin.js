import React, { useEffect, useState } from "react";
import { Container, Row, Table, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ModalEditOrder from "../../components/ModalEdditOrder";
import { orderActions } from "../../redux/actions/order.actions";
import { ClipLoader } from "react-spinners";
import ModalDeleteOrder from "../../components/ModalDeleteOrder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PaginationBar from "../../components/PaginationBar";
import SearchItem from "../../components/SearchItem";
const OrdersAdmin = () => {
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showDeleted, setshowDeleted] = useState(false);
  const [pageNum, setPageNum] = useState(1);
  const loading = useSelector((state) => state.order.loading);
  const [searchInput, setSearchInput] = useState("");
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState({ key: "", ascending: -1 });
  const orders = useSelector((state) => state.order.orders);
  const totalPageNum = useSelector((state) => state.blog.totalPageNum);
  console.log("order???", orders);
  const dispatch = useDispatch();

  const handleSort = (key) => {
    if (!loading) {
      setSortBy((sortBy) => ({
        key,
        ascending: -sortBy.ascending,
      }));
    }
  };

  console.log("sort", sortBy);

  // const handleInputChange = (e) => {
  //   setSearchInput(e.target.value);
  // };
  // const handleSubmitSearch = (e) => {
  //   e.preventDefault();
  //   setPageNum(1);
  //   setQuery(searchInput);
  // };
  const handleOnclickEdit = (orderId) => {
    setShowModalEdit(true);
    dispatch(orderActions.getSingleOrder(orderId));
  };
  console.log("orderId", handleOnclickEdit);
  const handleOnclickDelete = () => {
    setshowDeleted(true);
    dispatch(orderActions.deleteOrder());
  };
  useEffect(() => {
    dispatch(orderActions.getAllOrders({ pageNum, sortBy }));
  }, [dispatch, pageNum, sortBy]);

  return (
    <>
      {loading ? (
        <div className="text-center">
          <ClipLoader color="#f86c6b" size={150} loading={loading} />
        </div>
      ) : (
        <Container fluid>
          {orders !== undefined && (
            <>
              <Row>
                <Col md={4}>
                  {/* <SearchItem
                    searchInput={searchInput}
                    handleInputChange={handleInputChange}
                    handleSubmit={handleSubmitSearch}
                    loading={loading}
                  /> */}
                </Col>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th
                        className="mouse-hover"
                        onClick={() => handleSort("userId")}
                      >
                        Customer <FontAwesomeIcon icon="sort" size="sm" />
                      </th>
                      <th
                        className="mouse-hover"
                        onClick={() => handleSort("productId")}
                      >
                        Product Name <FontAwesomeIcon icon="sort" size="sm" />
                      </th>
                      <th
                        className="mouse-hover"
                        onClick={() => handleSort("totalProduct")}
                      >
                        Quantity <FontAwesomeIcon icon="sort" size="sm" />
                      </th>
                      <th
                        className="mouse-hover"
                        onClick={() => handleSort("statusOrder")}
                      >
                        Status Order <FontAwesomeIcon icon="sort" size="sm" />
                      </th>
                      <th
                        className="mouse-hover"
                        onClick={() => handleSort("totalPrice")}
                      >
                        Total Amount <FontAwesomeIcon icon="sort" size="sm" />
                      </th>
                      <th
                        className="mouse-hover"
                        onClick={() => handleSort("discount")}
                      >
                        Discount <FontAwesomeIcon icon="sort" size="sm" />
                      </th>
                      <th
                        className="mouse-hover"
                        onClick={() => handleSort("catagories")}
                      >
                        Catagories <FontAwesomeIcon icon="sort" size="sm" />
                      </th>
                      <th
                        className="mouse-hover"
                        onClick={() => handleSort("createdAt")}
                      >
                        DATE
                      </th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders !== undefined?.length ? (
                      <>
                        {orders.map((item) => (
                          <tr key={item._id}>
                            <td>{` OrderId ${item._id}`}</td>
                            <td>
                              {item?.productList?.map(
                                (product) => product.productId.name
                              )}
                            </td>
                            <td>{item.totalProduct}</td>
                            <td>{item.statusOrder}</td>
                            <td>{item.totalPrice}</td>
                            <td>{item.discount}</td>
                            <td>
                              {item?.productList?.map(
                                (product) => product.productId.catagories
                              )}
                            </td>
                            <td>{item?.createdAt.substring(0, 10)}</td>
                            <th>
                              <span>
                                <Button
                                  onClick={() => handleOnclickEdit(item._id)}
                                >
                                  EDIT
                                </Button>
                              </span>
                              <span>
                                <Button
                                  onClick={() => handleOnclickDelete(item._id)}
                                >
                                  DELETE
                                </Button>
                              </span>
                            </th>{" "}
                          </tr>
                        ))}
                      </>
                    ) : (
                      <p>There are no order</p>
                    )}
                  </tbody>
                </Table>
              </Row>

              <ModalEditOrder
                showModal={showModalEdit}
                setShowModal={setShowModalEdit}
              />
              <ModalDeleteOrder
                showDeleted={showDeleted}
                setShowDelete={setshowDeleted}
              />
            </>
          )}
        </Container>
      )}
      <Col>
        <PaginationBar
          pageNum={pageNum}
          setPageNum={setPageNum}
          totalPageNum={totalPageNum}
          loading={loading}
        />
      </Col>
    </>
  );
};

export default OrdersAdmin;
