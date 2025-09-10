import ProductDetails from "@/components/Frontend/Home/ProductDetails/ProductDetails";
import Container from "@/components/Reusable/Container/Container";
import NotFound from "@/components/Reusable/NotFound/NotFound";
import { products } from "@/data/ProductData";
import { Metadata, ResolvingMetadata } from "next";

interface ProductDetailsProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata(
  { params }: ProductDetailsProps,
  // parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = params;

  const productData = products.find((product) => product.slug === slug);

  if (!productData) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found.",
    };
  }

  return {
    title: productData?.name || "Product Name",
    description: productData?.tag || "Product Description",
  };
}

const ProductDetailPage = async ({ params }: ProductDetailsProps) => {
  const { slug } = params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return <NotFound />;
  }

  return (
    <section className="bg-background">
      <Container>
        <ProductDetails product={product} />
      </Container>
    </section>
  );
};

export default ProductDetailPage;
