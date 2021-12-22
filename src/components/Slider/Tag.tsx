import { styled } from "../../styles/config.stitches";
import stitchesAnims from "../../styles/keyframes.stitches";

const Tag = ({
  name,
  description,
  shouldShow,
  seled,
}: {
  name: string;
  description: string;
  shouldShow: boolean;
  seled: boolean;
}) => {
  return (
    <>
      {shouldShow && !seled && (
        <SSquare>
          <STag
            css={{
              transform: seled ? "" : "rotateZ(-90deg)",
              textIndent: "1.5em",
            }}
          >
            {name}
          </STag>
        </SSquare>
      )}
      {seled && (
        <SSquare
          css={{
            left: !shouldShow ? "$extraLarge" : "calc($extraLarge/2)",
            background: "transparent",
          }}
        >
          <STag>{name}</STag>
          <SDetails>{description}</SDetails>
        </SSquare>
      )}
    </>
  );
};

export default Tag;

const SSquare = styled("div", {
  position: "absolute",
  bottom: "$medium",
  width: "$extraLarge",
  height: "$extraLarge",
  background: "$darkBlue",

  animation: `${stitchesAnims.fadeIn()} .5s`,
});

const STag = styled("span", {
  color: "$light",
  fontWeight: "bold",
  width: "$extraLarge",
  textTransform: "capitalize",
  fontSize: "$large",
  display: "block",
});

const SDetails = styled("span", {
  color: "$light",
  fontWeight: "bold",
  fontSize: "$medium",
  whiteSpace: "nowrap",
});
