import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { productActions } from "../../redux/actions/product.actions";
import { Row, Col, Container, Tabs, Tab, Button } from "react-bootstrap";
import ProductCard from "../../components/ProductCard";
import Packages from "../../components/Packages";
import ProductSlider from "../../components/ProductSlider";
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
  const BlogContent = ({ text, blogId, blogTitle }) => {
    return (
      <>
        <div className="blog-title">{blogTitle}</div>
        <div className="blog-content">
          <p>{text}</p>

          <small className="text-muted">Posted 2 days ago</small>
        </div>
        <Button
          className="btn readmore-btn"
          variant="success"
          onClick={() => handleClickOnBlog(blogId)}
        >
          Read More
        </Button>{" "}
      </>
    );
  };

  const blogContents = [
    {
      id: "60b69efc303b7251a3ccf295",
      title: "Detox Water Health Benefits and Myths",
      content:
        "Detox water is water that has been infused with the flavors of fresh fruits, vegetables or herbs. It’s sometimes referred to as fruit-infused water or fruit-flavored water.",
    },
    {
      id: "60b67ea02b713c2d2a39810b",
      title: "HOW TO PEEL TOMATOES EASILY",
      content:
        "Blanching tomatoes makes them quick and easy to peel. Learn how to peel tomatoes for canning, sauce, salsa,more!I’ll show you how to peel tomatoes without blanching, and how to blanch them, so you’ve got plenty of options.",
    },
  ];

  return (
    <>
      <ProductSlider />

      {loading ? (
        <div className="text-center">
          <ClipLoader color="#f86c6b" size={150} loading={loading} />
        </div>
      ) : (
        <>
          <Container>
            <Row>
              <Col>
                <div
                  onClick={() => handleClickOnBlog("60b69efc303b7251a3ccf295")}
                  className="blog-card"
                >
                  <div className="blog-div">
                    <img
                      className="blog-img"
                      variant="top"
                      src="http://res.cloudinary.com/hue203/image/upload/v1622580984/en8x3bzjumggl09auxs2.jpg"
                      alt="blog-img"
                    />
                  </div>
                  <BlogContent
                    text={blogContents[0].content}
                    blogId={blogContents[0].id}
                    blogTitle={blogContents[0].title}
                  />
                </div>
              </Col>
              <Col>
                <div
                  onClick={() => handleClickOnBlog("60b67ea02b713c2d2a39810b")}
                  className="blog-card"
                >
                  <BlogContent
                    text={blogContents[1].content}
                    blogId={blogContents[1].id}
                    blogTitle={blogContents[1].title}
                  />
                  <div className="blog-div">
                    <img
                      className="blog-img"
                      variant="top"
                      src="https://www.naturefresh.ca/wp-content/uploads/NFF_Tomatoes_Mix-2-W.jpg"
                      alt="blog-img"
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>

          <Container className="product-tab">
            <Tabs defaultActiveKey="product" id="uncontrolled-tab-example">
              <Tab eventKey="product" title="Popular Product" variant="pills">
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
              <Tab eventKey="packages" title="Detox Plan" variant="pills">
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
            <Row>
              {/* <Col>
                {" "}
                <VideoDetox />
              </Col>
              <Col className="content-video"></Col> */}
            </Row>
            {/* <Row>
              <Col>
                <img
                  src="http://fitmeal.like-themes.com/wp-content/uploads/2019/10/avocado.png"
                  alt=""
                />
              </Col>
              <Col className="" style={{ maxWidth: "360px" }}>
                <div className="ltx-wrapper">
                  <div className="wpb_text_column wpb_content_element ">
                    <Card className="card-avocado">
                      <ul className="check-invert">
                        <li>Reduces weight</li>
                        <li>Improves health</li>
                        <li>No sugar and gluten</li>
                        <li>Adds strength and energy</li>
                      </ul>
                    </Card>
                  </div>
                </div>
              </Col>
            </Row> */}
          </Container>
          <FooterPublic />
        </>
      )}
    </>
  );
};

export default HomePage;

//http://localhost:3000/blogs/60b69efc303b7251a3ccf295
//http://res.cloudinary.com/hue203/image/upload/v1622580984/en8x3bzjumggl09auxs2.jpg
//Detox water is water that has been infused with the flavors of fresh fruits, vegetables or herbs. It’s sometimes referred to as fruit-infused water or fruit-flavored water. You can make detox water at home in lots of different ways, using any combination of fruits, vegetables and herbs that you like

//http://localhost:3000/blogs/60b67ea02b713c2d2a39810b
//Blanching tomatoes makes them quick and easy to peel. Learn how to peel tomatoes for canning, sauce, salsa,more!I’ll show you how to peel tomatoes without blanching, and how to blanch them, so you’ve got plenty of options.WAYS TO PEEL TOMATOES WITHOUT BLANCHING:Freeze them and the peels will come off easily.
//"https://www.naturefresh.ca/wp-content/uploads/NFF_Tomatoes_Mix-2-W.jpg"
