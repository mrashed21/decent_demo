import Container from "@/components/Reusable/Container/Container";
import MainBanner from "./MainBanner";
import SideBanner from "./SideBanner";

const BannerWrapper = () => {
  return (
    <section className="bg-foreground">
      <Container>
        <section className="grid grid-cols-1 xl:grid-cols-3 gap-4 py-2 lg:py-5">
          {/* Main Banner */}
          <aside className="xl:col-span-2">
            <MainBanner />
          </aside>

          {/* Side Banners */}
          <aside>
            <SideBanner />
          </aside>
        </section>
      </Container>
    </section>
  );
};

export default BannerWrapper;
