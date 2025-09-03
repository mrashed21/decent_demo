// const SideBanner = () => {
//   return (
//     <div className="grid grid-cols-2 xl:grid-cols-1 gap-3">
//       <div className="min-w-36 min-h-36 lg:max-h-[350px] !lg:w-full">
//         <img
//           src="https://dazzle.com.bd/_next/image?url=https%3A%2F%2Fdazzle.sgp1.cdn.digitaloceanspaces.com%2F54748%2FIPHONE-16-series.jpg&w=1920&q=75"
//           alt="banner"
//           className="rounded-xl lg:rounded-2xlw-full h-full "
//         />
//       </div>
//       <div className="min-w-36 min-h-36 lg:max-h-[350px] !lg:w-full">
//         <img
//           src="https://dazzle.com.bd/_next/image?url=https%3A%2F%2Fdazzle.sgp1.cdn.digitaloceanspaces.com%2F54748%2FIPHONE-16-series.jpg&w=1920&q=75"
//           alt="banner"
//           className="rounded-xl lg:rounded-2xl w-full h-full "
//         />
//       </div>
//     </div>
//   );
// };

// export default SideBanner;


const SideBanner = () => {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-1 gap-3">
      <div className="w-full h-[150px] sm:h-[200px] md:h-[250px] lg:h-[230px] xl:h-[230px]">
        <img
          src="https://dazzle.sgp1.cdn.digitaloceanspaces.com/54748/IPHONE-16-series.jpg"
          alt="banner"
          className="rounded-xl lg:rounded-2xl w-full h-full object-cover"
        />
      </div>
      <div className="w-full h-[150px] sm:h-[200px] md:h-[250px] lg:h-[230px] xl:h-[230px]">
        <img
          src="https://dazzle.sgp1.cdn.digitaloceanspaces.com/54748/IPHONE-16-series.jpg"
          alt="banner"
          className="rounded-xl lg:rounded-2xl w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default SideBanner;
