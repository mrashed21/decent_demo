
import ProductsWrapper from "@/components/Reusable/ProductWrapper/ProductsWrapper";
import { products } from "@/data/ProductData";

const RecentlyAddedProducts = () => {
  return (
    <section>
      <ProductsWrapper name="Recently Added Product" href="/" product={products} />
    </section>
  );
};

export default RecentlyAddedProducts;
