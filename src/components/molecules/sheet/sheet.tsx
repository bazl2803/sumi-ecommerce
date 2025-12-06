'use client'
import React, { useEffect, useRef } from 'react'
import {
    SheetContentRecipe,
    SheetHeaderRecipe,
    SheetTitleRecipe,
    SheetDescriptionRecipe,
    SheetBodyRecipe,
    SheetFooterRecipe,
    SheetCloseButtonRecipe,
} from './sheet.recipes'

interface SheetProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    side?: 'right' | 'left' | 'top' | 'bottom'
    children: React.ReactNode
}

interface SheetHeaderProps {
    children: React.ReactNode
}

interface SheetTitleProps {
    children: React.ReactNode
}

interface SheetDescriptionProps {
    children: React.ReactNode
}

interface SheetBodyProps {
    children: React.ReactNode
}

interface SheetFooterProps {
    children: React.ReactNode
}

export const Sheet: React.FC<SheetProps> = ({ open, onOpenChange, side = 'right', children }) => {
    const dialogRef = useRef<HTMLDialogElement>(null)

    // Handle opening and closing the dialog
    useEffect(() => {
        const dialog = dialogRef.current
        if (!dialog) return

        if (open) {
            dialog.showModal()
        } else {
            dialog.close()
        }
    }, [open])

    // Handle dialog close event (ESC key)
    useEffect(() => {
        const dialog = dialogRef.current
        if (!dialog) return

        const handleClose = () => {
            onOpenChange(false)
        }

        const handleCancel = (e: Event) => {
            e.preventDefault()
            onOpenChange(false)
        }

        dialog.addEventListener('close', handleClose)
        dialog.addEventListener('cancel', handleCancel)

        return () => {
            dialog.removeEventListener('close', handleClose)
            dialog.removeEventListener('cancel', handleCancel)
        }
    }, [onOpenChange])

    // Handle backdrop click
    const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
        const dialog = dialogRef.current
        if (!dialog) return

        const rect = dialog.getBoundingClientRect()
        const isInDialog =
            rect.top <= e.clientY &&
            e.clientY <= rect.top + rect.height &&
            rect.left <= e.clientX &&
            e.clientX <= rect.left + rect.width

        if (!isInDialog) {
            onOpenChange(false)
        }
    }

    return (
        <dialog
            ref={dialogRef}
            className={SheetContentRecipe({ side })}
            onClick={handleBackdropClick}
        >
            {children}
        </dialog>
    )
}

export const SheetHeader: React.FC<SheetHeaderProps> = ({ children }) => {
    return <div className={SheetHeaderRecipe()}>{children}</div>
}

export const SheetTitle: React.FC<SheetTitleProps> = ({ children }) => {
    return <h2 className={SheetTitleRecipe()}>{children}</h2>
}

export const SheetDescription: React.FC<SheetDescriptionProps> = ({ children }) => {
    return <p className={SheetDescriptionRecipe()}>{children}</p>
}

export const SheetBody: React.FC<SheetBodyProps> = ({ children }) => {
    return <div className={SheetBodyRecipe()}>{children}</div>
}

export const SheetFooter: React.FC<SheetFooterProps> = ({ children }) => {
    return <div className={SheetFooterRecipe()}>{children}</div>
}

interface SheetCloseProps {
    onClose: () => void
}

export const SheetClose: React.FC<SheetCloseProps> = ({ onClose }) => {
    return (
        <button
            type="button"
            className={SheetCloseButtonRecipe()}
            onClick={onClose}
            aria-label="Close"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
        </button>
    )
}
