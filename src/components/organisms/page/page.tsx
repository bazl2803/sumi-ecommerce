import React from "react";
import clsx from "clsx";
import { PageRecipe } from "./page.recipes";

type PageProps = React.ComponentPropsWithRef<"div">;

export const Page = ({ children, className, ...props }: PageProps) => {
  return (
    <div className={clsx(PageRecipe().root, className)} {...props}>
      <div className={PageRecipe().container}>{children}</div>
    </div>
  );
};
