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
import avocado from "../../images/avocado.png";
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
  const [link, setLink] = useState({
    "60bce5cd439197228c9cb82e": "60bce5cd439197228c9cb82e",
    "60bce5b2439197228c9cb82a": "60bce5b2439197228c9cb82a",
    "60bce55e439197228c9cb826": "60bce55e439197228c9cb826",
  });
  const [active, setActive] = useState(null);
  const [linkCycle, setlinkCycle] = useState({
    "60bcd486686fcb1d4f53828d": "60bcd486686fcb1d4f53828d",
    "60bcd474686fcb1d4f53828c": "60bcd474686fcb1d4f53828c",
    "60bcd459686fcb1d4f53828b": "60bcd459686fcb1d4f53828b",
  });
  const [activeCycle, setActiveCycle] = useState(null);

  const [color, setColor] = useState(null);
  const [delveryLink, setDelveryLink] = useState({
    "8am": "8am",
    "10am": "10am",
    "1pm": "1pm",
  });
  const loading = useSelector((state) => state.package.loading);
  const packages = useSelector((state) => state.package.packages);
  const cycle = useSelector((state) => state.cycle.cycle);
  const totalPageNum = useSelector((state) => state.package.totalPageNum);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleOnClick = (id) => {
    setFormData({ ...formData, packageId: id });
    setActive(id);
  };

  const handleOnClickCycle = (id) => {
    setFormData({ ...formData, cylceId: id });
    setActiveCycle(id);
  };

  const handleOnClickTime8 = () => {
    setFormData({ ...formData, deliveryTime: "8am" });
    setColor("orange");
  };
  const handleOnClickTime10 = () => {
    setFormData({ ...formData, deliveryTime: "10am" });
    setColor("orange");
  };

  const handleOnClickTime1 = () => {
    setFormData({ ...formData, deliveryTime: "1pm" });
    setColor("orange");
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

  console.log("linkkkk", link);
  const handleClickOnPackage = (id) => {
    history.push(`/packages/${id}`);
  };

  return (
    <>
      <SliderProductPage />

      <div style={{ marginTop: "60px" }}></div>
      <Container>
        <Container>
          {" "}
          <div className="content-top">
            <div className="content-avocado">
              <div className="greenText">Green living - Skin Regeneration</div>
              <br />
              <h3>Are you ready to feel and look like you 18 again?</h3>

              <h5>
                Solutions to improve health and change habits from the roots of
                nutrition{" "}
              </h5>
              <br />
              <div>
                {" "}
                <a href="#packageConatiner">
                  <Button variant="outline-danger" className="addtocardbtn">
                    Discovery
                  </Button>
                </a>
              </div>
            </div>
            <div className="img-avacodo">
              <img src={avocado} alt="" className="avocado" />
            </div>
          </div>
        </Container>

        {loading ? (
          <div className="text-center">
            <ClipLoader color="#f86c6b" size={150} loading={loading} />
          </div>
        ) : (
          <>
            <Form onSubmit={handleSubmit}>
              <div id="packageConatiner">
                <div className="select-text">
                  {" "}
                  <FontAwesomeIcon icon="box-open" className="icon" />{" "}
                  <span></span>
                  Selected Combo
                </div>{" "}
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
                                className={
                                  link[packageItem._id] === active
                                    ? "orange"
                                    : ""
                                }
                                id="combo-title"
                                name={packageItem._id}
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
              <Container id="cycle-row">
                <Row className="mb-3">
                  <div className="select-text">
                    {" "}
                    <FontAwesomeIcon
                      icon="calendar-alt"
                      className="icon"
                      size="2x"
                    />{" "}
                    <span></span>
                    Selected Cycle
                  </div>{" "}
                  <div className="cycle-plan" id="cycle-plan">
                    {cycle &&
                      cycle.map((item) => (
                        <Container>
                          <div className="div-days">
                            <h1>{item.cycleName}</h1>
                            <h3>{`£${item.price}`}</h3>

                            <div>
                              <a href="#delivery-row">
                                <Button
                                  className={
                                    linkCycle[item._id] === activeCycle
                                      ? "orange"
                                      : ""
                                  }
                                  key={item._id}
                                  variant="success"
                                  name="cycleId"
                                  value={formData.cycleId}
                                  onClick={() => handleOnClickCycle(item._id)}
                                >
                                  {" "}
                                  <FontAwesomeIcon
                                    icon="calendar-week"
                                    size="3x"
                                  />
                                </Button>
                              </a>
                              <div className="content-cylce">
                                <li>Pay by the package.</li>{" "}
                                <li> Drink will be delivery to you</li>
                                <li>Stop anytime “Free shipping”</li>
                              </div>
                            </div>
                          </div>
                        </Container>
                      ))}
                  </div>
                </Row>
              </Container>
              <Container id="delivery-row" className="delivery-row">
                <Row>
                  <div>
                    {" "}
                    <div className="select-text">
                      {" "}
                      <FontAwesomeIcon
                        icon="truck"
                        className="icon"
                        size="2x"
                      />{" "}
                      <span></span>
                      Delivery Time
                    </div>{" "}
                    {/* <h5 className="select-text">
                      {" "}
                      Start Day <Datetime className="dateFormat" />
                    </h5> */}
                  </div>

                  <div className="delivery-time">
                    <div className="div-time">
                      <h1>8 am</h1>
                      <a href="#addtocard">
                        <Button
                          className={color === null ? "" : "orange"}
                          variant="success"
                          name="deliveryTime"
                          value={formData.deliveryTime}
                          onClick={() => handleOnClickTime8(console.log("8am"))}
                        >
                          {" "}
                          <FontAwesomeIcon icon="clock" size="3x" />
                        </Button>
                      </a>
                    </div>
                    <div className="div-time">
                      <h1>10 am</h1>{" "}
                      <a href="#addtocard">
                        <Button
                          className={color === null ? "" : "orange"}
                          variant="success"
                          value={formData.deliveryTime}
                          onClick={() =>
                            handleOnClickTime10(console.log("10am"))
                          }
                        >
                          {" "}
                          <FontAwesomeIcon icon="clock" size="3x" />
                        </Button>
                      </a>
                    </div>
                    <div className="div-time">
                      <h1>1 pm</h1>{" "}
                      <a href="#addtocard">
                        <Button
                          variant="success"
                          className={color === null ? "" : "orange"}
                          value={formData.deliveryTime}
                          onClick={() => handleOnClickTime1(console.log("1pm"))}
                        >
                          {" "}
                          <FontAwesomeIcon icon="clock" size="3x" />
                        </Button>
                      </a>
                    </div>
                  </div>
                  <div className="addtocard" id="addtocard">
                    <Button
                      className="addtocardbtn"
                      type="submit"
                      variant="outline-danger"
                      onClick={handleSubmit}
                    >
                      {" "}
                      Add to Card{" "}
                    </Button>
                  </div>
                </Row>

                <div className="faqs">
                  {" "}
                  <a href="#faqs" class="faqs-button">
                    <svg
                      height="50pt"
                      viewBox="0 0 100 100"
                      width="50pt"
                      src="http://www.w3.org/2000/svg"
                    >
                      <FontAwesomeIcon icon="question-circle" />
                    </svg>
                  </a>
                  <p id="faqs">
                    Change any information before the next drink delivery date 1
                    day.
                  </p>
                </div>
              </Container>
            </Form>
          </>
        )}
      </Container>
      <FooterPublic />
    </>
  );
};

export default PackagePage;
