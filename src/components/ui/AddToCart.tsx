"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import toast from "react-hot-toast";
import axios from "axios";

import { useQueryClient } from "@tanstack/react-query";
import { useGetProfile } from "@/hook/useAuth";
import { UserProfile } from "@/types/user-interface";

import { IProduct } from "@/types/products-interface";
import { useAddToCart } from "@/hook/useAddtoCart";

type AddToCartProps = {
  product: IProduct;
};

const AddToCart = ({ product }: AddToCartProps) => {
  // for refetch user and update product cart after add product
  const queryClient = useQueryClient();
  // add router
  const router = useRouter();

  // get user-for check in login or not
  const { data } = useGetProfile();

  // user
  const { user } = data || {};

  // mutation for add product to backend
  const { mutateAsync: addMutate } = useAddToCart();

  // add handler
  const addHandler = async () => {
    // check user and push
    if (!user) {
      toast.error("ابتدا لاگین کنید");
      router.push("/auth");
      return;
    }

    try {
      const { message } = await addMutate(product?._id);
      toast.success(message);
      queryClient.invalidateQueries({
        queryKey: ["get-user"],
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error?.response?.data?.message);
      }
    }
  };

  // check before product add in cart. maybe that is in cart. return boolean
  const isinCart = (user: UserProfile, product: IProduct) => {
    return (
      user?.cart?.products.some((p) => p.productId === product._id) ?? false
    );
  };

  return (
    <div>
      {/* check */}
      {isinCart(user, product) ? (
        <Link className="btn btn--primary" href="/cart">
          ادامه سفارش
        </Link>
      ) : (
        <button className="btn btn--primary" onClick={addHandler}>
          اضافه به سبد خرید
        </button>
      )}
    </div>
  );
};
export default AddToCart;
