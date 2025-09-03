// import Container from "@/components/Reusable/Container/Container";
// import MainBanner from "./MainBanner";
// import SideBanner from "./SideBanner";

// const BannerWrapper = () => {
//   return (
//     <Container>
//       <section className="grid grid-cols-1 xl:grid-cols-3 py-2 gap-5">
//         {/* main banner */}
//         <section className="col-span-1 xl:col-span-2">
//           <MainBanner />
//         </section>
//         {/* side banner */}

//         <SideBanner />
//       </section>
//     </Container>
//   );
// };

// export default BannerWrapper;

import Container from "@/components/Reusable/Container/Container";
import MainBanner from "./MainBanner";
import SideBanner from "./SideBanner";

const BannerWrapper = () => {
  return (
    <Container>
      <section className="grid grid-cols-1 xl:grid-cols-3 gap-4 py-2 lg:py-5">
        {/* Main Banner */}
        <section className="xl:col-span-2">
          <MainBanner />
        </section>

        {/* Side Banners */}
        <SideBanner />
      </section>
    </Container>
  );
};

export default BannerWrapper;
