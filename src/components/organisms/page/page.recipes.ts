import { css, sva } from "panda/css";

export const PageRecipe = sva({
  slots: ["root", "container"],
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      height: "full",
      fontFamily: "var(--font-geist-sans)",
      paddingInline: 2,
      paddingBlock: 2,
    },
    container: {
      borderRadius: "2xl",
      maxWidth: "7xl",
      margin: "auto",
      height: "full",
      width: "full",
      backgroundColor: { base: "white", _osDark: "black" },
      outline: "1px solid",
      outlineColor: { base: "neutral.200", _osDark: "neutral.900" },
    },
  },
});

export const PageHeaderRecipe = css({
  paddingX: 6,
  paddingY: 2,
  background: {
    base: "linear-gradient(white 30%,transparent 100%)",
    _osDark: "linear-gradient(black 30%,transparent 100%)",
  },
  overflow: "hidden",
  borderTopRadius: "2xl",
  position: "sticky",
  top: 0,
  left: 0,
  zIndex: 100,
});

export const PageContentRecipe = css({
  maxWidth: "7xl",
  margin: "auto",
  paddingX: 6,
  paddingY: 6,
});

export const PageFooterRecipe = css({
  paddingX: 2,
});
