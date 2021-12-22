import { TAvailableHeroes } from "../interfaces/Heroes.types";

type HeroesAssets = { [key in TAvailableHeroes]: string };

const assetHeroes: HeroesAssets = {
  batman: require("./batman.jpg").default,
  superman: require("./superman.jpg").default,
  wonderwoman: require("./wonderwoman.jpg").default,
  joker: require("./joker.jpg").default,
  spiderman: require("./spiderman.jpg").default,
  ironman: require("./ironman.jpg").default,
};

export default assetHeroes;
