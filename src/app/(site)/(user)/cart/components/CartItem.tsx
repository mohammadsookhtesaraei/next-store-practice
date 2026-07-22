"use client"

import { useQueryClient } from "@tanstack/react-query";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumber";
import { useAddToCart, useRemoveFromCart } from "@/hook/useAddtoCart";

import axios from "axios";
import toast from "react-hot-toast";


import { IProduct } from "@/types/products-interface";

import { FaMinus } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

type CartItemProps = {
  item: IProduct;
};

const CartItem = ({
  item: { _id, discount, offPrice, price, quantity, title },
}: CartItemProps) => {


  // for refetch user and update cart
  const queryClient = useQueryClient();


// add mutate
  const { mutateAsync: addMutate } = useAddToCart();
// remove mutate
  const { mutateAsync: removeMutate } = useRemoveFromCart();


  // addHandler
  const addHandler = async () => {
    try {
      const { message } = await addMutate(_id);
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


  // removeHandler
  const removeHandler = async () => {
    try {
      const { message } = await removeMutate(_id);
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

  
  return (
    <div className="border border-gray-400/30 shadow-md bg-white rounded-xl mb-2 p-4 flex items-center justify-between h-26">
      <p className="text-gray-600">
        نام محصول : <span className="text-slate-600">{title}</span>
      </p>
      <div className="space-y-6">
        <div>
          <span>قیمت :</span>
          <span
            className={discount ? "line-through" : "font-bold text-blue-400"}
          >
            {toPersianNumbersWithComma(price)}
          </span>
        </div>
        {!!discount && (
          <div className="flex items-center gap-x-2 ">
            <p className="font-bold">{toPersianNumbersWithComma(offPrice)}</p>
            <div className="bg-rose-500 text-sm px-2 py-0.5 rounded-xl text-white">
              {discount} %
            </div>
          </div>
        )}
      </div>

      <div>
        <p className="text-gray-400">
          تعداد : <span className="text-gray-800">{quantity}</span>
        </p>
        <div className="flex items-center gap-x-5 my-2">
          <button onClick={addHandler} className="btn btn--primary">
            <FaPlus className="size-6 text-white" />
          </button>
          <button onClick={removeHandler} className="btn btn--primary">
            {quantity > 1 ? (
              <FaMinus className="size-6 text-white" />
            ) : (
              <FaTrash className="size-6 text-white" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
