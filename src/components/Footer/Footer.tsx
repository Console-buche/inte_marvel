import { styled } from "../../styles/config.stitches";
import LogoDot from "../Nav/LogoDot";
import Menu from "../Nav/Menu";

const Footer = () => {
  const hardCodedlist = [
    "All categories",
    "Entertainment",
    "Lifestyle",
    "Writing",
    "Business",
    "Food",
  ];

  return (
    <SFooter>
      <STitle>
        Unlimited access to 100+ instructors
        <LogoDot />
      </STitle>
      <Menu items={hardCodedlist} defaultActiveID={0} />
    </SFooter>
  );
};

export default Footer;

const SFooter = styled("footer", {
  display: "flex",
  alignItems: "center",
  marginTop: "$extraLarge",
  marginBottom: "$extraLarge",
  flexDirection: "column",
});

const STitle = styled("h1");
