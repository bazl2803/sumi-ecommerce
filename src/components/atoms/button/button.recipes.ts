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
        backgroundColor: { base: "black", _osDark: "white" },
        color: { base: "white", _osDark: "black" },
        outline: "1px solid",
        outlineColor: { base: "neutral.200", _osDark: "neutral.700" },
      },
      secondary: {
        backgroundColor: { base: "neutral.100", _osDark: "neutral.900" },
        color: { base: "black", _osDark: "white" },
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
        color: { base: "black", _osDark: "white" },
      },
      outline: {
        backgroundColor: "transparent",
        color: { base: "black", _osDark: "white" },
        outline: "1px solid",
        outlineColor: { base: "neutral.200", _osDark: "neutral.700" },
      },
    },
    size: {
      sm: {
        paddingX: 2,
        paddingY: 1,
        fontSize: "sm",
        height: "36px"
      },
      md: {
        paddingX: 3,
        paddingY: 2,
        fontSize: "md",
        height: "40px"
      },
      lg: {
        paddingX: 4,
        paddingY: 3,
        fontSize: "lg",
        height: "56px"
      },
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export const ButtonLabelRecipe = cva({
  base: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: 500,
    gap: 2,
  },
});
