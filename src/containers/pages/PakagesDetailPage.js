import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { packageActions } from "../../redux/actions/package.action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ClipLoader } from "react-spinners";
import { Button, Col, Row, Form } from "react-bootstrap";
import { userActions } from "../../redux/actions/user.actions";

const PakagesDetailPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [addQuantity, setAddQuantity] = useState(1);
  const singlePackage = useSelector((state) => state.package.selectedPackage);
  const loading = useSelector((state) => state.package.loading);
  const history = useHistory();

  useEffect(() => {
    if (params?.id) {
      dispatch(packageActions.getSinglePackage(params.id));
    }
  }, [dispatch, params]);
  const handleGoBackClick = (e) => {
    history.goBack();
  };

  const handleChangeQuantity = (e) => {
    setAddQuantity(e.target.value);
  };
  const handleAddToCart = () => {
    dispatch(
      userActions.addCartRequest({
        productId: params.id,
        quantity: addQuantity,
      })
    );
  };
  return (
    <>
      <div className="d-flex justify-content-between">
        <Button onClick={handleGoBackClick}>
          <FontAwesomeIcon icon="chevron-left" size="1x" /> Back
        </Button>
      </div>
      {loading ? (
        <div className="text-center">
          <ClipLoader color="#FFD700" size={150} loading={loading} />
        </div>
      ) : (
        <>
          {singlePackage && (
            <>
              <Row>
                <Col>
                  <div className="product-card" data-toggle="tooltip">
                    <img
                      src={singlePackage.images[0].imageUrl}
                      alt="product-img"
                      className="re-size-img-single"
                    />

                    <div className="content">
                      <div>
                        <ul>
                          {
                            <strong>
                              <p>
                                <h1>{singlePackage.name}</h1>
                              </p>
                            </strong>
                          }
                        </ul>
                      </div>
                      <div>
                        <ul>
                          {
                            <strong>
                              <h5>{`cycle: ${singlePackage.cycle}`}</h5>
                            </strong>
                          }
                        </ul>
                      </div>
                      <div>
                        <ul>
                          {
                            <strong>
                              <h5>{`packageType: ${singlePackage.packageType}`}</h5>
                            </strong>
                          }
                        </ul>
                      </div>
                      <div>
                        <ul>
                          {
                            <strong>
                              <Form.Control
                                name="totalProduct"
                                onChange={handleChangeQuantity}
                                value={addQuantity}
                              ></Form.Control>
                              {/* <h5>{`Quantity: ${singlePackage.quantity}`}</h5> */}
                            </strong>
                          }
                        </ul>
                      </div>

                      <div>
                        <ul>
                          {<p>{`Price: $ ${singlePackage.price}`}</p>}

                          <Button variant="warning" onClick={handleAddToCart}>
                            {" "}
                            Add to Card{" "}
                          </Button>
                        </ul>
                      </div>
                      <div>
                        <ul>
                          {
                            <strong>
                              <h5>{`Review : ${singlePackage.reviewsCount} review `}</h5>
                            </strong>
                          }
                        </ul>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </>
          )}
        </>
      )}
    </>
  );
};

export default PakagesDetailPage;
