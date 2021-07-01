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
import moment from "moment";
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
    setColor("8am");
  };
  const handleOnClickTime10 = () => {
    setFormData({ ...formData, deliveryTime: "10am" });
    setColor("10am");
  };

  const handleOnClickTime1 = () => {
    setFormData({ ...formData, deliveryTime: "1pm" });
    setColor("1pm");
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
              <h3>Are you ready to feel 18 again?</h3>

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
                                variant="outline-success"
                                className={
                                  link[packageItem._id] === active
                                    ? "orange combo-title"
                                    : "combo-title"
                                }
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
                            <a href="#delivery-row">
                              <Button
                                className={
                                  linkCycle[item._id] === activeCycle
                                    ? "orange combo-title"
                                    : "combo-title"
                                }
                                key={item._id}
                                variant="outline-success"
                                name="cycleId"
                                value={formData.cycleId}
                                onClick={() => handleOnClickCycle(item._id)}
                              >
                                {item.cycleName}
                              </Button>
                            </a>

                            <div
                              style={{
                                fontSize: "60px",
                                marginTop: "30px",
                                fontWeight: "600",
                              }}
                            >{`£ ${item.price}`}</div>

                            <div>
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
                  <div className="select-subtext">
                    Starting from today{" "}
                    <span> {moment().format("MMM-DD-YYYY")} </span>
                  </div>
                  <div className="delivery-time">
                    <div className="div-time">
                      <Button
                        className={
                          color !== "8am" ? "combo-title" : "combo-title orange"
                        }
                        variant="outline-success"
                        name="deliveryTime"
                        value={formData.deliveryTime}
                        onClick={() => handleOnClickTime8(console.log("8am"))}
                      >
                        {" "}
                        8:00 AM
                      </Button>
                    </div>
                    <div className="div-time">
                      <Button
                        className={
                          color !== "10am"
                            ? "combo-title"
                            : "combo-title orange"
                        }
                        variant="outline-success"
                        value={formData.deliveryTime}
                        onClick={() => handleOnClickTime10(console.log("10am"))}
                      >
                        {" "}
                        10:00 AM
                      </Button>
                    </div>
                    <div className="div-time">
                      <Button
                        variant="outline-success"
                        className={
                          color !== "1pm" ? "combo-title" : "combo-title orange"
                        }
                        value={formData.deliveryTime}
                        onClick={() => handleOnClickTime1(console.log("1pm"))}
                      >
                        {" "}
                        1:00 PM
                      </Button>
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
                  <div style={{ fontSize: "15px", marginRight: "1 0px" }}>
                    Change any information before the next drink delivery date 1
                    day
                  </div>
                  <div style={{ color: "#fa6400" }}>
                    <svg
                      height="30pt"
                      viewBox="0 0 100 100"
                      width="30pt"
                      src="http://www.w3.org/2000/svg"
                    >
                      <FontAwesomeIcon icon="question-circle" />
                    </svg>
                  </div>
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
