import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { productActions } from "../../redux/actions/product.actions";
import { Row, Col, Container, Tabs, Tab } from "react-bootstrap";
import ProductCard from "../../components/ProductCard";
import Packages from "../../components/Packages";
import ProductSlider from "../../components/ProductSlider";
import BlogCard from "../../components/BlogCard";
import { blogActions } from "../../redux/actions/blog.action";
import { packageActions } from "../../redux/actions/package.action";
import FooterPublic from "../../components/FooterPublic";

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
    <>
      <section className="slider-section">
        <ProductSlider />
      </section>

      {loading ? (
        <div className="text-center">
          <ClipLoader color="#f86c6b" size={150} loading={loading} />
        </div>
      ) : (
        <>
          {blogs.map((blog) => (
            <BlogCard
              blog={blog}
              handleClick={handleClickOnBlog}
              key={blog._id}
            />
          ))}

          <section>
            <Container className="product-tab">
              <Tabs
                defaultActiveKey="product"
                id="uncontrolled-tab-example"
                className="tab-product"
              >
                <Tab eventKey="product" title="Popular Product">
                  <Container className="productContainer">
                    {products?.length ? (
                      <>
                        <div className="title-pkg-container">
                          Popular Detox Drink
                        </div>
                        <div className="product-card">
                          {products.map((product) => (
                            <ProductCard
                              product={product}
                              key={product._id}
                              handleClick={handleClickOnProduct}
                            />
                          ))}
                        </div>
                      </>
                    ) : (
                      <p>There are no Products</p>
                    )}
                  </Container>
                </Tab>
                <Tab eventKey="packages" title="Detox Plan">
                  <Container className="packageSection">
                    <div className="title-pkg-container">
                      Regular Drink with Detox Box
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
                  </Container>
                </Tab>
              </Tabs>
            </Container>
          </section>

          <FooterPublic />
        </>
      )}
    </>
  );
};

export default HomePage;
