import { Container, Row, Col, Card, Form } from "react-bootstrap";
import Base from "../components/Base";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { toast } from "react-toastify";
import { loginUser } from "../services/user.service";
import { clear } from "@testing-library/user-event/dist/clear";

const Login = () => {
  let [data, setData] = useState({
    email: "",
    password: "",
  });

  let [error, setError] = useState({
    errorData: null,
    isError: false,
  });

  let [loading, setLoading] = useState(false);

  // clear data function
  const clearData = () => {
    setData({
      email: "",
      password: "",
    });
    setErrorData({
      isError: false,
      errorData: null,
    });
  };

  // handle change function
  const handleChange = (event, property) => {
    console.log(event);
    console.log(property);
    setData({ ...data, [property]: event.target.value });
  };

  // submit form function
  const submitForm = (event) => {
    // default behavior of form is off
    event.preventDefault();
    console.log(data);

    // validate client side
    if (data.email === undefined || data.email.trim() === "") {
      toast.error("Email is required");
      return;
    }
    // basic checks
    if (data.password === undefined || data.password.trim() === "") {
      toast.error("Password is required");
      return;
    }

    // login API call
    loginUser(data)
      .then((response) => {
        console.log("User logged in successfully " + response);
        setError({
          errorData: null,
          isError: false,
        });
        toast.success("User logged in successfully");
        clearData();
      })
      .catch((error) => {
        console.log("Error loggin in user " + error);
        setError({
          errorData: error,
          isError: true,
        });
        toast.error("Error loggin in user " + error?.response?.data?.message);
      })
      .finally(() => {
        setLoading(false);
      });

    // submit the data to server
    console.log("submitting data to server " + data);
  };

  const loginForm = () => {
    return (
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }} className="mt-5">
            <Card
              className="border-0 shadow-lg p-4"
              style={{ position: "relative", top: -70 }}
            >
              <Card.Body>
                <Container className="text-center mb-2 ">
                  <img src={logo} alt="logo" width={50}></img>
                </Container>
                <h3 className="text-center">Store Login</h3>

                <Form noValidate onSubmit={submitForm}>
                  {/* Email Login Feild */}
                  <Form.Group className="mb-3">
                    <Form.Label>Enter Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      onChange={(event) => handleChange(event, "email")}
                      value={data.email}
                    ></Form.Control>
                  </Form.Group>
                  {/* Password Login Feild */}
                  <Form.Group className="mb-3">
                    <Form.Label>Enter Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter your password"
                      onChange={(event) => handleChange(event, "password")}
                      value={data.password}
                    ></Form.Control>
                  </Form.Group>
                  <Container className="text-center mb-2 ">
                    <p>
                      Forget Password{" "}
                      <Link as={NavLink} to="/forget">
                        Click here
                      </Link>
                    </p>
                    <p>
                      If not registered!{" "}
                      <Link as={NavLink} to="/register">
                        Click here
                      </Link>
                    </p>
                  </Container>

                  <Container className="text-center">
                    <Button type="submit" className="" variant="success">
                      <b>Login</b>
                    </Button>
                    <Button className="ms-2" variant="danger">
                      <b>Reset</b>
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
      title="Electronic Store - Login Page"
      description="Please login to access your account"
    >
      {loginForm()}
    </Base>
  );
};

export default Login;
