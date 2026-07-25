"use client";

import { useCategories } from "@/hook/useCategories";


import CategoryTable from "@/app/(panneladmin)/(admin)/admin/categories/components/CategoryTable";



import Link from "next/link";

const Categories = () => {
  const { data:categories, isPending } = useCategories();

  console.log(categories);
  if(!categories){
    return []
  };

  if (isPending) {
    <p>loading...</p>;
  }



  return (
    <div>
      <div className="flex items-center my-2">
        <h2 className="font-semibold text-lg text-gray-500 ml-auto">دسته بندی</h2>
        <Link
          href={"/admin/categories/add"}
          className="btn btn--primary cursor-pointer"
        >
          اضافه کردن دسته بندی
        </Link>
      </div>
     <CategoryTable categories={categories}/>
    </div>
  );
};
export default Categories;