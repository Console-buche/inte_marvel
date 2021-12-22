import { styled, theme } from "../../styles/config.stitches";

const Search = () => {
  return (
    <SSearch>
      <SInput type="search" name="leSearch" value="Find your passion" />
      <SLabel htmlFor="leSearch">Go</SLabel>
    </SSearch>
  );
};

export default Search;

const SSearch = styled("div", {
  position: "absolute",
  transform: `translate3d(${theme.space.large}, ${theme.space.superExtraLarge}, 0)`,
  outline: "none",
  border: "none",
  right: 0,
  display: "flex",
  alignItems: "center",
  boxShadow: "-8px 12px 20px 0px rgb(0 0 0 / 10%)",
  zIndex: 1,
});

const SInput = styled("input", {
  border: 0,
  paddingLeft: "$large",
  fontSize: "$medium",
  height: "100%",
  width: "15em",
  "&:focus, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration":
    {
      WebkitAppearance: "none",
      outline: "none",
    },
});

const SLabel = styled("label", {
  position: "relative",
  background: "$cta",
  fontWeight: "600",
  fontSize: "$largePlus",
  padding: "$mediumEm",
  textAlign: "center",

  "&:hover": {
    cursor: "pointer",

    "&:after": {
      height: 0,
      transition: "0.15s height ease",
    },
  },

  "&:after": {
    content: "",
    position: "absolute",
    background: "$ctaHover",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
    transition: "0.15s height ease",
  },
});
