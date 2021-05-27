import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { productActions } from "../../redux/actions/product.actions";
import { Row, Col, Container } from "react-bootstrap";
import ProductCard from "../../components/ProductCard";
import FooterComponent from "../../components/FooterComponent";
import Packages from "../../components/Packages";
import ProductSlider from "../../components/ProductSlider";
import BlogCard from "../../components/BlogCard";
import { blogActions } from "../../redux/actions/blog.action";
import { packageActions } from "../../redux/actions/package.action";

const HomePage = () => {
  const { loading, loadingBlog, loadingPackage } = useSelector((state) => ({
    loading: state.product.loading,
    loadingBlog: state.blog.loading,
    loadingPackage: state.package.loading,
  }));

  const products = useSelector((state) => state.product.products);
  const blogs = useSelector((state) => state.blog.blogs);
  const packages = useSelector((state) => state.package.packages);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(productActions.productsRequest());
    dispatch(blogActions.blogsRequest());
    dispatch(packageActions.packagesRequest());
  }, [dispatch]);
  ///chay trong useEffect 1 lan//
  const handleClickOnProduct = (id) => {
    history.push(`/products/${id}`);
  };
  const handleClickOnBlog = (id) => {
    history.push(`/blogs/${id}`);
  };
  const handleClickOnPackage = (id) => {
    history.push(`/packages/${id}`);
  };

  return (
    <div className="body">
      <div className="body">
        <section className="slider-section">
          <ProductSlider />
        </section>

        {loading ? (
          <div className="text-center">
            <ClipLoader color="#f86c6b" size={150} loading={loading} />
          </div>
        ) : (
          <>
            <section>
              <Container className="productContainer">
                <h2>Popular Detox</h2>
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
            <section>
              <Container className="blog-box">
                {blogs.map((blog) => (
                  <BlogCard
                    blog={blog}
                    handleClick={handleClickOnBlog}
                    key={blog._id}
                  />
                ))}
              </Container>
            </section>

            <section>
              <div className="title-pkg-container">
                Let's choose your package
              </div>
              <Container className="packageConatiner">
                {packages.map((packageItem) => (
                  <Row>
                    <Col className="packages-row">
                      <Packages
                        packageProduct={packageItem}
                        handleClick={handleClickOnPackage}
                      />
                    </Col>
                  </Row>
                ))}
              </Container>
            </section>
            <section>
              <Container>Daily Drink</Container>
            </section>
            {/* <section>
              <FooterComponent />
            </section> */}
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;
