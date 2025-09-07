import Container from "@/components/Reusable/Container/Container";
import HotDeal from "./HotDeal";
import HotDealimg from "./HotDealimg";

const HotDealWrapper = () => {
  return (
    <section className="bg-background">
      <Container>
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-2 lg:py-5">
          {/* Main Banner */}
          <aside className="lg:col-span-2">
            <HotDealimg />
          </aside>

          {/* Side Banners */}
          <aside>
            <HotDeal />
          </aside>
        </section>
      </Container>
    </section>
  );
};

export default HotDealWrapper;
