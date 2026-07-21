"use client"
import { useRouter } from "next/navigation"

import { IProduct } from "@/types/products-interface"
import { useAddToCart,useRemoveFromCart } from "@/hook/useAddtoCart"
import { useQueryClient } from "@tanstack/react-query"
import { useGetProfile } from "@/hook/useAuth"
import toast from "react-hot-toast"

type AddToCartProps={
    product:IProduct
}

const AddToCart = ({product}:AddToCartProps) => {
     // add router
    const router=useRouter();

    const {data}=useGetProfile();

    const {user}=data || {};
    if(!user){
        toast.error("ابتدا لاگین کنید");
        router.push("/auth");
        return;
    };



  const queryClient=useQueryClient();
  return (
    <div>
        <button></button>
    </div>
  )
}
export default AddToCart