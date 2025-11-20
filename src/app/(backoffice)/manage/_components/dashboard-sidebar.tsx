"use client";
import {
  Sidebar,
  SidebarHeader,
  SidebarSection,
  SidebarItem,
} from "@/components";
import {
  IconHome,
  IconBookmark,
  IconPackage,
  IconTruckDelivery,
  IconKey,
  IconUserDollar,
  IconClipboardCheck,
} from "@tabler/icons-react";
import { css } from "panda/css";

export const DashboardSidebar = () => {
  const CollectionItems = [
    {
      href: "/manage/products",
      icon: IconPackage,
      label: "Productos",
    },
    {
      href: "/manage/categories",
      icon: IconBookmark,
      label: "Categorías",
    },
    {
      href: "/manage/orders",
      icon: IconClipboardCheck,
      label: "Ordenes",
    },
  ];

  const PersonItems = [
    {
      href: "/manage/permissions",
      icon: IconKey,
      label: "Permisos",
    },
    {
      href: "/manage/customers",
      icon: IconUserDollar,
      label: "Clientes",
    },
    {
      href: "/manage/vendors",
      icon: IconTruckDelivery,
      label: "Proveedores",
    },
  ];
  return (
    <>
      <Sidebar>
        <SidebarHeader>
          {/* Light mode logo */}
          <SidebarHeader.Logo
            className={css({ display: { _osDark: "none" } })}
            src="/logo-alt.svg"
            width={100}
            height={100}
            alt="Logo"
          />

          {/* Dark mode logo */}
          <SidebarHeader.Logo
            className={css({ display: { _osLight: "none" } })}
            src="/logo-white.svg"
            width={100}
            height={100}
            alt="Logo"
          />
        </SidebarHeader>

        <SidebarSection>
          <SidebarItem href="/manage" icon={IconHome} label="Inicio" />
        </SidebarSection>

        <SidebarSection title="Colecciones">
          {CollectionItems.map((item) => (
            <SidebarItem key={item.href} {...item} />
          ))}
        </SidebarSection>

        <SidebarSection title="Personas">
          {PersonItems.map((item) => (
            <SidebarItem key={item.href} {...item} />
          ))}
        </SidebarSection>
      </Sidebar>
    </>
  );
};
