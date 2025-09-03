import BannerWrapper from "@/components/Frontend/Home/Banner/BannerWrapper";
import CategoryWrapper from "@/components/Frontend/Home/Category/CategoryWrapper";
import Features from "@/components/Frontend/Home/TrustFeatures/TrustFeatures";

const Home = () => {
  return (
    <section>
      <BannerWrapper />
      <Features />
      <CategoryWrapper />
    </section>
  );
};

export default Home;
