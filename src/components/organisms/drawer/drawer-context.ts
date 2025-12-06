import React from "react";

interface DrawerContextType {
    isOpen: boolean
    toggle: () => void
    close: () => void
}

export const DrawerContext =
    React.createContext<DrawerContextType | undefined>(undefined)

export const useDrawer = () => {
    return (
        React.useContext(DrawerContext)
        ?? new Error("useDrawer must be used within a DrawerProvider")
    ) as DrawerContextType;
}