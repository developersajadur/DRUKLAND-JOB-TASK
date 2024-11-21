import TopHeader from "@/Components/Shared/TopHeader";
import { ReactNode } from "react";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

interface RootProps {
  children: ReactNode; // Specifies that `children` can be any valid React content
}

const Root: React.FC<RootProps> = ({ children }) => {
  return (
    <div>
      {/* top header */}
      <header>
        <TopHeader/>
      </header>

      {/* Navbar */}
      <nav className=" border-b-[0.5px] border-[#292929]">
        <Navbar/>
      </nav>

      <main className="min-h-screen container mx-auto px-4 flex justify-center items-center bg-[#F1F1F1]">
        <section className="w-full h-full lg:py-20">
          {children}
          </section>
      </main>

      {/* footer */}
      <footer className="bg-[#F1F1F1]">
        <Footer/>
      </footer>
    </div>
  );
};

export default Root;
