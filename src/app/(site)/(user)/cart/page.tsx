"use client"
import { useRouter } from "next/navigation";
import { useGetProfile } from "@/hook/useAuth"
import Link from "next/link";
import CartItem from "@/app/(site)/(user)/cart/components/CartItem";


const Cart = () => {
  const {data,isPending}=useGetProfile();
  const {user,cart}=data || {};
  console.log(user);
  console.log(cart);
  const router=useRouter();

  if(isPending) {
    return (
      <p>لودینگ...</p>
    )
  }

  if(!user || !data){
    return (
      <div className="p-6">
       <div className="p-4 border border-gray-400/30 rounded-md shadow-md">
         <p className="text-gray-500 font-bold">برای مشاهده سبد خرید لطفا <Link href="/auth" className="text-blue-400">لاگین</Link> کنید</p>
       </div>
      </div>
    )
  }

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
        {cart&&cart.productDetail.map((item)=>(
          <CartItem key={item._id} item={item}/>
        ))}
      </div>
      <div></div>
    </div>
  )
}
export default Cart