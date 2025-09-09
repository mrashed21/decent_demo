import ProductsWrapper from "@/components/Reusable/ProductWrapper/ProductsWrapper";
import { products } from "@/data/ProductData";

const ReletedProduct = () => {
  return (
    <section>
      <ProductsWrapper
        name="Related Products"
        href="/"
        product={products}
        className="bg-primary/0"
      />
    </section>
  );
};

export default ReletedProduct;
