import { styled, theme } from "../../styles/config.stitches";
import Search from "./Search";

const Hero = () => {
  return (
    <>
      <SHero>
        <SPhrase>
          <span>Watch.</span>
          <span>Learn.</span>
          <span>Grow.</span>
        </SPhrase>
        <Search />
      </SHero>
    </>
  );
};

export default Hero;

const SHero = styled("div", {
  position: "relative",
  flex: 1,
  maxWidth: "33%",
  padding: "$medium",
  boxSizing: "border-box",
});

const SPhrase = styled("div", {
  display: "flex",
  flexDirection: "column",
  fontSize: "$extraLarge",
  lineHeight: "$medium",
  transform:`translateY(${theme.space.large})`
});
