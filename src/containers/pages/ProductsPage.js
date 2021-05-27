import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useHistory } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { productActions } from "../../redux/actions/product.actions";
import { Container } from "react-bootstrap";
import ProductCard from "../../components/ProductCard";
import PaginationBar from "../../components/PaginationBar";
import BeforeAfter from "../../components/BeforeAfter";

const ProductsPage = () => {
  const [pageNum, setPageNum] = useState(1);
  const loading = useSelector((state) => state.product.loading);

  const products = useSelector((state) => state.product.products);

  const totalPageNum = useSelector((state) => state.product.totalPageNum);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(productActions.productsRequest(pageNum));
  }, [dispatch, pageNum]);

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
          <BeforeAfter />
          <section>
            <Container className="productContainer">
              <h2>Fresh Detox</h2>
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
