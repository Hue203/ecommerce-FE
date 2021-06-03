import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { productActions } from "../redux/actions/product.actions";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,

  cssEase: "linear",
};

const SliderHome = () => {
  const { loading, loadingBlog, loadingPackage } = useSelector((state) => ({
    loading: state.product.loading,
    loadingBlog: state.blog.loading,
    loadingPackage: state.package.loading,
  }));

  const products = useSelector((state) => state.product.products);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(productActions.productsRequest());
  }, [dispatch]);

  return (
    <>
      <div> Popular product </div>
      <div>
        <Slider {...settings} className="slider">
          {products &&
            products.map((product) => (
              <div>
                <img
                  width="250"
                  height="250"
                  src={product.images[0].imageUrl}
                  alt="product-img"
                  className="product-img"
                />
              </div>
            ))}
        </Slider>
      </div>
    </>
  );
};
export default SliderHome;
