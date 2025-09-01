import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";

const Home = () => {
  return (
    <main className="h-screen flex flex-col justify-between">
      <Navbar />
      <Footer />
    </main>
  );
};

export default Home;
