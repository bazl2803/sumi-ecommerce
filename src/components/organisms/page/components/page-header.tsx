import React, { ComponentPropsWithRef } from "react";
import { PageHeaderRecipe } from "../page.recipes";
import clsx from "clsx";

interface PageHeaderProps extends ComponentPropsWithRef<"header"> {}

export const PageHeader: React.FC<PageHeaderProps> = ({
  className,
  ...props
}) => {
  return (
    <header
      className={clsx(PageHeaderRecipe, className)}
      style={{ backdropFilter: "blur(1px)" }}
      {...props}
    />
  );
};
