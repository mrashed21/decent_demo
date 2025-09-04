import ProductsWrapper from "@/components/Reusable/ProductWrapper/ProductsWrapper";
import { products } from "@/data/ProductData";

const TrendingProducts = () => {
  return (
    <section>
      <ProductsWrapper name="Trending Product" href="/" product={products} />
    </section>
  );
};

export default TrendingProducts;
