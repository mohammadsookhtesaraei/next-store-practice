"use client";

// دقیقا مشابه روت اد هستش
// فقط بجای یوز اد
// باید میوتیشن یوز ادیت بسازیم
// و همینطور پروداکت رو فج کنیم تو یوز افکت ست کنیم
// تا مونت اولیه فیلدها خالی نباشه

import { useCategories as useCategories_1 } from "@/hook/useCategories";
import { useEditProduct, useProductById } from "@/hook/useProducts";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import axios from "axios";
import toast from "react-hot-toast";
import { FormadDataTypes } from "@/app/(panneladmin)/(admin)/admin/products/types/formDatatypes";
import FormProducts from "@/app/(panneladmin)/(admin)/admin/products/components/FormProducts";

const Edit = () => {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const { data: product } = useProductById(id);

  const { data: categories, isPending } = useCategories_1();

  const { mutateAsync: addMutate } = useEditProduct();
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

  useEffect(() => {
    if (!product) return;

    setFormAddData({
      title: product.title,
      description: product.description,
      slug: product.slug,
      brand: product.brand,
      price: product.price,
      offPrice: product.offPrice,
      discount: product.discount,
      countInStock: product.countInStock,
      imageLink: product.imageLink,
    });

    setTags(product.tags);
    setSelectedCategory(product.category._id);
  }, [product]);

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

    const data = {
      productId: product._id,
      data: {
        ...formAddData,
        tags,
        category: selectedCategory,
      },
    };
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
    <div>
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
  );
};
export default Edit;
