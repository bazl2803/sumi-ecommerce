import { css, cva } from "panda/css";

export const ButtonRecipe = cva({
  base: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "lg",
    fontWeight: 500,
    gap: 2,
    "&:has(span)": {
      paddingInline: 4,
    },
  },
  variants: {
    variant: {
      solid: {
        backgroundColor: { base: "black", _osDark: "white" },
        color: { base: "white", _osDark: "black" },
        _hover: {
          backgroundColor: { base: "neutral.200", _osDark: "neutral.700" },
        },
      },
      outline: {
        outlineWidth: 1,
        outlineStyle: "solid",
        outlineColor: { base: "neutral.200", _osDark: "neutral.700" },
        _hover: {
          backgroundColor: { base: "neutral.100", _osDark: "neutral.800" },
        },
      },
      ghost: {
        _hover: {
          backgroundColor: { base: "neutral.100", _osDark: "neutral.800" },
        },
      },
      link: {
        textDecoration: "none",
        color: { base: "black", _osDark: "white" },
        _hover: {
          textDecoration: "underline",
        },
      },
      subtle: {
        outlineWidth: 1,
        outlineStyle: "solid",
        outlineColor: { base: "neutral.200", _osDark: "neutral.700" },
        backgroundColor: { base: "neutral.100", _osDark: "neutral.800" },
        _hover: {
          backgroundColor: { base: "neutral.200", _osDark: "neutral.700" },
        },
      },
      soft: {
        backgroundColor: { base: "neutral.100", _osDark: "neutral.800" },
        _hover: {
          backgroundColor: { base: "neutral.200", _osDark: "neutral.700" },
        },
      },
    },
    rounded: {
      none: { borderRadius: 0 },
      sm: { borderRadius: "sm" },
      md: { borderRadius: "md" },
      lg: { borderRadius: "lg" },
      full: { borderRadius: "full" },
    },
    size: {
      sm: {
        padding: 1,
        fontSize: "sm",
        height: "36px",
      },
      md: {
        padding: 2,
        fontSize: "md",
        height: "40px",
      },
      lg: {
        padding: 3,
        fontSize: "lg",
        height: "56px",
      },
    },
  },
  defaultVariants: {
    variant: "solid",
    size: "md",
    rounded: "full",
  },
});
9;
export const ButtonLabelRecipe = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontWeight: 500,
  paddingInline: 1,
  gap: 2,
});
