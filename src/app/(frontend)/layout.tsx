import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";

const FrontendLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-[100dvh] flex flex-col font-inter">
      <Navbar />
      <main className="flex-grow">
        <section>{children}</section>
      </main>
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
};
export default FrontendLayout;
