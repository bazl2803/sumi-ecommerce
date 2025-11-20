import { cva } from "panda/css";

export const ButtonRecipe = cva({
  base: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "lg",
    fontWeight: 500,
    gap: 2,
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: { base: "primary", _osDark: "secondary" },
        color: { base: "white", _osDark: "black" },
      },
      secondary: {
        backgroundColor: { base: "primary/10", _osDark: "neutral.900" },
        color: { base: "primary", _osDark: "white" },
      },
      ghost: {
        backgroundColor: "transparent",
        color: { base: "black", _osDark: "white" },
        _hover: {
          backgroundColor: { base: "neutral.100", _osDark: "neutral.900" },
          outline: "1px solid",
          outlineColor: { base: "neutral.200", _osDark: "neutral.700" },
        },
      },
      link: {
        backgroundColor: "transparent",
        color: { base: "primary", _osDark: "secondary" },
      },
      outline: {
        backgroundColor: "transparent",
        color: { base: "primary", _osDark: "secondary" },
        outline: "1px solid",
        outlineColor: { base: "primary/50", _osDark: "secondary/50" },
      },
    },
    size: {
      sm: {
        paddingX: 2,
        paddingY: 1,
        fontSize: "xs",
      },
      md: {
        paddingX: 3,
        paddingY: 2,
        fontSize: "sm",
      },
      lg: {
        paddingX: 4,
        paddingY: 3,
        fontSize: "md",
      },
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});
