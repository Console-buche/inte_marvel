import { styled } from "../../styles/config.stitches";
import NavLogin from "./NavLogin";
import Logo from "./Logo";
import Menu from "./Menu";

const Nav = () => {
  const hardCodedlist = ["Find passion", "Categories", "Skills", "Customer"];
  return (
    <SContainer>
      <Logo />
      <Menu items={hardCodedlist} />
      <NavLogin />
    </SContainer>
  );
};

export default Nav;

const SContainer = styled("div", {
  padding: "$medium",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
