import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { Container, Row, Col, Button, Form, Card } from "react-bootstrap";
import Packages from "../../components/Packages";
import PaginationBar from "../../components/PaginationBar";
import { packageActions } from "../../redux/actions/package.action";
import SliderProductPage from "../../components/SliderProductPage";
import HeaderBar from "../../components/HeaderBar";
import FooterPublic from "../../components/FooterPublic";
import { userActions } from "../../redux/actions/user.actions";

import Datetime from "react-datetime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cycleActions } from "../../redux/actions/cycle.action";

const PackagePage = () => {
  const [pageNum, setPageNum] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [formData, setFormData] = useState({
    packageId: "",
    cylceId: "",
    deliveryTime: "",
    dateStart: "06/30/2021",
  });
  const [sortBy, setSortBy] = useState({ key: "", ascending: -1 });
  const [query, setQuery] = useState("");
  const loading = useSelector((state) => state.package.loading);
  const packages = useSelector((state) => state.package.packages);
  const cycle = useSelector((state) => state.cycle.cycle);
  const totalPageNum = useSelector((state) => state.package.totalPageNum);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleOnClick = (id) => {
    setFormData({ ...formData, packageId: id });
  };

  const handleOnClickCycle = (id) => {
    setFormData({ ...formData, cylceId: id });
  };

  const handleOnClickTime8 = () => {
    setFormData({ ...formData, deliveryTime: "8am" });
  };
  const handleOnClickTime10 = () => {
    setFormData({ ...formData, deliveryTime: "10am" });
  };

  const handleOnClickTime1 = () => {
    setFormData({ ...formData, deliveryTime: "1pm" });
  };
  console.log("cycleform", formData);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userActions.addCartPakageRequest(formData));
  };
  useEffect(() => {
    dispatch(packageActions.packagesRequest(pageNum, 10, query));
    dispatch(cycleActions.getCycle());
  }, [dispatch, pageNum, query]);

  const handleClickOnPackage = (id) => {
    history.push(`/packages/${id}`);
  };

  return (
    <>
      <SliderProductPage />

      <div style={{ marginTop: "60px" }}></div>
      <Container>
        <div className="content-top">
          <div>
            <h1>Create your own package</h1>
            <h2>Green living - Skin Regeneration</h2>
            <h3>Are you ready to feel and look like you 18 again?</h3>
            <h4>Saving 30% - Drink Everyday</h4>
            <div>
              {" "}
              <a href="#packageConatiner">
                <Button variant="outline-danger">Discovery</Button>
              </a>
            </div>
          </div>
          <div>
            <img
              src="http://fitmeal.like-themes.com/wp-content/uploads/2019/10/avocado.png"
              alt=""
              className="avocado"
            />
          </div>
        </div>

        {loading ? (
          <div className="text-center">
            <ClipLoader color="#f86c6b" size={150} loading={loading} />
          </div>
        ) : (
          <>
            <Form onSubmit={handleSubmit}>
              <div id="packageConatiner">
                <h1 className="select-text">Selected Combo</h1>{" "}
                <div className="packageConatiner">
                  {packages?.length ? (
                    <>
                      {packages.map((packageItem) => (
                        <>
                          <div className="div-combo">
                            <Packages
                              packageProduct={packageItem}
                              key={packageItem._id}
                              handleClick={handleClickOnPackage}
                            />
                            <a href="#cycle-row">
                              <Button
                                variant="success"
                                className="combo-title"
                                name="packageId"
                                value={formData.packageId}
                                onClick={() => handleOnClick(packageItem._id)}
                                key={packageItem._id}
                              >
                                {packageItem.name}
                              </Button>
                            </a>
                          </div>
                        </>
                      ))}
                    </>
                  ) : (
                    <p>There are no Packages</p>
                  )}
                </div>
              </div>
              <div style={{ marginTop: "60px" }}></div>
              <div id="cycle-row">
                <Row className="mb-3">
                  <h1 className="select-text">Select Cycle</h1>
                  <div className="cycle-plan" id="cycle-plan">
                    {cycle &&
                      cycle.map((item) => (
                        <>
                          <div className="div-days">
                            <h1>{item.cycleName}</h1>
                            <h3>{`£${item.price}`}</h3>
                            <div>
                              <a href="#delivery-row">
                                <Button
                                  key={item._id}
                                  variant="success"
                                  name="cycleId"
                                  value={formData.cycleId}
                                  onClick={() => handleOnClickCycle(item._id)}
                                >
                                  {" "}
                                  <FontAwesomeIcon
                                    icon="calendar-week"
                                    size="7x"
                                  />
                                </Button>
                              </a>
                            </div>
                          </div>
                        </>
                      ))}
                  </div>
                </Row>
              </div>
              <div id="delivery-row" className="delivery-row">
                <Row>
                  <div>
                    {" "}
                    <h1 className="select-text">Delivery time</h1>
                    <h5 className="select-text">
                      {" "}
                      Start Day <Datetime className="dateFormat" />
                    </h5>
                  </div>

                  <div className="delivery-time">
                    <div className="div-time">
                      <h1>8 am</h1>
                      <a href="#addtocard">
                        <Button
                          variant="success"
                          name="deliveryTime"
                          value={formData.deliveryTime}
                          onClick={() => handleOnClickTime8(console.log("8am"))}
                        >
                          {" "}
                          <FontAwesomeIcon icon="clock" size="7x" />
                        </Button>
                      </a>
                    </div>
                    <div className="div-time">
                      <h1>10 am</h1>{" "}
                      <a href="#addtocard">
                        <Button
                          variant="success"
                          ame="deliveryTime"
                          value={formData.deliveryTime}
                          onClick={() =>
                            handleOnClickTime10(console.log("10am"))
                          }
                        >
                          {" "}
                          <FontAwesomeIcon icon="clock" size="7x" />
                        </Button>
                      </a>
                    </div>
                    <div className="div-time">
                      <h1>1 pm</h1>{" "}
                      <a href="#addtocard">
                        <Button
                          variant="success"
                          ame="deliveryTime"
                          value={formData.deliveryTime}
                          onClick={() => handleOnClickTime1(console.log("1pm"))}
                        >
                          {" "}
                          <FontAwesomeIcon icon="clock" size="7x" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </Row>
                <div className="addtocard" id="addtocard">
                  <Button
                    type="submit"
                    variant="outline-danger"
                    onClick={handleSubmit}
                  >
                    {" "}
                    Add to Card{" "}
                  </Button>
                </div>
              </div>
            </Form>
          </>
        )}
      </Container>
      <FooterPublic />
    </>
  );
};

export default PackagePage;
