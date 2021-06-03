import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Packages = ({ packageProduct, handleClick }) => {
  return (
    <>
      <Container className="package-container">
        <div onClick={() => handleClick(packageProduct._id)}>
          <div className="flex">
            <Row className="productRow">
              <Col>
                <div className="image-divpack">
                  {
                    <img
                      width="250"
                      height="350"
                      src={packageProduct.images[0].imageUrl}
                      alt="package-img"
                      className="img-package"
                    />
                  }
                  <div className="package-content">
                    <ul>
                      {
                        <strong>
                          <h4>{packageProduct.name}</h4>
                        </strong>
                      }
                    </ul>

                    <div>
                      <ul>
                        {
                          <p>{`Only £ ${packageProduct.price} for a Package`}</p>
                        }
                      </ul>
                      <ul>
                        {<p>{`Cyle for ${packageProduct.cycle} plan`}</p>}
                      </ul>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Packages;
