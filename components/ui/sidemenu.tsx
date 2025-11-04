// components/SideMenu.tsx
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export type MenuItem = {
  label: string;
  iconType: "material" | "svg";
  icon: string;
  href: string;          // <-- add this
};

const defaultMenuItems: MenuItem[] = [
  {
    label: "dashboard",
    iconType: "svg",
    icon: "/icons/sidebar/dashboard.svg",
    href: "/dashboard",
  },
  {
    label: "Student List",
    iconType: "svg",
    icon: "/icons/sidebar/student-list.svg",
    href: "/studentlist",
  },
  {
    label: "Documents",
    iconType: "svg",
    icon: "/icons/sidebar/document.svg",
    href: "/documents",
  },
];

const iconColor = {
  active: "#769FCD",
  inactive: "#B9D7EA",
};

const renderIcon = (item: MenuItem, isActive: boolean) => {
  const color = isActive ? iconColor.active : iconColor.inactive;

  if (item.iconType === "material") {
    return (
      <span
        className="material-symbols-outlined text-2xl"
        style={{ color }}
        aria-hidden
      >
        {item.icon}
      </span>
    );
  }

  return (
    <span
      aria-hidden
      className="block h-6 w-6"
      style={{
        backgroundColor: color,
        maskImage: `url(${item.icon})`,
        WebkitMaskImage: `url(${item.icon})`,
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
        maskSize: "contain",
        WebkitMaskSize: "contain",
      }}
    />
  );
};

type SideMenuProps = {
  items?: MenuItem[];
};

const SideMenu: React.FC<SideMenuProps> = ({ items = defaultMenuItems }) => {
  const pathname = usePathname();

  const isItemActive = (href: string) => {
    // exact match or section match; tweak to your routing
    return pathname === href || (href !== "/" && pathname?.startsWith(href));
  };

  return (
    <aside className="flex w-64 flex-col gap-10 bg-white px-6 py-8 shadow-2xl">
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/images/agentzee-logo.png"
          alt="Super Agent logo"
          width={120}
          height={36}
          className="h-9 w-auto object-contain"
          priority
        />

      </Link>

      <nav className="flex flex-col gap-3" aria-label="Sidebar">
        {items.map((item) => {
          const active = isItemActive(item.href);
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex h-11 items-center gap-4 rounded-[10px] px-4 text-left text-base font-normal transition-colors ${active
                ? "bg-slate-100 text-slate-800"
                : "text-slate-500 hover:bg-slate-100 hover:text-slate-700"
                }`}
              aria-current={active ? "page" : undefined}
            >
              {renderIcon(item, active)}
              <span className="text-[16px] font-normal leading-5">
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default SideMenu;
