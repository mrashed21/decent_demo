"use client";

import Container from "@/components/Reusable/Container/Container";
import { Product } from "@/types/productTypes";
import Link from "next/link";
import ProductSlider from "./ProductSlider";

interface ProductsWrapperProps {
  name: string;
  href: string;
  product: Product[];
  className?: string;
}

const ProductsWrapper = ({
  name,
  href,
  product,
  className = "",
}: ProductsWrapperProps) => {
  return (
    <section className={`py-5 lg:py-12 bg-foreground ${className}`}>
      <Container>
        <div className="flex items-center justify-between mb-8">
          <h2 className="lg:text-2xl lg:font-semibold text-secondary">
            {name}
          </h2>
          <Link
            href={href}
            className="text-xs lg:text-sm lg:font-medium text-tertiary border border-tertiary px-1.5 py-0.5 lg:px-3 lg:py-2 rounded-md"
          >
            SEE ALL
          </Link>
        </div>
        {/* Main category slider */}
        <ProductSlider product={product} />
      </Container>
    </section>
  );
};

export default ProductsWrapper;
