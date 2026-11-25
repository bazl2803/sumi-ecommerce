'use client';

import {
    LuClipboardList,
    LuLayoutDashboard,
    LuPackage,
    LuTruck,
    LuUsers
} from 'react-icons/lu';
import {
    Navbar,
    NavbarItem,
    NavbarList,
} from '@/components';
import { usePathname } from 'next/navigation';

interface BackofficeNavbarProps {
    className?: string;
}

export function BackofficeNavbar({ className }: BackofficeNavbarProps) {
    // Get current route
    const pathname = usePathname();

    // Routes
    const routes = [
        { icon: LuLayoutDashboard, label: 'Inicio', href: '/admin' },
        { icon: LuPackage, label: 'Produtos', href: '/admin/products' },
        { icon: LuClipboardList, label: 'Inventario', href: '/admin/inventory' },
        { icon: LuTruck, label: 'Pedidos', href: '/admin/orders' },
        { icon: LuUsers, label: 'Clientes', href: '/admin/customers' },
    ];

    return (
        <Navbar className={className} variant="floating">
            <NavbarList>
                {routes.map((route) => (
                    <NavbarItem
                        key={route.href}
                        icon={route.icon}
                        label={route.label}
                        href={route.href}
                        selected={pathname === route.href}
                    />
                ))}
            </NavbarList>
        </Navbar>
    );
}
