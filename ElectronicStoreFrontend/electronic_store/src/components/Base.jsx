import { Button, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
const Base = ({
  title = "Page Title",
  description = "Welcome to Trending store, We provide best item as you need",
  buttonEnabled = false,
  buttonText = "Shop Now",
  buttonType = "primary",
  buttonLink = "/",
  children,
}) => {
  let styleContainer = {
    height: "200px",
  };

  return (
    <div>
      <Container
        fluid
        className="bg-dark p-5 text-white text-center d-flex justify-content-center align-items-center"
        style={styleContainer}
      >
        <div>
          <h3 className="text-center">{title}</h3>
          <p className="text-center">{description}</p>
          {buttonEnabled && (
            <Button as={NavLink} to="/" variant={buttonType}>
              {buttonText}
            </Button>
          )}
        </div>
      </Container>
      {children}
      <Footer />
    </div>
  );
};

export default Base;
