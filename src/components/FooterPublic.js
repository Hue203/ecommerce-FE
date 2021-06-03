import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const FooterPublic = () => {
  return (
    <>
      <footer className="w-100 py-4 flex-shrink-0">
        <div className="container py-4">
          <div className="row gy-4 gx-5">
            <div className="col-lg-4 col-md-6">
              <h5 className="h1 text-white">Detox Box</h5>
              <p className="small text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <p className="small text-muted mb-0">
                &copy; Copyrights. All rights reserved.{" "}
              </p>
            </div>
            <div className="col-lg-2 col-md-6">
              {/* <h5 className="text-white mb-3">Links</h5>
              <ul className="list-unstyled text-muted">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/products">Get started</a>
                </li>
                <li>
                  <a href="/">FAQ</a>
                </li>
              </ul> */}
            </div>
            <div className="col-lg-2 col-md-6">
              {/* <h5 className="text-white mb-3">Contact Us</h5>
              <ul className="list-unstyled text-muted">
                <li as={Link} to="/user/profile">
                  <FontAwesomeIcon icon="facebook" size="sm" />
                  FaceBook
                </li>
                <li>
                  <a href="/">Instagram</a>
                </li>
                <li>
                  <a href="/products">Now Delivery</a>
                </li>
                <li>
                  <a href="/">FAQ</a>
                </li>
              </ul>{" "} */}
            </div>

            <div className="col-lg-4 col-md-6">
              <h5 className="text-white mb-3">Newsletter</h5>
              <p className="small text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <form action="#">
                <div className="input-group mb-3">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  ></input>
                  <button
                    className="btn btn-footer"
                    id="button-addon2"
                    type="button"
                  >
                    <FontAwesomeIcon icon="arrow-right" size="sm" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterPublic;
