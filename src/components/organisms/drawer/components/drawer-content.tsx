import React from "react";

interface DrawerContentProps extends React.ComponentPropsWithRef<'div'> {
}

export const DrawerContent: React.FC<DrawerContentProps> = ({ className, ...props }) => {
    return (
        <div className={className} {...props}>
            Drawer Content
        </div>
    )
}
