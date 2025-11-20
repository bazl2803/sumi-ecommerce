import { ToolbarRecipe } from "./toolbar.recipes";

interface ToolbarProps {
  children: React.ReactNode;
}

export const Toolbar: React.FC<ToolbarProps> = ({ children }) => {
  return <div className={ToolbarRecipe}>{children}</div>;
};
