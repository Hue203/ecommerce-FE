import React from "react";
import { Carousel } from "react-bootstrap";
import slide1 from "../images/slide1-1.jpg";
import slide2 from "../images/slide1-2.jpg";
import slide3 from "../images/slide1-3.jpg";

const ProductSlider = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100 " src={slide1} alt="First slide" />

          <div
            className="item-image-ads-extend animated ads-image411 hidden-xs fadeInLeftBig"
            data-animated="fadeInLeftBig"
          >
            <img
              width="280"
              height="504"
              src="https://nutritous.7uptheme.net/wp-content/uploads/2018/07/thumb11.png"
              className="attachment-full size-full"
              alt=""
              srcset="https://nutritous.7uptheme.net/wp-content/uploads/2018/07/thumb11.png 380w, https://nutritous.7uptheme.net/wp-content/uploads/2018/07/thumb11-226x300.png 226w"
              sizes="(max-width: 380px) 100vw, 380px"
            />
          </div>
          <div
            className="item-image-ads-extend animated ads-image412 slideInUp"
            data-animated="slideInUp"
          >
            <img
              width="645"
              height="840"
              src="https://nutritous.7uptheme.net/wp-content/uploads/2018/07/thumb12.png"
              className="attachment-full size-full"
              alt=""
              srcset="https://nutritous.7uptheme.net/wp-content/uploads/2018/07/thumb12.png 645w, https://nutritous.7uptheme.net/wp-content/uploads/2018/07/thumb12-200x300.png 200w, https://nutritous.7uptheme.net/wp-content/uploads/2018/07/thumb12-600x899.png 600w"
              sizes="(max-width: 645px) 100vw, 645px"
            ></img>
          </div>

          <div
            className="item-image-ads-extend animated ads-image413 hidden-xs fadeInRightBig"
            data-animated="fadeInRightBig"
          >
            <img
              width="350"
              height="371"
              src="https://nutritous.7uptheme.net/wp-content/uploads/2018/07/thumb13.png"
              className="attachment-full size-full"
              alt=""
              srcset="https://nutritous.7uptheme.net/wp-content/uploads/2018/07/thumb13.png 350w, https://nutritous.7uptheme.net/wp-content/uploads/2018/07/thumb13-283x300.png 283w"
              sizes="(max-width: 350px) 100vw, 350px"
            />
          </div>
          <div
            class="item-image-ads-extend animated ads-image414 hidden-xs bounce"
            data-animated="bounce"
          >
            <img
              width="110"
              height="73"
              src="https://nutritous.7uptheme.net/wp-content/uploads/2018/07/thumb14.png"
              class="attachment-full size-full"
              alt=""
            />
          </div>

          <Carousel.Caption>
            <div>
              <h1 className="content-amination">
                Fresh your day with fruity juice
              </h1>
              <div className="content-carousel">
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </div>
            </div>
            <a href="/products" target="_parent" className="btn-arrow white">
              Shop now
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide2} alt="Second slide" />

          <div className="absolute list-image-ads-extend">
            <div
              className="item-image-ads-extend animated ads-image51 hidden-xs rotateInUpRight"
              data-animated="rotateInUpRight"
            >
              <img
                width="300"
                height="300"
                src="https://nutritous.7uptheme.net/wp-content/uploads/2018/06/menu4.png"
                className="attachment-full size-full"
                alt=""
                srcset="https://nutritous.7uptheme.net/wp-content/uploads/2018/06/menu4.png 300w, https://nutritous.7uptheme.net/wp-content/uploads/2018/06/menu4-150x150.png 150w, https://nutritous.7uptheme.net/wp-content/uploads/2018/06/menu4-100x100.png 100w, https://nutritous.7uptheme.net/wp-content/uploads/2018/06/menu4-90x90.png 90w"
                sizes="(max-width: 300px) 100vw, 300px"
              />
            </div>
            <div
              className="item-image-ads-extend animated ads-image52 hidden-xs rotateInDownLeft"
              data-animated="rotateInDownLeft"
            >
              <img
                width="150"
                height="150"
                src="https://nutritous.7uptheme.net/wp-content/uploads/2018/06/menu2.png"
                className="attachment-full size-full"
                alt=""
                srcset="https://nutritous.7uptheme.net/wp-content/uploads/2018/06/menu2.png 150w, https://nutritous.7uptheme.net/wp-content/uploads/2018/06/menu2-100x100.png 100w, https://nutritous.7uptheme.net/wp-content/uploads/2018/06/menu2-90x90.png 90w"
                sizes="(max-width: 150px) 100vw, 150px"
              />
            </div>
            <div
              className="item-image-ads-extend animated ads-image53 hidden-xs rotateInUpRight"
              data-animated="rotateInUpRight"
            >
              <img
                width="300"
                height="300"
                src="https://nutritous.7uptheme.net/wp-content/uploads/2018/06/menu5.png"
                className="attachment-full size-full"
                alt=""
                srcset="https://nutritous.7uptheme.net/wp-content/uploads/2018/06/menu5.png 300w, https://nutritous.7uptheme.net/wp-content/uploads/2018/06/menu5-150x150.png 150w, https://nutritous.7uptheme.net/wp-content/uploads/2018/06/menu5-100x100.png 100w, https://nutritous.7uptheme.net/wp-content/uploads/2018/06/menu5-90x90.png 90w"
                sizes="(max-width: 300px) 100vw, 300px"
              />
            </div>
            <div
              className="item-image-ads-extend animated ads-image54 hidden-xs rotateInUpLeft"
              data-animated="rotateInUpLeft"
            >
              <img
                width="300"
                height="300"
                src="https://nutritous.7uptheme.net/wp-content/uploads/2018/06/menu1.png"
                className="attachment-full size-full"
                alt=""
                srcset="https://nutritous.7uptheme.net/wp-content/uploads/2018/06/menu1.png 300w, https://nutritous.7uptheme.net/wp-content/uploads/2018/06/menu1-150x150.png 150w, https://nutritous.7uptheme.net/wp-content/uploads/2018/06/menu1-100x100.png 100w, https://nutritous.7uptheme.net/wp-content/uploads/2018/06/menu1-90x90.png 90w"
                sizes="(max-width: 300px) 100vw, 300px"
              />
            </div>
            <div
              className="item-image-ads-extend animated ads-image55 slideInUp"
              data-animated="slideInUp"
            >
              <img
                width="681"
                height="807"
                src="https://nutritous.7uptheme.net/wp-content/uploads/2018/07/cup.png"
                className="attachment-full size-full"
                alt=""
                srcset="https://nutritous.7uptheme.net/wp-content/uploads/2018/07/cup.png 681w, https://nutritous.7uptheme.net/wp-content/uploads/2018/07/cup-253x300.png 253w, https://nutritous.7uptheme.net/wp-content/uploads/2018/07/cup-600x711.png 600w"
                sizes="(max-width: 681px) 100vw, 681px"
              />
            </div>
            <div
              className="item-image-ads-extend animated ads-image56 wobble"
              data-animated="wobble"
            >
              <img
                width="195"
                height="152"
                src="https://nutritous.7uptheme.net/wp-content/uploads/2018/07/leaf.png"
                class="attachment-full size-full"
                alt=""
              />
            </div>{" "}
          </div>

          <Carousel.Caption>
            <h1 className="content-amination">Drink Juice and Stay Safe</h1>
            <div className="content-carousel">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <a href="/products" target="_parent" className="btn-arrow white">
              Shop now
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="owl-item">
          <img className="d-block w-100" src={slide3} alt="Third slide" />

          <div className="absolute list-image-ads-extend">
            <div
              className="item-image-ads-extend animated ads-image431 rotate360 "
              data-animated="slideInUp"
            >
              <img
                width="586"
                height="1030"
                src="https://nutritous.7uptheme.net/wp-content/uploads/2018/07/thumb31.png"
                className="attachment-full size-full"
                alt=""
                srcset="https://nutritous.7uptheme.net/wp-content/uploads/2018/07/thumb31.png 586w, https://nutritous.7uptheme.net/wp-content/uploads/2018/07/thumb31-168x300.png 168w, https://nutritous.7uptheme.net/wp-content/uploads/2018/07/thumb31-572x1024.png 572w"
                sizes="(max-width: 586px) 100vw, 586px"
              />
            </div>
            <div
              className="item-image-ads-extend animated ads-image432 hidden-xs zoomInRight"
              data-animated="zoomInRight"
            >
              <img
                width="403"
                height="563"
                src="https://nutritous.7uptheme.net/wp-content/uploads/2018/07/thumb32.png"
                className="attachment-full size-full"
                alt=""
                srcset="https://nutritous.7uptheme.net/wp-content/uploads/2018/07/thumb32.png 403w, https://nutritous.7uptheme.net/wp-content/uploads/2018/07/thumb32-215x300.png 215w"
                sizes="(max-width: 403px) 100vw, 403px"
              />
            </div>
            <div
              className="item-image-ads-extend animated ads-image433 hidden-xs rubberBand"
              data-animated="rubberBand"
            >
              <img
                width="102"
                height="103"
                src="https://nutritous.7uptheme.net/wp-content/uploads/2018/07/thumb33.png"
                className="attachment-full size-full"
                alt=""
                srcset="https://nutritous.7uptheme.net/wp-content/uploads/2018/07/thumb33.png 102w, https://nutritous.7uptheme.net/wp-content/uploads/2018/07/thumb33-100x100.png 100w"
                sizes="(max-width: 102px) 100vw, 102px"
              />
            </div>
            <div
              className="item-image-ads-extend animated ads-image434 hidden-xs"
              data-animated="bounceInRight"
            >
              <img
                width="160"
                height="253"
                src="https://nutritous.7uptheme.net/wp-content/uploads/2018/07/thumb34.png"
                className="attachment-full size-full"
                alt=""
              />
            </div>
          </div>

          <Carousel.Caption>
            <h1 className="content-amination">
              Drink The Life Like A Glass Of Juice
            </h1>
            <div className="content-carousel">
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </div>
            <a href="/products" target="_parent" className="btn-arrow white">
              Shop now
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default ProductSlider;
///style={{ height: "100vh" }}
