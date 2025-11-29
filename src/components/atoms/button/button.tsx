import React from 'react'
import { ButtonRecipe } from './button.recipes'

interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
	variant?: 'solid' | 'outline' | 'ghost' | 'link' | 'subtle' | 'soft'
	size?: 'sm' | 'md' | 'lg'
}

export const Button: React.FC<ButtonProps> = ({ variant, size, ...props }) => {
	return (
		<button
			className={ButtonRecipe({ variant, size })}
			{...props}
		/>
	)
}
