import { TAvailableHeroes, THeroes } from "../interfaces/Heroes.types";

const HeroesData: THeroes<TAvailableHeroes> = {
  batman: { description: `Bat guy`, name: "batman" },
  superman: { description: `Way too nice`, name: "superman" },
  wonderwoman: { description: `Smack ye face`, name: "wonderwoman" },
  joker: { description: `Batshit`, name: "joker" },
  spiderman: { description: `Latex boy`, name: "spiderman" },
  ironman: { description: `Clonk!`, name: "ironman" },
};

export default HeroesData;
