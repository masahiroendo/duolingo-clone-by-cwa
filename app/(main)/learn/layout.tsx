import { MobileHeader } from "@/components/mobile-header";
import { Sidebar } from "@/components/sidebar";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <MobileHeader />
      <Sidebar className="hidden lg:flex" />
      <main className="lg:pl-64 h-full pt-12 lg:pt-0">
        <div className="max-w-5xl mx-auto pt-6 h-full">{children}</div>
      </main>
    </>
  );
};

export default MainLayout;
