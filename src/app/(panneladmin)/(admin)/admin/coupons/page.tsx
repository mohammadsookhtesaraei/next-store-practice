"use client"

import Link from "next/link";
import { useGetCoupons } from "@/hook/useCoupons"

import CouponListTable from "@/app/(panneladmin)/(admin)/admin/coupons/components/CouponListTable";
import { HiPlusCircle } from "react-icons/hi";


const CouponPage = () => {

  const {data,isPending}=useGetCoupons();
  const {coupons} =data || {};

  if(!coupons) {
    return []
  };

  if(isPending){
    <p>لودینگ</p>
  }

  return (
       <div>
      <div className="mb-5 flex-between">
        <h1 className="text-xl font-bold mb-5">کد های تخفیف</h1>
        <Link
          href="/admin/coupons/add"
          className="font-bold text-primary-900 flex items-center gap-x-2"
        >
          <HiPlusCircle className="w-6 h-6" /> <span>اضافه کردن کد تحفیف</span>
        </Link>
      </div>
      <CouponListTable coupons={coupons} />
    </div>
  )
}
export default CouponPage