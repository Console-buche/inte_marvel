import { styled } from "../../styles/config.stitches";

const LogoDot = () => {
  return <SLogoDot>.</SLogoDot>;
};

export default LogoDot;

const SLogoDot = styled("span", {
  color: "$logoDot",
});
