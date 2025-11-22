interface TableHeaderCellProps extends React.ComponentPropsWithRef<'th'> {
}

export const TableHeaderCell = ({ className, ...props }: TableHeaderCellProps) => {
    return <th className={className} {...props} />;
};