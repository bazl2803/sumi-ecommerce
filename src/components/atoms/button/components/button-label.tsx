import clsx from "clsx";
import { ButtonLabelRecipe } from "../button.recipes";

interface ButtonLabelProps
    extends React.ComponentPropsWithRef<'span'> { }

export const ButtonLabel = ({ children, className, ...props }: ButtonLabelProps) => {
    return <span className={clsx(ButtonLabelRecipe, className)} {...props} />;
};