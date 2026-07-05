"use client";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import CheckBox from "@/components/ui/CheckBox";

import { ICategory } from "@/types/category-interface";

type ProductsFilterProps = {
  categories: ICategory[];
};

const ProductsFilter = ({ categories }: ProductsFilterProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
   
  const [isOpen, setIsOpen] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState<string[]>(
    searchParams.get("category")?.split(",").filter(Boolean) || []
  );

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const param = new URLSearchParams(searchParams.toString());
      if (!value) {
        param.delete(name);
      } else {
        param.set(name, value);
      }
      return param.toString();
    },
    [searchParams],
  );

  const changeHanlder = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    const { value } = e.target;

    if (selectedCategory.includes(value)) {
      const newSelectedCategory = selectedCategory.filter(
        (item) => item !== value,
      );
      setSelectedCategory(newSelectedCategory);

      router.push(
        pathname +
          "?" +
          createQueryString("category", newSelectedCategory.join(",")),
      );
    } else {
      const newCategory = [...selectedCategory, value];
      setSelectedCategory(newCategory);

      router.push(
        pathname + "?" + createQueryString("category", newCategory.join(",")),
      );
    }
  };
  return (
    <div>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center cursor-pointer justify-between gap-x-2 text-gray-400"
      >
        <span>بر اساس نام محصول</span>
        <span
          className={`text-sm text-gray-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        >
          ▼
        </span>
      </button>
      <div
        className={`${isOpen ? "max-h-96" : "max-h-0"} overflow-hidden border-b bg-red-400 transition-all duration-200`}
      >
        {categories.map((item) => (
          <CheckBox
            key={item._id}
            id={item._id}
            value={item.englishTitle}
            name="product-type"
            label={item.title}
            checked={selectedCategory.includes(item.englishTitle)}
            changeHanlder={changeHanlder}
          />
        ))}
      </div>
    </div>
  );
};
export default ProductsFilter;
