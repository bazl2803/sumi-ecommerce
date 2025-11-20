import clsx from "clsx";
import { HintRecipe } from "./hint.recipe";
import { TypographyRecipe } from "../typography/typography.recipes";

interface HintProps extends React.ComponentPropsWithRef<"legend"> {
  hidden?: boolean;
}

export const Hint = ({ className, hidden, ...props }: HintProps) => (
  <legend
    className={clsx(
      TypographyRecipe({ role: "footnote" }),
      HintRecipe({ hidden }),
      className
    )}
    {...props}
  />
);
