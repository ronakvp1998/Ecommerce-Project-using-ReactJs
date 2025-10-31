import { Container, Row, Col, Card, Form } from "react-bootstrap";
import Base from "../components/Base";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
const Login = () => {
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

                <Form>
                  {/* Email Login Feild */}
                  <Form.Group className="mb-3">
                    <Form.Label>Enter Email</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your email"
                    ></Form.Control>
                  </Form.Group>
                  {/* Password Login Feild */}
                  <Form.Group className="mb-3">
                    <Form.Label>Enter Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter your password"
                    ></Form.Control>
                  </Form.Group>
                </Form>
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
                  <Button className="" variant="success">
                    <b>Login</b>
                  </Button>
                  <Button className="ms-2" variant="danger">
                    <b>Reset</b>
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
      title="Electronic Store - Login Page"
      description="Please login to access your account"
    >
      {loginForm()}
    </Base>
  );
};

export default Login;
