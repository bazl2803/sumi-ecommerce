import { cva } from "panda/css";

export const SheetContentRecipe = cva({
    base: {
        border: "none",
        padding: 0,
        margin: 0,
        maxWidth: "none",
        maxHeight: "none",
        backgroundColor: { base: "white", _osDark: "neutral.900" },
        boxShadow: "2xl",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        // Backdrop styling (::backdrop pseudo-element)
        _backdrop: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            animation: "fadeIn 0.2s ease-out",
        },
    },
    variants: {
        side: {
            right: {
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                left: "auto",
                width: { base: "100%", sm: "400px", md: "500px" },
                height: "100vh",
                animation: "slideInRight 0.3s ease-out",
            },
            left: {
                position: "fixed",
                top: 0,
                left: 0,
                bottom: 0,
                right: "auto",
                width: { base: "100%", sm: "400px", md: "500px" },
                height: "100vh",
                animation: "slideInLeft 0.3s ease-out",
            },
            top: {
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: "auto",
                width: "100vw",
                height: { base: "auto", md: "50vh" },
                animation: "slideInTop 0.3s ease-out",
            },
            bottom: {
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                top: "auto",
                width: "100vw",
                height: { base: "auto", md: "50vh" },
                animation: "slideInBottom 0.3s ease-out",
            },
        },
    },
    defaultVariants: {
        side: "right",
    },
});

export const SheetHeaderRecipe = cva({
    base: {
        padding: 6,
        borderBottom: "1px solid",
        borderColor: { base: "neutral.200", _osDark: "neutral.700" },
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexShrink: 0,
    },
});

export const SheetTitleRecipe = cva({
    base: {
        fontSize: "xl",
        fontWeight: 600,
        color: { base: "neutral.900", _osDark: "white" },
    },
});

export const SheetDescriptionRecipe = cva({
    base: {
        fontSize: "sm",
        color: { base: "neutral.600", _osDark: "neutral.400" },
        marginTop: 1,
    },
});

export const SheetBodyRecipe = cva({
    base: {
        padding: 6,
        flex: 1,
        overflowY: "auto",
    },
});

export const SheetFooterRecipe = cva({
    base: {
        padding: 6,
        borderTop: "1px solid",
        borderColor: { base: "neutral.200", _osDark: "neutral.700" },
        display: "flex",
        gap: 3,
        justifyContent: "flex-end",
        flexShrink: 0,
    },
});

export const SheetCloseButtonRecipe = cva({
    base: {
        width: 8,
        height: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "md",
        cursor: "pointer",
        transition: "all 0.2s",
        color: { base: "neutral.500", _osDark: "neutral.400" },
        border: "none",
        backgroundColor: "transparent",
        _hover: {
            backgroundColor: { base: "neutral.100", _osDark: "neutral.800" },
            color: { base: "neutral.900", _osDark: "white" },
        },
    },
});
