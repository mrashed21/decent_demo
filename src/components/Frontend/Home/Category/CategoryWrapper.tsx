"use client";
import Container from "@/components/Reusable/Container/Container";
import Link from "next/link";
import Category from "./Category";

const CategoryWrapper = () => {
  return (
    <section className="py-5 lg:py-12">
      <Container>
        <div className="flex items-center justify-between mb-8">
          <h2 className="lg:text-2xl lg:font-semibold text-secondary">
            Shop by Categories
          </h2>
          <Link
            href="/"
            className="text-xs lg:text-sm lg:font-medium text-tertiary  border border-tertiary px-1.5 py-0.5 lg:px-3 lg:py-2 rounded-md"
          >
            SEE ALL
          </Link>
        </div>
        {/* The main category grid component */}
        <Category />
      </Container>
    </section>
  );
};

export default CategoryWrapper;
