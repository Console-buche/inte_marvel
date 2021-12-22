import { globalCss } from "@stitches/react";
import Poppins from "./fonts/poppins.ttf";

const globalStylesStiches = globalCss({
  body: {
    margin: "0",
    fontFamily: "Poppins !important",
    color: "$dark",
  },
  "@font-face": {
    fontFamily: "Poppins",
    src: `local('Exocet'), url(${Poppins}) format("ttf");`,
    fontWeight: 300,
    fontStyle: "normal",
  },
});

export default globalStylesStiches;
