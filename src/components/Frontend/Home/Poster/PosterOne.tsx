import Container from "@/components/Reusable/Container/Container";

const PosterOne = () => {
  return (
    <section>
      <Container>
        <div className=" w-full h-[120px] md:h-[200px] lg:h-[320px] xl:h-[450px] my-5 lg:my-10">
          <img
            src="https://i.ibb.co.com/Ngyqsnzb/premium-photo-1680985551009-05107cd2752c-w-500-auto-format-fit-crop-q-60-ixlib-rb-4-1.jpg"
            alt="banner-one"
            className="rounded-lg w-full h-full"
          />
        </div>
      </Container>
    </section>
  );
};

export default PosterOne;
