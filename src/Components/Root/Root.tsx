import TopHeader from "@/Components/Shared/TopHeader";
import { ReactNode } from "react";

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

      <main className="flex-1 p-4 md:p-8 bg-gray-50 min-h-screen">
        <section className="w-full h-full pb-16">{children}</section>
      </main>
    </div>
  );
};

export default Root;
