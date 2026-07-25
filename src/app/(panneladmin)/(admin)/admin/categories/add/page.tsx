"use client"


import { useRouter } from "next/navigation"
import { useState } from "react"
import toast from "react-hot-toast"
import axios from "axios"
import { useAddCategory } from "@/hook/useCategories"
import FormCategory from "@/app/(panneladmin)/(admin)/admin/categories/components/FormCategory"


export type CategoryState={
    title: string,
    description: string,
    englishTitle: string,
}

const AddCategory = () => {

  const router=useRouter();


  const [category,setCategory]=useState<CategoryState>({
    title: "",
    description: "",
    englishTitle: "",
  });


  const [selectedType,setSelectedType]=useState("");

  const {mutateAsync:addcategoryMutate,isPending}=useAddCategory();



 const changeHandler=(e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>)=>{
 const {name,value}=e.target;
 setCategory((prev)=>({...prev,[name]:value}))
 };
 
 
 const formHandler=async(e: React.SubmitEvent<HTMLFormElement>)=>{
  e.preventDefault();


  const data={...category,type:selectedType};

  try {
  const {message}=await addcategoryMutate(data);
  toast.success(message);
   router.push("/admin/categories");
  }catch(error){
  if(axios.isAxiosError(error)){
    toast.error(error?.response?.data?.message)
  }
  }
 
 };



  return (
    <div>
      <h1 className="mb-6 font-bold text-xl">افزودن دسته بندی جدید</h1>
      <FormCategory
      category={category}
      changeHandler={changeHandler}
      formHandler={formHandler}
      selectedType={selectedType}
      setSelectedType={setSelectedType}
      isLoading={isPending}
      />
    </div>
  )
}
export default AddCategory