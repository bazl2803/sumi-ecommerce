import clsx from "clsx";
import React from "react";
import { TileRecipe } from "./tile.recipes";
import { Surface } from "@/components";

interface TileProps extends React.ComponentPropsWithRef<"div"> {}

export const Tile = ({ className, ...props }: TileProps) => {
  return <Surface className={clsx(TileRecipe, className)} {...props} />;
};
