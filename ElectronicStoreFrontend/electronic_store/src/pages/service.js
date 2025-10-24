import Base from "../components/Base";
function Service() {
  return (
    <Base
      title="Services we provide"
      description="In this page we will discuss about the services that we provide"
      buttonEnabled={true}
      buttonLink="/"
      buttonType="warning"
      buttonText="Home"
    >
      <div>This is Service Page</div>
    </Base>
  );
}

export default Service;
