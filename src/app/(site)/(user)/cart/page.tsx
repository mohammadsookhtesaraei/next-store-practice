"use client"

import { useGetProfile } from "@/hook/useAuth"
import Link from "next/link";
import CartItem from "@/app/(site)/(user)/cart/components/CartItem";
import { IProduct } from "@/types/products-interface";


const Cart = () => {

  // check user login or not
  const {data,isPending}=useGetProfile();
  const {user,cart}=data || {};

// loading
  if(isPending) {
    return (
      <p>لودینگ...</p>
    )
  }

  // if user and data not exist must be login
  if(!user || !data){
    return (
      <div className="p-6">
       <div className="p-4 border border-gray-400/30 rounded-md shadow-md">
         <p className="text-gray-500 font-bold">برای مشاهده سبد خرید لطفا <Link href="/auth" className="text-blue-400">لاگین</Link> کنید</p>
       </div>
      </div>
    )
  }

  // if user and cart product not exist or product length is zero show empty cart
    if(!user?.cart?.products || user.cart?.products.length === 0 ){
    return (
      <div className="p-6">
       <div className="p-4 border border-gray-400/30 rounded-md shadow-md">
         <p className="text-gray-500 font-bold">سبد خرید شما خالیست!</p>
         <Link className="my-4 bg-blue-400 text-white rounded-md px-4 py-1 inline-block" href="/products">صفحه محصولات</Link>
       </div>
      </div>
    )
  }




  return (
    <div>
      <div>
        {cart&&cart.productDetail.map((item:IProduct)=>(
          <CartItem key={item._id} item={item}/>
        ))}
      </div>
      <div></div>
    </div>
  )
}
export default Cart