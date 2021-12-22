import { styled } from "../../styles/config.stitches";

const NavLogin = () => {
  return (
    <SLogin>
      <div>Login</div>
      <SCta>Free trial</SCta>
    </SLogin>
  );
};

export default NavLogin;

const SLogin = styled("div", {
  margin: 0,
  display: "flex",
  fontSize: "$small",
  alignItems: "center",

  "div:first-child": {
    paddingRight: "$medium",
  },
});

const SCta = styled("div", {
  padding: "5px 20px",
  background: "$dark",
  color: "white",
  borderRadius: 25,
});
