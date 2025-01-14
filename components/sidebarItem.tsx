"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

type SidebarItemProps = {
  label: string;
  iconSrc: string;
  href: string;
};

export const SidebarItem = ({ href, iconSrc, label }: SidebarItemProps) => {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Button
      variant={active ? "sidebarOutline" : "sidebar"}
      className="justify-start h-[52px]"
      asChild
    >
      <Link href={href}>
        <Image
          src={iconSrc}
          alt={label}
          className="mr-5"
          height={28}
          width={28}
        />
        {label}
      </Link>
    </Button>
  );
};
