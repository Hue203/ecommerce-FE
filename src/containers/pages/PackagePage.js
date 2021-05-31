import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { Container, Row, Col } from "react-bootstrap";
import Packages from "../../components/Packages";
import PaginationBar from "../../components/PaginationBar";
import BeforeAfter from "../../components/BeforeAfter";
import { packageActions } from "../../redux/actions/package.action";

const PackagePage = () => {
  const [pageNum, setPageNum] = useState(1);
  const loading = useSelector((state) => state.package.loading);
  const packages = useSelector((state) => state.package.packages);
  const totalPageNum = useSelector((state) => state.package.totalPageNum);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(packageActions.packagesRequest(pageNum));
  }, [dispatch, pageNum]);

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
        <Container className="beforeafteCompo">
          <BeforeAfter />
          <section>
            <div className="packages-title">Everyday detox with plan</div>
            <Container className="packageConatiner">
              {packages?.length ? (
                <>
                  {packages.map((packageItem) => (
                    <Row>
                      <Col className="packages-row">
                        <Packages
                          packageProduct={packageItem}
                          key={packageItem._id}
                          handleClick={handleClickOnPackage}
                        />
                      </Col>
                    </Row>
                  ))}
                </>
              ) : (
                <p>There are no Packages</p>
              )}
            </Container>
          </section>
        </Container>
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
