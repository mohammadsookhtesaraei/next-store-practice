"use client"

import { IProduct } from "@/types/products-interface"


type AddToCartProps={
    product:IProduct
}

const AddToCart = ({product}:AddToCartProps) => {
  return (
    <div>AddToCart</div>
  )
}
export default AddToCart