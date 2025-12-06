# Sheet Component

A slide-out panel component (also known as a drawer or side panel) that slides in from any side of the screen. Built using the native HTML `<dialog>` element for better accessibility and browser support.

## Features

- 🎯 **Native HTML `<dialog>` element** - Better accessibility and browser support
- ✨ Slides in from **right**, **left**, **top**, or **bottom**
- 🎨 Smooth animations with native backdrop
- ⌨️ **Native keyboard support** - ESC key handled by browser
- 🔒 **Native focus trap** - Browser handles focus management
- 📱 **Responsive** - Full width on mobile, fixed width on desktop
- ♿ **Accessible** - Built-in ARIA attributes from dialog element
- 🎯 **Click backdrop to close** - Native backdrop click detection
- 🧩 **Composable** - Built with sub-components for flexibility

## Components

- `Sheet` - Main wrapper component
- `SheetHeader` - Header section with border
- `SheetTitle` - Title text (h2)
- `SheetDescription` - Description text
- `SheetBody` - Scrollable content area
- `SheetFooter` - Footer section with border (typically for actions)
- `SheetClose` - Close button with X icon

## Usage

### Basic Example

```tsx
import { useState } from 'react'
import {
	Sheet,
	SheetHeader,
	SheetTitle,
	SheetDescription,
	SheetBody,
	SheetFooter,
	SheetClose,
} from '@/components'

function MyComponent() {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<button onClick={() => setIsOpen(true)}>Open Sheet</button>

			<Sheet
				open={isOpen}
				onOpenChange={setIsOpen}
			>
				<SheetHeader>
					<div>
						<SheetTitle>Sheet Title</SheetTitle>
						<SheetDescription>Sheet description goes here</SheetDescription>
					</div>
					<SheetClose onClose={() => setIsOpen(false)} />
				</SheetHeader>

				<SheetBody>
					<p>Your content goes here</p>
				</SheetBody>

				<SheetFooter>
					<button onClick={() => setIsOpen(false)}>Cancel</button>
					<button onClick={() => setIsOpen(false)}>Save</button>
				</SheetFooter>
			</Sheet>
		</>
	)
}
```

### Different Sides

```tsx
// Slide from right (default)
<Sheet open={isOpen} onOpenChange={setIsOpen} side="right">
  {/* ... */}
</Sheet>

// Slide from left
<Sheet open={isOpen} onOpenChange={setIsOpen} side="left">
  {/* ... */}
</Sheet>

// Slide from top
<Sheet open={isOpen} onOpenChange={setIsOpen} side="top">
  {/* ... */}
</Sheet>

// Slide from bottom
<Sheet open={isOpen} onOpenChange={setIsOpen} side="bottom">
  {/* ... */}
</Sheet>
```

### Without Footer

```tsx
<Sheet
	open={isOpen}
	onOpenChange={setIsOpen}
>
	<SheetHeader>
		<div>
			<SheetTitle>Information</SheetTitle>
		</div>
		<SheetClose onClose={() => setIsOpen(false)} />
	</SheetHeader>

	<SheetBody>
		<p>Content without footer</p>
	</SheetBody>
</Sheet>
```

## Props

### Sheet

| Prop           | Type                                     | Default   | Description                         |
| -------------- | ---------------------------------------- | --------- | ----------------------------------- |
| `open`         | `boolean`                                | -         | Controls whether the sheet is open  |
| `onOpenChange` | `(open: boolean) => void`                | -         | Callback when open state changes    |
| `side`         | `'right' \| 'left' \| 'top' \| 'bottom'` | `'right'` | Side from which the sheet slides in |
| `children`     | `React.ReactNode`                        | -         | Sheet content                       |

### SheetClose

| Prop      | Type         | Description                           |
| --------- | ------------ | ------------------------------------- |
| `onClose` | `() => void` | Callback when close button is clicked |

## Styling

The component uses Panda CSS recipes. You can customize the styles by modifying `sheet.recipes.ts`.

## Accessibility

- Uses native HTML `<dialog>` element with built-in accessibility features
- Native `showModal()` method provides automatic focus trap
- Native ESC key handling (browser-managed)
- Native backdrop click detection
- Includes proper ARIA labels on close button
- Browser automatically manages focus when dialog opens/closes

## Notes

- Uses native `<dialog>` element with `showModal()` for proper modal behavior
- Browser automatically handles body scroll lock and focus management
- Clicking the backdrop (outside the sheet) closes it
- ESC key closes the sheet (handled natively by the browser)
- The sheet is responsive - full width on mobile, fixed width on larger screens
- All animations are defined in `panda.config.ts` keyframes
- The `::backdrop` pseudo-element is styled via Panda CSS recipes
