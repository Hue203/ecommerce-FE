import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { authActions } from "../../redux/actions/auth.actions";
import { routeActions } from "../../redux/actions/route.actions";
import login from "../../images/logo1.png";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
    avatarUrl: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const redirectTo = useSelector((state) => state.route.redirectTo);
  const history = useHistory();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, password2, avatarUrl } = formData;
    if (password !== password2) {
      console.log("password is not match");
      setErrors({ ...errors, password2: "Passwords do not match" });
      return;
    } else {
      dispatch(authActions.register(name, email, password, avatarUrl)); ///send data to serve
    }
  };

  useEffect(() => {
    if (redirectTo) {
      if (redirectTo === "__GO_BACK__") {
        history.goBack();
        dispatch(routeActions.removeRedirectTo());
      } else {
        history.push(redirectTo);
        dispatch(routeActions.removeRedirectTo());
      }
    }
  }, [dispatch, history, redirectTo]);

  const uploadWidget = () => {
    window.cloudinary.openUploadWidget(
      {
        cloud_name: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
        upload_preset: process.env.REACT_APP_CLOUDINARY_PRESET,
        multiple: false,
      },
      function (error, result) {
        if (!error) {
          console.log("resultimgAvatar", result);
          if (result.event === "success") {
            setFormData({ ...formData, avatarUrl: result.info.url });
          }
        } else {
          console.log(error);
        }
      }
    );
  };
  return (
    <Container className="registerForm">
      <Row>
        <Col>
          <img src={login} alt="img-register" style={{ height: "80%" }} />
        </Col>
        <Col className="form-regis">
          <div className="text-center mb-3">
            <h1 style={{ color: "#245404" }}>Sign Up</h1>
            <p className="lead">
              <FontAwesomeIcon
                icon="user"
                size="1x"
                style={{ color: "#245404" }}
              />{" "}
              Create Your Account
            </p>
          </div>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              {/* <Form.Control
                type="image"
                placeholder="Avatar"
                name="avatarUrl"
                value={formData.avatarUrl}
                onChange={handleChange}
              /> */}

              <Col>
                <Form.Label>Avatar</Form.Label>
                <Button variant="success" onClick={() => uploadWidget()}>
                  Upload
                </Button>
              </Col>
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <small className="form-text text-danger">{errors.name}</small>
              )}
            </Form.Group>

            <Form.Group>
              <Form.Control
                type="email"
                placeholder="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <small className="form-text text-danger">{errors.email}</small>
              )}
            </Form.Group>

            <Form.Group>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && (
                <small className="form-text text-danger">
                  {errors.password}
                </small>
              )}
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                name="password2"
                value={formData.password2}
                onChange={handleChange}
              />
            </Form.Group>
            <br />
            {loading ? (
              <Button
                className="btn-block"
                variant="success"
                type="button"
                disabled
              >
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                Loading...
              </Button>
            ) : (
              <Button className="btn-block" type="submit" variant="success">
                Register
              </Button>
            )}

            <p style={{ color: "#245404" }}>
              Already have an account?{" "}
              <Link to="/login" style={{ color: "orange" }}>
                Sign In
              </Link>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;
