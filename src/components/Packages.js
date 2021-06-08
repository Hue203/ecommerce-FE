import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Packages = ({ packageProduct, handleClick }) => {
  return (
    <>
      <Container className="package-container">
        <Row className="packageRow">
          <div className="image-divpack">
            {
              <img
                width="150"
                height="250"
                src={packageProduct.images[0].imageUrl}
                alt="package-img"
                className="img-package"
              />
            }
            <div
              className="package-content"
              onClick={() => handleClick(packageProduct._id)}
            >
              <div>
                <ul>
                  <h5>With:</h5>
                  <p>
                    {packageProduct.products.map((item) => (
                      <ul>{`1 ${item.productId.name}`}</ul>
                    ))}
                  </p>
                </ul>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Packages;
