import React from "react";

const CardTest = () => {
  return (
    <div>
      <div className="owl-item active">
        <div className="item-product item-product1 text-center">
          <div className="product-thumb">
            <span className="onsale">Sale</span>

            <a
              href="https://fruitshop.7uptheme.net/product/sweet-pepper/"
              className="product-thumb-link rotate-thumb "
            >
              <img
                width="250"
                height="250"
                src="https://fruitshop.7uptheme.net/wp-content/uploads/2017/04//fruit_05-250x250.jpg"
                className="attachment-250x250 size-250x250 wp-post-image"
                alt=""
              />
              <img
                width="250"
                height="250"
                src="https://fruitshop.7uptheme.net/wp-content/uploads/2017/04//fruit_08-250x250.jpg"
                className="attachment-250x250 size-250x250"
                alt=""
              />{" "}
            </a>
            <a
              data-product-id="187"
              href="https://fruitshop.7uptheme.net/product/sweet-pepper/"
              className="quickview-link product-ajax-popup"
            >
              <i className="fa fa-search" aria-hidden="true"></i>
            </a>
          </div>
          <div className="product-info">
            <h3 className="product-title">
              <a href="https://fruitshop.7uptheme.net/product/sweet-pepper/">
                Sweet pepper
              </a>
            </h3>
            <div className="product-price">
              <span className="price">
                <del>
                  <span className="woocommerce-Price-amount amount">
                    <span className="woocommerce-Price-currencySymbol">£</span>
                    120.00
                  </span>
                </del>{" "}
                <ins>
                  <span className="woocommerce-Price-amount amount">
                    <span className="woocommerce-Price-currencySymbol">£</span>
                    99.00
                  </span>
                </ins>
              </span>
            </div>
            <div className="product-extra-link">
              <a
                href="/?add_to_wishlist=187"
                className="mb-wishlist add_to_wishlist wishlist-link"
                rel="nofollow"
                data-product-id="187"
                data-product-title="Sweet pepper"
              >
                <i className="fa fa-heart-o" aria-hidden="true"></i>
                <span>Wishlist</span>
              </a>
              <a
                href="/?add-to-cart=187"
                data-quantity="1"
                className="button product_type_simple add_to_cart_button mb-ajax_add_to_cart"
                data-product_id="187"
                data-product_sku=""
                aria-label="Add “Sweet pepper” to your cart"
                rel="nofollow"
              >
                Add to cart
              </a>{" "}
              <a
                href="/?action=yith-woocompare-add-product&amp;id=187"
                className="mb-compare product-compare compare compare-link"
                data-product_id="187"
              >
                <i className="fa fa-compress" aria-hidden="true"></i>
                <span>Compare</span>
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTest;
