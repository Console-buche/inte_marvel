import { styled } from "../../styles/config.stitches";
import LogoDot from "./LogoDot";

const Logo = () => {
  return (
    <SLogo>
      Skillex
      <LogoDot />
    </SLogo>
  );
};

export default Logo;

const SLogo = styled("div", {
  fontSize: "$largePlus",
  fontWeight: "bold",

  span: {
    color: "$logoDot",
  },
});
