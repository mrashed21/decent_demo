import BannerWrapper from "@/components/Frontend/Home/Banner/BannerWrapper";
import BestDealWrapper from "@/components/Frontend/Home/BestDealProducts/BestDealWrapper";
import CategoryWrapper from "@/components/Frontend/Home/Category/CategoryWrapper";
import Features from "@/components/Frontend/Home/TrustFeatures/TrustFeatures";

const Home = () => {
  return (
    <section>
      <BannerWrapper />
      <Features />
      <CategoryWrapper />
      <BestDealWrapper />
    </section>
  );
};

export default Home;
