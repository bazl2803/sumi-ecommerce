interface TableHeaderProps extends React.ComponentPropsWithRef<'thead'> {
}

export const TableHeader = ({ className, ...props }: TableHeaderProps) => {
    return <thead className={className} {...props} />;
};