import clsx from "clsx";
import { SurfaceRecipe } from "./surface.recipes";

interface SurfaceProps extends React.ComponentPropsWithRef<"div"> {}

export const Surface: React.FC<SurfaceProps> = ({ className, ...props }) => {
  return <div className={clsx(SurfaceRecipe, className)} {...props} />;
};
