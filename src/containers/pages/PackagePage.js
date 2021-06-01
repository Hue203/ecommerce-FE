import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { Container, Row, Col } from "react-bootstrap";
import Packages from "../../components/Packages";
import PaginationBar from "../../components/PaginationBar";
import BeforeAfter from "../../components/BeforeAfter";
import { packageActions } from "../../redux/actions/package.action";
import SearchItem from "../../components/SearchItem";
import SliderProductPage from "../../components/SliderProductPage";

const PackagePage = () => {
  const [pageNum, setPageNum] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [sortBy, setSortBy] = useState({ key: "", ascending: -1 });
  const [query, setQuery] = useState("");
  const loading = useSelector((state) => state.package.loading);
  const packages = useSelector((state) => state.package.packages);
  const totalPageNum = useSelector((state) => state.package.totalPageNum);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    setPageNum(1);
    setQuery(searchInput);
  };

  useEffect(() => {
    dispatch(packageActions.packagesRequest(pageNum, 10, query));
  }, [dispatch, pageNum, query]);

  const handleClickOnPackage = (id) => {
    history.push(`/packages/${id}`);
  };

  return (
    <>
      {loading ? (
        <div className="text-center">
          <ClipLoader color="#f86c6b" size={150} loading={loading} />
        </div>
      ) : (
        <>
          <SliderProductPage />
          <br />

          <Col md={4}>
            <SearchItem
              searchInput={searchInput}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmitSearch}
              loading={loading}
            />
          </Col>
          <section>
            <div className="packages-title">
              <h2>Everyday with Detox Box </h2>
              {/* <div>
                  {" "}
                  <h3>Start with Detox Box </h3>
                </div> */}
            </div>
            <Container className="packageConatiner">
              {packages?.length ? (
                <>
                  {packages.map((packageItem) => (
                    <div className="packages-row">
                      <Packages
                        packageProduct={packageItem}
                        key={packageItem._id}
                        handleClick={handleClickOnPackage}
                      />
                    </div>
                  ))}
                </>
              ) : (
                <p>There are no Packages</p>
              )}
            </Container>
          </section>
        </>
      )}
      <PaginationBar
        pageNum={pageNum}
        setPageNum={setPageNum}
        totalPageNum={totalPageNum}
        loading={loading}
      />
    </>
  );
};

export default PackagePage;
