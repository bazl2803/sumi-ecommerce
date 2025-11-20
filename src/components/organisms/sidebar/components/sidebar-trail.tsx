import React from "react";
import clsx from "clsx";
import { SidebarTrailRecipe } from "../sidebar.recipes";

interface SidebarTrailProps extends React.ComponentPropsWithRef<"aside"> {}

export const SidebarTrail: React.FC<SidebarTrailProps> = ({
  className,
  ...props
}) => {
  return <aside className={clsx(SidebarTrailRecipe, className)} {...props} />;
};
