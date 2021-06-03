import React, { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./containers/Routes/layouts/index";
import "react-responsive-carousel/lib/styles/carousel.min.css";

//Slider import
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Adding Fontawesome icons
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faAngry,
  faLaugh,
  faSadCry,
  faThumbsUp,
  faHeart,
  faPlus,
  faTrashAlt,
  faEdit,
  faChevronLeft,
  faSort,
  faCheckSquare,
  faTimesCircle,
  faPauseCircle,
  faCircle,
  faUser,
  faRegistered,
  faChartLine,
  faSignOutAlt,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";

import { fas } from "@fortawesome/free-solid-svg-icons";

import { fab } from "@fortawesome/free-brands-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./redux/actions/auth.actions";
import { ClipLoader } from "react-spinners";

library.add(
  fab,
  fas,

  faAngry,
  faLaugh,
  faSadCry,
  faThumbsUp,
  faHeart,
  faPlus,
  faTrashAlt,
  faEdit,
  faChevronLeft,
  faSort,
  faCheckSquare,
  faTimesCircle,
  faPauseCircle,
  faCircle,
  faUser,
  faRegistered,
  faChartLine,
  faSignOutAlt,
  faSignInAlt
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    console.log("accessToken", accessToken);
    if (accessToken && accessToken !== undefined) {
      dispatch(authActions.getCurrentUser(accessToken));
    } else {
      dispatch(authActions.logout);
    }
  }, [dispatch]);
  return (
    <>
      <Router>
        <Routes />
      </Router>
    </>
  );
}

export default App;
