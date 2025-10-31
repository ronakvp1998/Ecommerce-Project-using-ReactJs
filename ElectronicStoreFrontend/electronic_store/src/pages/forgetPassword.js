import Base from "../components/Base";
function ForgetPassword() {
  return (
    <Base
      title="Forget Password Page"
      description="In this page you can reset your password"
      buttonEnabled={true}
      buttonLink="/"
      buttonType="warning"
      buttonText="Home"
    >
      <div>This is Forget Password Page</div>
    </Base>
  );
}

export default ForgetPassword;
