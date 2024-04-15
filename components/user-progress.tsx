import Link from "next/link";
import Image from "next/image";
import { InfinityIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

type UserProgressProps = {
  activeCourse: { imageSrc: string; title: string }; // TOTO: replace with DB types
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
};

export const UserProgress = ({
  activeCourse,
  hasActiveSubscription,
  hearts,
  points,
}: UserProgressProps) => {
  return (
    <div className="flex items-center justify-between gap-x-2 w-full">
      <Link href="/courses">
        <Button variant="ghost">
          <Image
            src={activeCourse.imageSrc}
            alt={activeCourse.title}
            className="rounded-md border"
            width={32}
            height={32}
          />
        </Button>
      </Link>
      <Link href="/shop">
        <Button variant="ghost" className="text-orange-500">
          <Image
            src="/duolingo-portrait.svg"
            alt="Points"
            width={28}
            height={28}
            className="mr-2"
          />
          {points}
        </Button>
      </Link>
      <Link href="/shop">
        <Button variant="ghost" className="text-rose-500">
          <Image
            src="/duolingo-portrait.svg"
            alt="Hearts"
            width={22}
            height={22}
            className="mr-2"
          />
          {hasActiveSubscription ? (
            <InfinityIcon className="h-4 w-4 stroke-[3]" />
          ) : (
            hearts
          )}
        </Button>
      </Link>
    </div>
  );
};
