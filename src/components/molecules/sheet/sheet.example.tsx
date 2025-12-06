/**
 * Sheet Component Usage Example
 * 
 * This file demonstrates how to use the Sheet component in your application.
 * The Sheet component uses the native HTML <dialog> element for better accessibility.
 */

'use client'
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
import { Button } from '@/components'

export default function SheetExample() {
    const [isOpen, setIsOpen] = useState(false)
    const [side, setSide] = useState<'right' | 'left' | 'top' | 'bottom'>('right')

    return (
        <div style={{ padding: '2rem' }}>
            <h1>Sheet Component Demo</h1>

            {/* Buttons to open sheet from different sides */}
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <button onClick={() => { setSide('right'); setIsOpen(true); }}>
                    Open from Right
                </button>
                <button onClick={() => { setSide('left'); setIsOpen(true); }}>
                    Open from Left
                </button>
                <button onClick={() => { setSide('top'); setIsOpen(true); }}>
                    Open from Top
                </button>
                <button onClick={() => { setSide('bottom'); setIsOpen(true); }}>
                    Open from Bottom
                </button>
            </div>

            {/* Sheet Component */}
            <Sheet open={isOpen} onOpenChange={setIsOpen} side={side}>
                <SheetHeader>
                    <div>
                        <SheetTitle>Sheet Title</SheetTitle>
                        <SheetDescription>
                            This is a description of what this sheet is for.
                        </SheetDescription>
                    </div>
                    <SheetClose onClose={() => setIsOpen(false)} />
                </SheetHeader>

                <SheetBody>
                    <p>This is the main content of the sheet.</p>
                    <p>You can put any content here - forms, lists, details, etc.</p>

                    {/* Example form */}
                    <div style={{ marginTop: '1rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem' }}>
                            Name
                            <input
                                type="text"
                                style={{
                                    display: 'block',
                                    width: '100%',
                                    padding: '0.5rem',
                                    marginTop: '0.25rem',
                                    border: '1px solid #ccc',
                                    borderRadius: '0.375rem',
                                }}
                            />
                        </label>

                        <label style={{ display: 'block', marginTop: '1rem' }}>
                            Email
                            <input
                                type="email"
                                style={{
                                    display: 'block',
                                    width: '100%',
                                    padding: '0.5rem',
                                    marginTop: '0.25rem',
                                    border: '1px solid #ccc',
                                    borderRadius: '0.375rem',
                                }}
                            />
                        </label>

                        <label style={{ display: 'block', marginTop: '1rem' }}>
                            Message
                            <textarea
                                rows={4}
                                style={{
                                    display: 'block',
                                    width: '100%',
                                    padding: '0.5rem',
                                    marginTop: '0.25rem',
                                    border: '1px solid #ccc',
                                    borderRadius: '0.375rem',
                                }}
                            />
                        </label>
                    </div>
                </SheetBody>

                <SheetFooter>
                    <button onClick={() => setIsOpen(false)}>
                        Cancel
                    </button>
                    <button onClick={() => setIsOpen(false)}>
                        Save Changes
                    </button>
                </SheetFooter>
            </Sheet>
        </div>
    )
}
