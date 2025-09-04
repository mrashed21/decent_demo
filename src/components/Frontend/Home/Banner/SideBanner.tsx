const SideBanner = () => {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-1 gap-3">
      <div className="w-full h-[150px] sm:h-[200px] md:h-[250px] lg:h-[230px] xl:h-[230px]">
        <img
          src="https://i.ibb.co.com/FbNddfjy/photo-1502945015378-0e284ca1a5be-w-500-auto-format-fit-crop-q-60-ixlib-rb-4-1.jpg"
          alt="banner"
          className="rounded-xl lg:rounded-2xl w-full h-full "
        />
      </div>
      <div className="w-full h-[150px] sm:h-[200px] md:h-[250px] lg:h-[230px] xl:h-[230px]">
        <img
          src="https://i.ibb.co.com/RGRtBHQ3/photo-1601097874965-f940d4f012b5-w-500-auto-format-fit-crop-q-60-ixlib-rb-4-1.jpg"
          alt="banner"
          className="rounded-xl lg:rounded-2xl w-full h-full "
        />
      </div>
    </div>
  );
};

export default SideBanner;
