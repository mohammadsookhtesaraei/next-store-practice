"use client";

// این کامپوننت یک 
// Filter Component
//  در Next.js App Router 
// است که 
// وضعیت فیلتر را هم در State
//  نگه می‌دارد 
// و هم داخل 
// URL Query String 
// ذخیره می‌کند
// تا با رفرش صفحه یا اشتراک‌گذاری لینک، فیلتر حفظ شود.

import { useRouter, usePathname, useSearchParams } from "next/navigation";

import { useCallback, useState } from "react";

import CheckBox from "@/components/ui/CheckBox";

import { ICategory } from "@/types/category-interface";

type ProductsFilterProps = {
  categories: ICategory[];
};

const ProductsFilter = ({ categories }: ProductsFilterProps) => {
  // for set query string in url persist
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
   
  // state accordion
  const [isOpen, setIsOpen] = useState(false);

  // state checkbox when we selected checkbox value set in state
  const [selectedCategory, setSelectedCategory] = useState<string[]>(
    // initial state for keep value checkbox in first mount
    searchParams.get("category")?.split(",").filter(Boolean) || []
  );

  // callback for create url and clean query string
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

  // checkbox change handler
  const changeHanlder = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    const { value } = e.target;

    // check value in state
    if (selectedCategory.includes(value)) {
      const newSelectedCategory = selectedCategory.filter(
        (item) => item !== value,
      );
      setSelectedCategory(newSelectedCategory);
      
      // push to url
      router.push(
        pathname +
          "?" +
          createQueryString("category", newSelectedCategory.join(",")),
      );
    } else {
      const newCategory = [...selectedCategory, value];
      setSelectedCategory(newCategory);
      
      // push to url
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
        className={`${isOpen ? "max-h-96" : "max-h-0"} overflow-hidden border-b transition-all duration-200`}
      >
        {categories.map((item) => (
          <CheckBox
            key={item._id}
            id={item._id}
            value={item.englishTitle}
            name="product-type"
            label={item.title}
            // this is important since input  with type checkbox tick with checked not value
            checked={selectedCategory.includes(item.englishTitle)}
            changeHanlder={changeHanlder}
          />
        ))}
      </div>
    </div>
  );
};
export default ProductsFilter;
