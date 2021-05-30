import React, { useEffect, useState } from "react";
import { Container, Row, Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ModalEditProduct from "../../components/ModalEditProduct";
import { orderActions } from "../../redux/actions/order.actions";

import ModalDeleteProduct from "../../components/ModalDeleteProduct";
import { ClipLoader } from "react-spinners";

const OrdersAdmin = () => {
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showDeleted, setshowDeleted] = useState(false);
  const loading = useSelector((state) => state.order.loading);
  const orders = useSelector((state) => state.order.orders);
  console.log("order???????", orders);

  const dispatch = useDispatch();

  const handleOnclickEdit = (orderId) => {
    setShowModalEdit(true);
    dispatch(orderActions.getSingleOrder(orderId));
  };

  const handleOnclickDelete = (orderId) => {
    setshowDeleted(true);
    dispatch(orderActions.deleteOrder(orderId));
  };
  useEffect(() => {
    dispatch(orderActions.getAllOrders());
  }, []);

  return (
    <>
      {loading ? (
        <div className="text-center">
          <ClipLoader color="#f86c6b" size={150} loading={loading} />
        </div>
      ) : (
        <Container fluid>
          {orders && (
            <>
              <Row>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Customer</th>
                      <th>Product Name</th>
                      <th>Quantity</th>
                      <th>Status Order</th>
                      <th>Total Amount</th>
                      <th>Discount</th>
                      <th>Catagories</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders?.length ? (
                      <>
                        {orders.map((item) => (
                          <tr key={item._id}>
                            <td>{item.userId}</td>
                            <td>productList</td>
                            <td>{item.totalProduct}</td>
                            <td>{item.statusOrder}</td>
                            <td>{item.totalPrice}</td>
                            <td>{item.discount}</td>
                            <td>Something</td>
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

              <ModalEditProduct
                showModal={showModalEdit}
                setShowModal={setShowModalEdit}
              />
              <ModalDeleteProduct
                showDeleted={showDeleted}
                setShowDelete={setshowDeleted}
              />
            </>
          )}
        </Container>
      )}
    </>
  );
};

export default OrdersAdmin;
