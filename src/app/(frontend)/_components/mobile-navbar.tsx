'use client'

import React from "react";
import { Navbar, NavbarItem } from '@/components'
import { IconBook, IconHome, IconSearch, IconShoppingCart } from '@tabler/icons-react'
import { css } from 'panda/css'

export const MobileNavbar = () => {
    const [selected, setSelected] = React.useState<number | undefined>(0);

    return (
        <Navbar
            className={css({
                display: { base: 'flex', md: 'none' },
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 100,
            })}
        >
            <NavbarItem
                icon={IconHome}
                href="/"
                label="Inicio"
                selected={selected === 0}
                onClick={() => setSelected(0)}
            />
            <NavbarItem
                icon={IconBook}
                href="/catalog"
                label="Catálogo"
                selected={selected === 1}
                onClick={() => setSelected(1)}
            />
            <NavbarItem
                icon={IconShoppingCart}
                href="/cart"
                label="Carrito"
                selected={selected === 2}
                onClick={() => setSelected(2)}
            />
            <NavbarItem
                icon={IconSearch}
                href="/search"
                label="Buscar"
                selected={selected === 3}
                onClick={() => setSelected(3)}
            />
        </Navbar>
    )
}
