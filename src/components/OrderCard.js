import React, { useEffect } from "react";

import { Container, Table, Row, Col, Card, Button } from "react-bootstrap";
import { ClipLoader } from "react-spinners";

const OrderCard = ({ product }) => {
  return (
    <Container fluid>
      <Col>
        <Card>
          <Card.Body>
            <Row>
              <Col>Provisional</Col>
              <Col>{`${product.productId.price} * ${product.quantity}`}</Col>
            </Row>
            <Row>
              <Col>Discount</Col>
              <Col>{`${product.productId.discount}`}</Col>
            </Row>
            <Row>
              <Col>Total</Col>
              <Col>{`${`${product.productId.price} * ${product.quantity} - ${product.productId.discount}`}`}</Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Container>
  );
};

export default OrderCard;
