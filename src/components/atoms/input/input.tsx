import React from "react";
import clsx from "clsx";
import { SurfaceRecipe } from "../surface/surface.recipes";
import { InputRecipe } from "./input.recipes";

interface InputProps extends React.ComponentPropsWithRef<"input"> {
  variant?: "solid" | "outline";
}

export const Input = ({
  variant = "outline",
  className,
  ...props
}: InputProps) => {
  const styles = InputRecipe();

  return (
    <div className={(clsx(SurfaceRecipe({ variant })), styles.root)}>
      <input className={clsx(styles.input, className)} {...props} />
    </div>
  );
};
