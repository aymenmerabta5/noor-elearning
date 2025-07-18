import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { type FC } from "react";

const HomeLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <Navbar />
      <section className="bg-background container flex-1 py-10">
        {children}
      </section>
      <Footer />
    </main>
  );
};

export default HomeLayout;
