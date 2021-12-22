import { useState } from "react";
import HeroesData from "../../data/data";
import { TAvailableHeroes } from "../../interfaces/Heroes.types";
import { styled } from "../../styles/config.stitches";
import SuperHero from "./SuperHero";

const Slider = () => {
  const [selected, setSelected] = useState<TAvailableHeroes | null>(
    "wonderwoman"
  );

  const handelSel = (name: TAvailableHeroes) => {
    setSelected(name);
  };

  return (
    <SContainer>
      {Object.entries(HeroesData).map((hero, id) => (
        <SuperHero
          hero={hero[1]}
          key={hero[0]}
          id={id}
          seled={selected}
          setSeled={handelSel}
        />
      ))}
    </SContainer>
  );
};

export default Slider;

const SContainer = styled("div", {
  flex: 1,
  boxSizing: "border-box",
  display: "flex",
});
