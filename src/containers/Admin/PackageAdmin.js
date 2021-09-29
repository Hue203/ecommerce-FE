import React, { useEffect, useState } from "react";
import { Container, Row, Table, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { packageActions } from "../../redux/actions/package.action";
import { ClipLoader } from "react-spinners";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PaginationBar from "../../components/PaginationBar";

import HeaderBar from "../../components/HeaderBar";
import SideMenuAdmin from "../../components/SideMenuAdmin";
import ModalAddPackage from "../../components/ModalAddPackage";
import { cycleActions } from "../../redux/actions/cycle.action";
import ModalAddCycle from "../../components/AddCycleModal";

const PackageAdmin = () => {
  const [showModal, setShowModal] = useState(false);

  const [showModalCycle, setShowModalCycle] = useState(false);
  const [pageNum, setPageNum] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState({ key: "", ascending: -1 });
  const loading = useSelector((state) => state.order.loading);
  const packages = useSelector((state) => state.package.packages);
  const totalPageNum = useSelector((state) => state.blog.totalPageNum);
  const cycle = useSelector((state) => state.cycle.cycle);
  const dispatch = useDispatch();

  const handleSort = (key) => {
    if (!loading) {
      setSortBy((sortBy) => ({
        key,
        ascending: -sortBy.ascending,
      }));
    }
  };

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };
  const handleSubmitSearch = (e) => {
    e.preventDefault();
    setPageNum(1);
    setQuery(searchInput);
  };
  const handleOnclickAdd = () => {
    setShowModal(true);
  };
  const handleOnclickAddCycle = () => {
    setShowModalCycle(true);
  };
  useEffect(() => {
    dispatch(packageActions.packagesRequest({ pageNum, sortBy, query }));
    dispatch(cycleActions.getCycle());
  }, [dispatch, pageNum, sortBy, query]);
  return (
    <>
      <div style={{ marginTop: "30px" }}></div>
      <div className="search-product container">
        <HeaderBar
          searchInput={searchInput}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmitSearch}
          loading={loading}
        />
      </div>
      <br />
      <Container>
        <Row>
          <Col xs={2}>
            <SideMenuAdmin page={"packages"} />
          </Col>
          <Col xs={10}>
            <Row style={{ textAlign: "right", marginBottom: "10px" }}>
              <div style={{ paddingRight: "0" }}>
                <Button
                  variant="success"
                  onClick={() => handleOnclickAdd()}
                  style={{ marginRight: "0" }}
                >
                  ADD
                </Button>
              </div>
            </Row>

            {packages !== undefined && (
              <>
                <Row>
                  <Table striped bordered hover className="cart-table">
                    <thead>
                      <tr>
                        <th
                          className="mouse-hover"
                          onClick={() => handleSort("userId")}
                        >
                          Package Name <FontAwesomeIcon icon="sort" size="sm" />
                        </th>
                        <th
                          className="mouse-hover"
                          onClick={() => handleSort("productId")}
                        >
                          Product List <FontAwesomeIcon icon="sort" size="sm" />
                        </th>
                        <th
                          className="mouse-hover"
                          onClick={() => handleSort("totalProduct")}
                        >
                          Types <FontAwesomeIcon icon="sort" size="sm" />
                        </th>

                        <th
                          className="mouse-hover"
                          onClick={() => handleSort("discount")}
                        >
                          Images <FontAwesomeIcon icon="sort" size="sm" />
                        </th>

                        <th
                          className="mouse-hover"
                          onClick={() => handleSort("createdAt")}
                        >
                          DATE
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {packages !== undefined?.length ? (
                        <>
                          {packages.map((item) => (
                            <>
                              <tr key={item._id}>
                                <td>{item.name}</td>
                                <td>
                                  {item.products?.map(
                                    (product) => product.productId.name
                                  )}
                                </td>
                                <td>{item.packageType}</td>

                                <td>
                                  <img
                                    src={item.images[0].imageUrl}
                                    alt="product-img"
                                    width="90px"
                                    height="60px"
                                  />
                                </td>
                                <td>{item?.createdAt.substring(0, 10)}</td>
                              </tr>
                            </>
                          ))}
                        </>
                      ) : (
                        <p>There are no order</p>
                      )}
                    </tbody>
                  </Table>
                </Row>
              </>
            )}
          </Col>
        </Row>
        <ModalAddPackage showModal={showModal} setShowModal={setShowModal} />
      </Container>

      <Container>
        <Row>
          <Col xs={2}></Col>
          <Col xs={10}>
            <Row style={{ textAlign: "right", marginBottom: "10px" }}>
              <div style={{ paddingRight: "0" }}>
                <Button
                  variant="success"
                  onClick={() => handleOnclickAddCycle()}
                >
                  ADD
                </Button>
              </div>
            </Row>
            {cycle && cycle !== undefined && (
              <>
                <Row>
                  <Table
                    striped
                    bordered
                    hover
                    className="cart-table"
                    style={{ textAlign: "center" }}
                  >
                    <thead>
                      <tr>
                        <th
                          className="mouse-hover"
                          onClick={() => handleSort("userId")}
                        >
                          Cycle Name <FontAwesomeIcon icon="sort" size="sm" />
                        </th>
                        <th
                          className="mouse-hover"
                          onClick={() => handleSort("productId")}
                        >
                          Price <FontAwesomeIcon icon="sort" size="sm" />
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {cycle && cycle !== undefined?.length ? (
                        <>
                          {cycle?.map((item) => (
                            <tr key={item._id}>
                              <td>{item.cycleName}</td>
                              <td>{item.price}</td>
                            </tr>
                          ))}
                        </>
                      ) : (
                        <tr>
                          <td>There are no cycle</td>
                          <td></td>
                        </tr>
                      )}
                    </tbody>
                  </Table>
                </Row>
              </>
            )}
          </Col>
        </Row>
        <ModalAddCycle
          showModalCycle={showModalCycle}
          setShowModalCycle={setShowModalCycle}
        />
      </Container>
    </>
  );
};

export default PackageAdmin;
