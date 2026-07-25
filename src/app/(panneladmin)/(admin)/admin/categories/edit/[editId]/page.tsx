"use client";

import { useParams, useRouter } from "next/navigation";

import { useEffect, useState } from "react";
import { categoryTypes } from "@/constant/categoryType";
import { useGetCategoryById, useUpdateCategory } from "@/hook/useCategories";
import { CategoryState } from "@/app/(panneladmin)/(admin)/admin/categories/add/page";
import toast from "react-hot-toast";
import axios from "axios";


import FormCategory from "@/app/(panneladmin)/(admin)/admin/categories/components/FormCategory";

const EditCategory = () => {
  const { editId } = useParams<{ editId: string }>();
  const router = useRouter();

  const { data } = useGetCategoryById(editId);

  const { category } = data || {};
  const { mutateAsync: updateCategoryMutate, isPending } = useUpdateCategory();

  const [categorUpdate, setCategory] = useState<CategoryState>({
    title: "",
    description: "",
    englishTitle: "",
  });

  const [selectedType, setSelectedType] = useState("");

  const type = categoryTypes.find((item) => item.value === category?.type);
  useEffect(() => {
    if (!category) return;
    setCategory({
      title: category.title,
      description: category.description,
      englishTitle: category.englishTitle,
    });

    setSelectedType(type?.value || "");
  }, [data]);

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    const { name, value } = e.target;
    setCategory((prev) => ({ ...prev, [name]: value }));
  };

  const formHandler = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      data: { ...categorUpdate, type: selectedType },
      id: category?._id,
    };

    try {
      const { message } = await updateCategoryMutate(data);
      toast.success(message);
      router.push("/admin/categories");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error?.response?.data?.message);
      }
    }
  };

  return (
    <div>
      <h1 className="mb-6 font-bold text-xl">ویرایش دسته بندی</h1>
      <FormCategory
        category={categorUpdate}
        changeHandler={changeHandler}
        formHandler={formHandler}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        isLoading={isPending}
      />
    </div>
  );
};
export default EditCategory;
