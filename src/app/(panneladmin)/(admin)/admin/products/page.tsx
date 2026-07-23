"use client";

import ProductsTable from "@/app/(panneladmin)/(admin)/admin/products/components/ProductsTable";

import { useGetProducts } from "@/hook/useProducts";

import Link from "next/link";

const Products = () => {
  const { data: products, isPending } = useGetProducts();

  if (isPending) {
    <p>loading...</p>;
  }

  if (!products) {
    return [];
  }

  return (
    <div>
      <div className="flex items-center my-2">
        <h2 className="font-semibold text-lg text-gray-500 ml-auto">محصولات</h2>
        <Link
          href={"/admin/products/add"}
          className="btn btn--primary cursor-pointer"
        >
          اضافه کردن محصول
        </Link>
      </div>
      <ProductsTable products={products} />
    </div>
  );
};
export default Products;
