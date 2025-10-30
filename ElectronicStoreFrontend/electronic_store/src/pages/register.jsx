import Base from "../components/Base";
import {
  Container,
  Row,
  Col,
  Form,
  Card,
  Spinner,
  Button,
} from "react-bootstrap";
import logo from "../assets/logo.png";
import { useState } from "react";
import { toast } from "react-toastify";
import { registerUser } from "../services/user.service";
const Register = () => {
  let [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    about: "",
    gender: "",
  });

  const [errorData, setErrorData] = useState({
    isError: false,
    errorData: null,
  });

  const [loading, setLoading] = useState(false);

  // handle change function
  const handleChange = (event, property) => {
    console.log(event);
    console.log(property);
    setData({ ...data, [property]: event.target.value });
  };

  // clear data function
  const clearData = () => {
    setData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      about: "",
      gender: "",
    });
    setErrorData({
      isError: false,
      errorData: null,
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
    console.log(data);
    // validate client side
    if (data.name == undefined || data.name.trim() === "") {
      toast.error("Name is required");
      return;
    }
    if (data.email == undefined || data.email.trim() === "") {
      toast.error("Email is required");
      return;
    }
    // basic checks
    if (data.password == undefined || data.password.trim() === "") {
      toast.error("Password is required");
      return;
    }
    if (data.password != data.confirmPassword) {
      toast.error("Password and Confirm Password does not match");
      return;
    }
    if (data.gender == undefined || data.gender === "") {
      toast.error("Gender is required");
      return;
    }
    // submit the data to server
    registerUser(data)
      .then((userData) => {
        console.log("submitting data to server " + userData);
        toast.success(
          "User is registered successfully with email " + userData.email
        );
        clearData();
      })
      .catch((error) => {
        console.log(error);
        setErrorData({
          isError: true,
          errorData: error,
        });
        toast.error("Something went wrong in registration");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const RegisterForm = () => {
    return (
      <Container>
        {/* grid system 12 grids */}
        <Row>
          {/* {JSON.stringify(data)} */}
          <Col sm={{ span: 8, offset: 2 }}>
            <Card
              className="my-2 border-0 shadow-lg p-4"
              style={
                {
                  // position: "relative",
                  // top: -30,
                }
              }
            >
              <Card.Body>
                <Container className="text-center mb-2 ">
                  <img src={logo} alt="logo" width={50}></img>
                </Container>
                <h3 className="mb-4 text-center text-uppercase">
                  Store Signup Here
                </h3>
                <Form noValidate onSubmit={submitForm}>
                  {/* name field */}
                  <Form.Group className="mb-2" controlId="formName">
                    <Form.Label>Enter your name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter name"
                      onChange={(event) => handleChange(event, "name")}
                      value={data.name}
                      isInvalid={errorData.errorData?.response?.data?.name}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errorData.errorData?.response?.data?.name}
                    </Form.Control.Feedback>
                  </Form.Group>
                  {/* email field */}
                  <Form.Group className="mb-2" controlId="formEmail">
                    <Form.Label>Enter your Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      onChange={(event) => handleChange(event, "email")}
                      value={data.email}
                      isInvalid={errorData.errorData?.response?.data?.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errorData.errorData?.response?.data?.email}
                    </Form.Control.Feedback>
                  </Form.Group>
                  {/* password field */}
                  <Form.Group className="mb-2" controlId="formPassword">
                    <Form.Label>Enter your Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter new password"
                      onChange={(event) => handleChange(event, "password")}
                      value={data.password}
                      isInvalid={errorData.errorData?.response?.data?.password}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errorData.errorData?.response?.data?.password}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-2" controlId="formConfirmPassword">
                    <Form.Label>Re Enter your Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Re Enter your password"
                      onChange={(event) =>
                        handleChange(event, "confirmPassword")
                      }
                      value={data.confirmPassword}
                    />
                  </Form.Group>
                  <Form.Group className="mb-2">
                    <div>
                      <Form.Label className="mb-2">Select Gender:</Form.Label>
                      <Form.Check
                        inline
                        label="Male"
                        name="gender"
                        type={"radio"}
                        id={`gender`}
                        value={"male"}
                        checked={data.gender === "male"}
                        onChange={(event) => handleChange(event, "gender")}
                      />
                      <Form.Check
                        inline
                        name="gender"
                        label="Female"
                        type={"radio"}
                        value={"female"}
                        checked={data.gender === "female"}
                        id={`gender`}
                        onChange={(event) => handleChange(event, "gender")}
                      />
                    </div>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Write Something about yourself</Form.Label>
                    <Form.Control
                      as={"textarea"}
                      rows="3"
                      placeholder="write here"
                      onChange={(event) => handleChange(event, "about")}
                      value={data.about}
                      isInvalid={errorData.errorData?.response?.data?.about}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errorData.errorData?.response?.data?.about}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Container className="text-center">
                    <p className="text-center">
                      Already register ! <a href="/login">Login Here</a>
                    </p>
                  </Container>
                  <Container className="text-center">
                    <Button
                      type="submit"
                      className="text-uppercase"
                      variant="success"
                      disabled={loading}
                    >
                      <Spinner
                        animation="grow"
                        size="sm"
                        className="me-2"
                        hidden={!loading}
                      />
                      <span hidden={!loading}>wait...</span>
                      <span hidden={loading}>Register</span>
                    </Button>
                    <Button
                      className="ms-2 text-uppercase"
                      variant="danger"
                      onClick={clearData}
                    >
                      Reset
                    </Button>
                  </Container>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  };
  return (
    <Base
      title="Electronic Store - Register"
      description="fill the form correctly to register yourself. By registering you agree to our terms and conditions."
      buttonEnabled={true}
    >
      {RegisterForm()}
    </Base>
  );
};

export default Register;
