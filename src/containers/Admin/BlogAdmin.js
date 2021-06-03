import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  ButtonGroup,
  Table,
  Card,
} from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { blogActions } from "../../redux/actions/blog.action";
import { routeActions } from "../../redux/actions/route.actions";

const BlogAdmin = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    blogImage: "",
  });
  const loading = useSelector((state) => state.blog.loading);
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();
  const blogs = useSelector((state) => state.blog.blogs);
  const selectedBlog = useSelector((state) => state.blog.selectedBlog);
  const redirectTo = useSelector((state) => state.route.redirectTo);
  const addOrEdit = params.id ? "Edit" : "Add";
  const blogId = params.id;

  useEffect(() => {
    if (blogId) {
      if (!selectedBlog) {
        dispatch(blogActions.getSingleBlog(blogId));
      }
      setFormData((formData) => ({
        ...formData,
        title: selectedBlog.title,
        content: selectedBlog.content,
        blogImage: selectedBlog.blogImage,
      }));
    }
  }, [blogId, selectedBlog, dispatch]);

  const handleChange = (e) => {
    if (e.target.name === "blogImage") {
      console.log(e.target.files);
      setFormData({ ...formData, blogImage: e.target.files });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, content, blogImage } = formData;
    if (addOrEdit === "Add") {
      dispatch(blogActions.createNewBlog(title, content, blogImage));
    } else if (addOrEdit === "Edit") {
      dispatch(
        blogActions.updateBlog(selectedBlog._id, title, content, blogImage)
      );
    }
  };

  const handleCancel = () => {
    history.goBack();
  };

  const handleDelete = () => {
    // TODO : popup confirmation modal
    dispatch(blogActions.deleteblog(selectedBlog._id));
  };

  const handleOnclickEdit = (blogId) => {
    dispatch(blogActions.getSingleBlog(blogId));
  };
  const handleOnclickDelete = () => {};

  useEffect(() => {
    dispatch(blogActions.blogsRequest());
  }, []);
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
  }, [redirectTo, dispatch, history]);

  const uploadWidget = () => {
    window.cloudinary.openUploadWidget(
      {
        cloud_name: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
        upload_preset: process.env.REACT_APP_CLOUDINARY_PRESET,
        multiple: false,
      },
      function (error, result) {
        if (!error) {
          console.log("resultimgblog", result);
          if (result.event === "success") {
            setFormData({ ...formData, blogImage: result.info.url });
          }
        } else {
          console.log(error);
        }
      }
    );
  };

  return (
    <>
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={handleSubmit}>
              <div className="text-center mb-3">
                <h1 className="text-primary">{addOrEdit} blog</h1>
                <p className="lead">
                  <i className="fas fa-user" />
                </p>
              </div>
              <Form.Group>
                <Form.Control
                  type="text"
                  required
                  placeholder="Title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  as="textarea"
                  rows="10"
                  placeholder="Content"
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group>
                {formData && (
                  <img
                    src={formData.blogImage}
                    key={formData.blogImage}
                    width="90px"
                    height="60px"
                    alt="blog images"
                  ></img>
                )}
                <Button variant="success" onClick={uploadWidget}>
                  {addOrEdit} Images
                </Button>
              </Form.Group>
              <ButtonGroup className="d-flex mb-3">
                {loading ? (
                  <Button
                    className="mr-3"
                    variant="success"
                    type="button"
                    disabled
                  >
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Submitting...
                  </Button>
                ) : (
                  <Button className="mr-3" type="submit" variant="success">
                    Submit
                  </Button>
                )}
                <Button
                  variant="light"
                  onClick={handleCancel}
                  disabled={loading}
                >
                  Cancel
                </Button>
              </ButtonGroup>
              {addOrEdit === "Edit" && (
                <ButtonGroup className="d-flex">
                  <Button
                    variant="danger"
                    onClick={handleDelete}
                    disabled={loading}
                  >
                    Delete Blog
                  </Button>
                </ButtonGroup>
              )}
            </Form>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Title</th>
                <th>Content</th>
                <th>Pictures</th>
              </tr>
            </thead>
            <tbody>
              {blogs &&
                blogs.map((item) => (
                  <tr key={item._id}>
                    <td>{item.title}</td>
                    <td>
                      {item?.content?.length <= 150 &&
                      item.content !== undefined
                        ? item.content
                        : item.content.slice(0, 150) + "..."}
                    </td>
                    <td>
                      <img
                        src={item.blogImage}
                        alt="blog-img"
                        width="90px"
                        height="60px"
                      />
                    </td>
                    {/* <th>
                      <span>
                        <Button onClick={() => handleOnclickEdit(item._id)}>
                          EDIT
                        </Button>
                      </span>
                      <span>
                        <Button onClick={() => handleOnclickDelete(item._id)}>
                          DELETE
                        </Button>
                      </span>
                    </th>{" "} */}
                  </tr>
                ))}
            </tbody>
          </Table>
        </Row>
      </Container>
    </>
  );
};

export default BlogAdmin;
