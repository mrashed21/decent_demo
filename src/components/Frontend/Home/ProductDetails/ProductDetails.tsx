"use client";
import { Product } from "@/types/productTypes";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import ProductDetailsData from "./ProductDetailsData";

interface ProductDetailsProps {
  product: Product;
}
const ProductDetails = ({ product }: ProductDetailsProps) => {
 
  return (
    <section>
      <h2 className="flex items-center space-x-2 my-3 ">
        {" "}
        <FaHome /> <Link href={"/product"}>/ Product</Link> <span>/ Phone</span>
      </h2>
      {/* product deatils section */}
      <section>
       <ProductDetailsData product={product}/> 

      </section>
    </section>
  );
};

export default ProductDetails;
