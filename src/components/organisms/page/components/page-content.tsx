import React from "react";
import clsx from "clsx";
import { PageContentRecipe } from "../page.recipes";

interface PageContentProps extends React.ComponentPropsWithRef<"div"> {}

export const PageContent: React.FC<PageContentProps> = ({
  children,
  className,
}) => {
  return <div className={clsx(PageContentRecipe, className)}>{children}</div>;
};
