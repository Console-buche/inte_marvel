import { useEffect, useState } from "react";
import { styled } from "../../styles/config.stitches";
import assetHeroes from "../../img/heroes.images";
import Tag from "./Tag";
import { TAvailableHeroes, THeroCard } from "../../interfaces/Heroes.types";

const SuperHero = ({
  hero,
  seled,
  setSeled,
  id,
}: {
  hero: THeroCard<TAvailableHeroes>;
  seled: TAvailableHeroes | null;
  setSeled: (name: TAvailableHeroes) => void;
  id: number;
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const { name, description } = hero;

  const handleMouseEnter = () => {
    setSeled(name);
  };

  useEffect(() => {
    setIsSelected(seled === name);
  }, [seled, name]);

  return (
    <SSuperHero
      onMouseEnter={handleMouseEnter}
      css={{
        flex: isSelected ? 1 : 0.3,
        backgroundImage: `url(${assetHeroes[name]})`,
      }}
    >
      <Tag
        name={name}
        description={description}
        shouldShow={id !== 0}
        seled={isSelected}
      />
    </SSuperHero>
  );
};

export default SuperHero;

const SSuperHero = styled("div", {
  position: "relative",
  flex: 1,
  margin: "calc($medium * .5)",
  transition: "0.25s flex",
  borderRadius: "10px",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",

  "&:before": {
    content: "",
    position: "absolute",
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(255, 255, 255, 0) 30%)",
    borderRadius: "10px",
  },

  "&:last-child": {
    marginRight: "$medium",
  },

  "&:hover": {
    cursor: "pointer",
  },

  "&:not(:hover)": {
    transition: "0.25s flex ",
  },
});
