import { decreaseFromCart, sendAddToCart } from "@/services/AddToCartService";

import { useMutation } from "@tanstack/react-query";


export const useAddToCart=()=>{
   return useMutation({
        mutationFn:sendAddToCart
    })
};


export const useRemoveFromCart=()=>{
       return useMutation({
        mutationFn:decreaseFromCart
    })
};