"use client";

import { notFound, useParams } from "next/navigation";

import { useProductById } from "@/hook/useProducts";

import { IProduct } from "@/types/products-interface";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumber";
const productId = () => {
    
  const { productId } = useParams<{ productId: string }>();

  const { data: product, isPending } = useProductById(productId);

  if (isPending) {
    return <p>لودینگ</p>;
  }

  if (!product || Object.keys(product).length === 0) {
    return notFound();
  }

  const { title, price } = product as IProduct;

  return (
    <div className="card">
      <h2>{title}</h2>
      <p>قیمت: {toPersianNumbersWithComma(price)}</p>
    </div>
  );
};
export default productId;
