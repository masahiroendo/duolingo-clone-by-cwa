import { InfinityIcon, X } from "lucide-react";
import Image from "next/image";

import { Progress } from "@/components/ui/progress";
import { useExitModal } from "@/store/use-exit-modal";

type QuizHeaderProps = {
  hearts: number;
  percentage: number;
  hasActiveSubscription: boolean;
};

export const QuizHeader = ({
  hasActiveSubscription,
  hearts,
  percentage,
}: QuizHeaderProps) => {
  const { open } = useExitModal();
  return (
    <header className="lg:pt-12 pt-5 px-10 flex gap-7 items-center justify-between max-w-6xl mx-auto w-full">
      <X
        onClick={open}
        className="text-slate-500 hover:opacity-75 transition cursor-pointer"
      />
      <Progress value={percentage} />
      <div className="text-rose-500 flex items-center font-bold">
        <Image
          src="/heart.svg"
          height={28}
          width={28}
          alt="Heart"
          className="mr-2"
        />
        {hasActiveSubscription ? (
          <InfinityIcon className="h-6 w-6 stroke-[3] shrink-0" />
        ) : (
          hearts
        )}
      </div>
    </header>
  );
};
