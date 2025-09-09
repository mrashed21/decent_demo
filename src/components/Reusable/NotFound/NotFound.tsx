import Container from "../Container/Container";

const NotFound = () => {
  return (
    <Container>
      <div className="text-center mt-20 w-full h-full flex items-center justify-center">
        <h1 className="text-2xl font-bold text-red-500">Product not found.</h1>
      </div>
    </Container>
  );
};

export default NotFound;
