import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />

      {/* ✅ Offset content below fixed/sticky header */}
      <main className="flex-1 pt-[48px] md:pt-[56px] lg:pt-[64px]">
  {children}
</main>


      <Footer />
    </div>
  );
};

export default Layout;
