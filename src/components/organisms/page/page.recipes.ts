import { css, sva } from "panda/css";

export const PageRecipe = sva({
  slots: ["root", "container"],
  base: {
    root: {
      height: "full",
    },
    container: {
      display: "flex",
      flexDirection: "column",
      rowGap: 2,
      borderRadius: { lg: "xl" },
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
  padding: 6,
  background: {
    base: "linear-gradient(white 0%,transparent 100%)",
    _osDark: "linear-gradient(black 0%,transparent 100%)",
  },
  overflow: "visible",
  borderTopRadius: "xl",
  position: "sticky",
  top: 0,
  left: 0,
  zIndex: 100,
});

export const PageContentRecipe = css({
  display: "flex",
  flexDirection: "column",
  rowGap: 4,
  maxWidth: "7xl",
  marginInline: "auto",
  width: "full",
  paddingInline: 6
});

export const PageFooterRecipe = css({
  paddingX: 6,
});
