
import Link from "next/link";
import { couponListTableTHeads } from "@/constant/tableHeads";
import { useRemoveCoupon } from "@/hook/useCoupons";
import { toLocalStringShortDate } from "@/utils/toLocaleDatePersian";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { HiEye, HiTrash } from "react-icons/hi";
import { RiEdit2Line } from "react-icons/ri";
import { ICoupon } from "@/types/coupon-interface";



type CouponListTableProps={
    coupons:ICoupon[]
}


const CouponListTable = ({coupons}:CouponListTableProps) => {
  return (

    <div className="shadow-sm overflow-auto my-8">

  
        <table className="border-collapse table-auto w-full min-w-200 text-sm">
            <thead>
                <tr>
                    {couponListTableTHeads.map((item)=>(
                        <th className="whitespace-nowrap table__th" key={item.id}>{item.label}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {coupons.map((item,index)=>(
                    <tr>

                    </tr>
                ))}
            </tbody>
        </table>

    </div>
  )
}
export default CouponListTable