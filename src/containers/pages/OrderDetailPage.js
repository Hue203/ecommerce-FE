import React, { useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { orderActions } from "../../redux/actions/order.actions";
import { useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import FooterPublic from "../../components/FooterPublic";

const OrderDetailPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.order.loading);
  const selectedOrder = useSelector((state) => state.order.selectedOrder);

  useEffect(() => {
    if (params?.id) {
      dispatch(orderActions.getSingleOrder(params.id));
    }
  }, [dispatch, params]);

  return (
    <>
      {loading ? (
        <div className="text-center">
          <ClipLoader color="#FFD700" size={150} loading={loading} />
        </div>
      ) : (
        <Container>
          {selectedOrder && (
            <>
              <Col>Product </Col>
              {/* {selectedOrder.productList.map((product) => {
              <h1>{product.productId.name}</h1>;
            })} */}

              <Col>Price </Col>
              <Col>Quantity</Col>
              <Col>
                Discount
                <h1>{` $$ ${selectedOrder.statusOrder}`}</h1>
              </Col>
              <Col>Amount</Col>
              <Row>
                <Col>Total</Col>
              </Row>
            </>
          )}
        </Container>
      )}
      <FooterPublic />
    </>
  );
};

export default OrderDetailPage;
