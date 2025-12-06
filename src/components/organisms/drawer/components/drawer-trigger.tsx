import React from "react";
import { useDrawer } from "@/components/organisms/drawer/drawer-context";

interface DrawerTriggerProps
    extends React.ComponentPropsWithRef<'div'> {
}

export const DrawerTrigger: React.FC<DrawerTriggerProps> = ({ className, ...props }) => {
    const context = useDrawer()

    return (
        <div className={className} onClick={context.toggle} {...props}/>
    )
}