"use client";

// add next import
import { useRouter, usePathname, useSearchParams } from "next/navigation";

// add react import
import { useState, useEffect } from "react";

// add constant data sort for map 
import { sortOption } from "@/constant/sortedData";

// reusable component Radio input
import RadioInput from "@/components/ui/RadioInput";



const ProductsSorted = () => {


  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
// state sort for radio input controlled
  const [sort, setSort] = useState("");

//   state for accordion
  const [isOpen, setIsOpen] = useState(false);


//   changeHandler for set query string and get value radio input from user
  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    const { value } = e.target;
    setSort(value);

    const param = new URLSearchParams(searchParams.toString());
    param.set("sort", value);
    router.push(pathname + "?" + param.toString());
  };


//   use Efect for persist data when reload page we have value = mode updatig
  useEffect(() => {
    setSort(searchParams.get("sort") || "");
  }, [searchParams]);

  return (
    <div className="mt-8">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center justify-between w-full text-gray-400 "
      >
        <span>مرتب سازی محصولات</span>
        <span
          className={`text-sm text-gray-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        >
          ▼
        </span>
      </button>

      <div
        className={`${isOpen ? "max-h-96" : "max-h-0"} overflow-hidden border-b transition-all duration-200`}
      >
        {sortOption.map((item) => (
          <RadioInput
            key={item.id}
            checked={sort === item.value}
            name={"products-sort"}
            value={item.value}
            label={item.label}
            changeHandler={changeHandler}
          />
        ))}
      </div>
    </div>
  );
};
export default ProductsSorted;
