import Base from "../components/Base";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import logo from "../assets/logo.png";
import { useState } from "react";
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
                <Form>
                  {/* name field */}
                  <Form.Group className="mb-2" controlId="formName">
                    <Form.Label>Enter your name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter name"
                      onChange={(event) => handleChange(event, "name")}
                      value={data.name}
                    />
                  </Form.Group>
                  {/* email field */}
                  <Form.Group className="mb-2" controlId="formEmail">
                    <Form.Label>Enter your Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      onChange={(event) => handleChange(event, "email")}
                      value={data.email}
                    />
                  </Form.Group>
                  {/* password field */}
                  <Form.Group className="mb-2" controlId="formPassword">
                    <Form.Label>Enter your Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter new password"
                      onChange={(event) => handleChange(event, "password")}
                      value={data.password}
                    />
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
                    />
                  </Form.Group>
                </Form>
                <Container className="text-center">
                  <p className="text-center">
                    Already register ! <a href="/login">Login Here</a>
                  </p>
                </Container>
                <Container className="text-center">
                  <Button className="text-uppercase" variant="success">
                    Register
                  </Button>
                  <Button
                    className="ms-2 text-uppercase"
                    variant="danger"
                    onClick={clearData}
                  >
                    Reset
                  </Button>
                </Container>
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
