import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import HeaderBar from "../../components/HeaderBar";
import { useHistory } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { productActions } from "../../redux/actions/product.actions";
import { Container, Col, Row } from "react-bootstrap";
import ProductCard from "../../components/ProductCard";
import PaginationBar from "../../components/PaginationBar";
import SliderProductPage from "../../components/SliderProductPage";

const ProductsPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [sortBy, setSortBy] = useState({ key: "", ascending: -1 });
  const [query, setQuery] = useState("");
  const [pageNum, setPageNum] = useState(1);
  const loading = useSelector((state) => state.product.loading);
  const products = useSelector((state) => state.product.products);
  const totalPageNum = useSelector((state) => state.product.totalPageNum);
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
    dispatch(productActions.productsRequest(pageNum, 10, query));
  }, [dispatch, pageNum, query]);

  const handleClickOnProduct = (id) => {
    history.push(`/products/${id}`);
  };

  return (
    <>
      {loading ? (
        <div className="text-center">
          <ClipLoader color="#f86c6b" size={150} loading={loading} />
        </div>
      ) : (
        <>
          <div className="search-form pull-left">
            <HeaderBar
              searchInput={searchInput}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmitSearch}
              loading={loading}
            />
          </div>
          <SliderProductPage />
          <br />

          <section>
            <Container className="productContainer">
              <Row>
                <Col xs={12}>
                  {products?.length ? (
                    <div className="product-card">
                      {products.map((product) => (
                        <ProductCard
                          product={product}
                          key={product._id}
                          handleClick={handleClickOnProduct}
                        />
                      ))}
                    </div>
                  ) : (
                    <p>There are no Products</p>
                  )}
                </Col>
              </Row>
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

export default ProductsPage;
