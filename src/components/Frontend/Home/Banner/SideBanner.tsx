const SideBanner = () => {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-1 gap-3">
      <div className="w-full h-[150px] sm:h-[200px] md:h-[250px] lg:h-[230px] xl:h-[230px]">
        <img
          src="https://dazzle.sgp1.cdn.digitaloceanspaces.com/54736/honor.jpg"
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
