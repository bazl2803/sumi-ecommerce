import { css, sva } from "panda/css";

export const SidebarRecipe = css({
  display: "flex",
  flexDirection: "column",
  paddingY: 6,
  height: "full",
  width: 240,
  position: "relative",
  rowGap: 8,
  maxHeight: "screen"
});

export const SidebarHeaderRecipe = sva({
  slots: ["root", "logo"],
  base: {
    root: {
      display: "flex",
      justifyContent: "space-between",
      paddingInline: 6,
    },
    logo: {
      height: "32px",
      width: "auto",
    },
  },
});


export const SidebarTriggerRecipe = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "full",
});

export const SidebarSectionRecipe = sva({
  slots: ["root", "title", "list"],
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: 2,
    },
    title: {
      fontWeight: "500",
      fontSize: "xs",
      paddingX: 6,
      color: "neutral.400",
    },
    list: {
      display: "flex",
      flexDirection: "column",
      gap: 1,
    },
  },
  variants: {
    grow: {
      true: {
        root: {
          flexGrow: 1,
        },
      },
    },
  },
});

export const SidebarItemRecipe = sva({
  slots: ["root", "icon", "label", "wrapper"],
  base: {
    root: {
      cursor: "pointer",
      paddingInline: 4,
    },
    label: {
      fontWeight: "500",
      fontSize: "sm",
    },
    wrapper: {
      display: "flex",
      alignItems: "center",
      borderRadius: "lg",
      padding: 2,
      gap: 2,
    },
  },
  variants: {
    selected: {
      true: {
        root: {
          borderLeft: 4,
          borderLeftStyle: "solid",
          borderLeftColor: "secondary",
          //** Border Size - Previous Padding */
          paddingLeft: 3,
        },
        wrapper: {
          outline: "1px solid",
          outlineColor: { base: "neutral.200", _osDark: "neutral.800" },
          backgroundColor: { base: "white", _osDark: "black" },
        },
      },
      false: {
        wrapper: {
          _hover: {
            backgroundColor: { base: "neutral.100", _osDark: "neutral.900" },
          },
        },
      },
    },
    collapsed: {
      true: {
        label: {
          display: "none",
        },
      },
    },
  },
  defaultVariants: {
    collapsed: false,
  },
});
