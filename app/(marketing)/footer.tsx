import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/ru.svg"
            alt="Russian"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Russian
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/cn.svg"
            alt="Chinese"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Chinese
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/kr.svg"
            alt="korean"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Korean
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/jp.svg"
            alt="Japanese"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Japanese
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/tn.svg"
            alt="Arabic"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Arabic
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/ir.svg"
            alt="Iranian"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Iranian
        </Button>
      </div>
    </footer>
  );
};
