import Image from "next/image";
import Link from "next/link";
import { Loader } from "lucide-react";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { SidebarItem } from "./sidebarItem";

type SidebarProps = {
  className?: string;
};

export const Sidebar = ({ className }: SidebarProps) => {
  return (
    <div
      className={cn(
        "lg:fixed left-0 top-0 px-4 border-r-2 flex flex-col h-full lg:w-64",
        className
      )}
    >
      <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
        <Link href="/" className="flex gap-x-2 w-full">
          <Image
            src="/duolingo-logo.png"
            height={120}
            width={120}
            alt="mascot"
          />
          <h1 className="text-2xl font-extrabold text-green-300 underline italic tracking-wide">
            Clone
          </h1>
        </Link>
      </div>
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem
          label="learn"
          href="/learn"
          iconSrc="/duolingo-portrait.svg"
        />
        <SidebarItem
          label="Leaderboard"
          href="/leaderboard"
          iconSrc="/duolingo-portrait.svg"
        />
        <SidebarItem
          label="Quests"
          href="/quests"
          iconSrc="/duolingo-portrait.svg"
        />
        <SidebarItem
          label="Shop"
          href="/shop"
          iconSrc="/duolingo-portrait.svg"
        />
      </div>
      <div className="pb-4 flex justify-end">
        <ClerkLoading>
          <Loader className="w-5 h-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSignOutUrl="/" />
        </ClerkLoaded>
      </div>
    </div>
  );
};
