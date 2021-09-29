import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { ClipLoader } from "react-spinners";
import PaginationBar from "../../components/PaginationBar";
import HeaderBar from "../../components/HeaderBar";
import SideMenuAdmin from "../../components/SideMenuAdmin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { userActions } from "../../redux/actions/user.actions";

const CustomersAdmin = () => {
  const [searchInput, setSearchInput] = useState("");
  const [query, setQuery] = useState("");
  const [pageNum, setPageNum] = useState(1);
  const loading = useSelector((state) => state.user.loading);
  const customers = useSelector((state) => state.user.users);
  console.log("customers", customers);
  const totalPageNum = useSelector((state) => state.user.totalPageNum);
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    setQuery(searchInput);
  };
  useEffect(() => {
    dispatch(userActions.getAllCustomers());
  }, [dispatch]);
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

      <Container>
        <Row>
          {/* <Col xs={2}>{/* <SideMenuAdmin page={"products"} /> </Col> */}
          <Col xs={12}>
            {loading ? (
              <div className="text-center">
                <ClipLoader color="#f86c6b" size={150} loading={loading} />
              </div>
            ) : (
              <Container className="table-product" fluid>
                <Row>
                  <Col style={{ paddingLeft: 0 }}></Col>
                  <Col>
                    <PaginationBar
                      pageNum={pageNum}
                      setPageNum={setPageNum}
                      totalPageNum={totalPageNum}
                      loading={loading}
                    />
                  </Col>
                </Row>
                <Row>
                  <Table striped bordered hover className="cart-table">
                    <thead>
                      <tr>
                        <th className="mouse-hover">
                          <FontAwesomeIcon icon="sort" size="sm" /> Acount Name
                        </th>
                        <th className="mouse-hover">
                          <FontAwesomeIcon icon="sort" size="sm" /> Email
                        </th>
                        <th className="mouse-hover">
                          <FontAwesomeIcon icon="sort" size="sm" /> Full Name
                        </th>
                        <th className="mouse-hover">
                          <FontAwesomeIcon icon="sort" size="sm" /> Address
                        </th>
                        <th className="mouse-hover">
                          <FontAwesomeIcon icon="sort" size="sm" /> Phone Number
                        </th>

                        <th>Orders </th>
                      </tr>
                    </thead>
                    <tbody>
                      {customers &&
                        customers.users?.map((item) => (
                          <tr key={item._id}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.billingDetails?.fullname}</td>
                            <td>{item.billingDetails?.address1}</td>
                            <td>{item.billingDetails?.phone}</td>
                            <td className="action-btn"></td>{" "}
                          </tr>
                        ))}
                    </tbody>{" "}
                  </Table>
                </Row>
              </Container>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CustomersAdmin;
