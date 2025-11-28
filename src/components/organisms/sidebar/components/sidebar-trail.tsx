import clsx from 'clsx'
import { SidebarTrailRecipe } from '../sidebar.recipes'

interface SidebarTrailProps extends React.HTMLAttributes<HTMLDivElement> {}

export const SidebarTrail: React.FC<SidebarTrailProps> = ({ className, ...props }) => {
	return (
		<div
			className={clsx(SidebarTrailRecipe, className)}
			{...props}
		/>
	)
}
