import { sva } from "panda/css";

export const InputRecipe = sva({
  slots: ["root", "input"],
  base: {
    root: {
      padding: 2,
      borderRadius: "md",
      outline: "1px solid",
      outlineColor: { base: "neutral.200", _osDark: "neutral.700" },
    },
    input: {
      outline: 'none'
    },
  },
});
