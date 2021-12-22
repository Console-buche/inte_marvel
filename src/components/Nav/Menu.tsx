import { styled } from "../../styles/config.stitches";

type ItemList = { items: string[]; defaultActiveID?: number };

const Menu: React.FC<ItemList> = (props) => {
  const { items, defaultActiveID } = props;
  return (
    <SMenu>
      {items.map((item, i) => (
        <SLi
          key={item}
          css={{
            fontWeight: i === defaultActiveID ? "bold" : "normal",
            "&:after": {
              borderBottom:
                i === defaultActiveID ? "1px solid black" : "normal",
            },
          }}
        >
          {item}
        </SLi>
      ))}
    </SMenu>
  );
};

export default Menu;

const SMenu = styled("ul", {
  display: "flex",
  flex: 0.65,
  fontSize: "$small",
  listStyle: "none",
  margin: 0,
  padding: 0,
});

const SLi = styled("li", {
  position: "relative",
  whiteSpace: "nowrap",

  "&:after": {
    content: "",
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },

  "&:not(:last-child)": {
    marginRight: "$medium",
  },
});
