import React from "react";
import HomePage from "../../pages/HomePage";
import { Switch, Route } from "react-router-dom";
import PublicNavbar from "../../pages/PublicNavbar";
import AlertMsg from "../../../components/AlertMsg";
import NotFoundPage from "../../../components/NotFoundPage";
import RegisterPage from "../../pages/RegisterPage";
import LoginPage from "../../pages/LoginPage";
import DetailPage from "../../pages/DetailPage";
import ProtectedRoute from "../ProtectedRoute";
import PakagesDetailPage from "../../pages/PakagesDetailPage";
import BlogDetailPage from "../../pages/BlogDetailPage";
import ProductsPage from "../../pages/ProductsPage";
import CartPage from "../../pages/CartPage";
import ShippingInfor from "../../pages/ShippingInfor";
import ProfilePage from "../../pages/ProfilePage";
import ThankYouPage from "../../pages/ThankYouPage";
import BlogPage from "../../pages/BlogPage";
import PackagePage from "../../pages/PackagePage";
import OrderDetailPage from "../../pages/OrderDetailPage";
import FooterPublic from "../../../components/FooterPublic";
import AboutUs from "../../pages/AboutUs";

const PublicLayout = () => {
  return (
    <>
      <PublicNavbar />

      <AlertMsg />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/products" component={ProductsPage} />
        <Route exact path="/products/:id" component={DetailPage} />
        <Route exact path="/packages" component={PackagePage} />
        <Route exact path="/packages/:id" component={PakagesDetailPage} />
        <Route exact path="/blogs" component={BlogPage} />
        <Route exact path="/blogs/:id" component={BlogDetailPage} />
        <Route exact path="/about" component={AboutUs} />

        <ProtectedRoute exact path="/shipping" component={ShippingInfor} />
        <ProtectedRoute
          exact
          path="/orders/thankyou"
          component={ThankYouPage}
        />

        <ProtectedRoute exact path="/user/profile" component={ProfilePage} />
        <ProtectedRoute exact path="/cart/:id" component={CartPage} />
        <ProtectedRoute exact path="/orders/:id" component={OrderDetailPage} />
        <Route component={NotFoundPage} />
      </Switch>
      {/* <section className="footer-public-section">
        <FooterPublic />
      </section> */}
    </>
  );
};

export default PublicLayout;
