import { cva } from "panda/css";

export const DropdownContentRecipe = cva({
    base: {
        position: "absolute",
        top: "calc(100% + 8px)",
        right: 0,
        minWidth: "200px",
        backgroundColor: { base: "white", _osDark: "neutral.900" },
        borderRadius: "lg",
        boxShadow: "lg",
        border: "1px solid",
        borderColor: { base: "neutral.200", _osDark: "neutral.700" },
        zIndex: 500,
        padding: 1,
        display: "flex",
        flexDirection: "column",
        gap: 1,
        animation: "fade-in 0.2s ease-out",
    },
});
