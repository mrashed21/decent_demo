import BannerWrapper from "@/components/Frontend/Home/Banner/BannerWrapper";
import BestDealProducts from "@/components/Frontend/Home/BestDealProducts/BestDealProducts";
import CategoryWrapper from "@/components/Frontend/Home/Category/CategoryWrapper";
import PosterOne from "@/components/Frontend/Home/Poster/PosterOne";
import PosterTwo from "@/components/Frontend/Home/Poster/PosterTwo";
import RecentlyAddedProducts from "@/components/Frontend/Home/RecentlyAdded/RecentlyAddedProducts";

import TrendingProducts from "@/components/Frontend/Home/TrendingProducts/TrendingProducts";

import Features from "@/components/Frontend/Home/TrustFeatures/TrustFeatures";

const Home = () => {
  return (
    <section className="bg-background">
      <BannerWrapper />
      <Features />
      <CategoryWrapper />
      <BestDealProducts />
      <PosterOne />
      <RecentlyAddedProducts />
      <PosterTwo />
      <TrendingProducts />
    </section>
  );
};

export default Home;
