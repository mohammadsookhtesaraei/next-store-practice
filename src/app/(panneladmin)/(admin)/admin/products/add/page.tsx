"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import axios from "axios";
import toast from "react-hot-toast";

import { useAddProduct } from "@/hook/useProducts";
import { useCategories } from "@/hook/useCategories";

import { FormadDataTypes } from "@/app/(panneladmin)/(admin)/admin/products/add/types/formDatatypes";
import FormProducts from "@/app/(panneladmin)/(admin)/admin/products/components/FormProducts";
const AddProduct = () => {
  const router = useRouter();
  const { data: categories, isPending } = useCategories();

 
  const { mutateAsync: addMutate } = useAddProduct();
  const [formAddData, setFormAddData] = useState<FormadDataTypes>({
      title: "",
      description: "",
      slug: "",
      brand: "",
      price: "",
      offPrice: "",
      discount: "",
      countInStock: "",
      imageLink: "",
  });
  
  const [tags, setTags] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");


  if (!categories) {
    return [];
}


const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
) => {
    const { value, name } = e.target;
    setFormAddData((prev) => ({ ...prev, [name]: value }));
};

const formHandler = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const data = { ...formAddData, tags, category: selectedCategory };
    try {
        const { message } = await addMutate(data);
        toast.success(message);
        router.push("/admin/products");
    } catch (error) {
        if (axios.isAxiosError(error)) {
            toast.error(error?.response?.data?.message || "error");
        }
    }
};

 if (isPending) return <p>لودینگ...</p>;
  return (
    <div className="p-4">

        <h2 className="text-lg font-semibold text-gray-400 my-6">اضافه کردن محصول</h2>
         <FormProducts
         formData={formAddData}
         changeHandler={changeHandler}
         formHandler={formHandler}
         tags={tags}
         setTags={setTags}
         selectedCategory={selectedCategory}
         setSelectedCategory={setSelectedCategory}
         categories={categories}
         /> 
    </div>
  )
};
export default AddProduct;
