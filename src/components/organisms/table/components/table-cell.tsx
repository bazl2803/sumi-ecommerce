import clsx from "clsx";
import { TableCellRecipe } from "../table.recipes";

interface TableCellProps extends React.ComponentPropsWithRef<'td'> {
}

export const TableCell = ({ className, ...props }: TableCellProps) => {
    return <td className={clsx(TableCellRecipe, className)} {...props} />;
};