import Container from "@/components/Reusable/Container/Container";

const PosterTwo = () => {
  return (
    <Container>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-3 my-3 lg:my-10">
        <div className=" w-full h-[150px] md:h-[230px] lg:h-[220px] xl:h-[250px]">
          <img
            src="https://i.ibb.co.com/zhsJVcWP/premium-vector-1716489245813-7a2b31986150-w-352-dpr-2-h-367-auto-format-fit-crop-q-60-ixlib-rb-4-1.png"
            alt="banner-one"
            className="rounded-lg w-full h-full"
          />
        </div>
        <div className=" w-full h-[150px] md:h-[230px] lg:h-[220px] xl:h-[250px]">
          <img
            src="https://i.ibb.co.com/MDkyYXcf/premium-vector-1719990020642-83783c20f742-w-352-dpr-2-h-367-auto-format-fit-crop-q-60-ixlib-rb-4-1.png"
            alt="banner-one"
            className="rounded-lg w-full h-full"
          />
        </div>
      </section>
    </Container>
  );
};

export default PosterTwo;
