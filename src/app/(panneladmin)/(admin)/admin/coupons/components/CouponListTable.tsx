import Link from "next/link";
import { couponListTableTHeads } from "@/constant/tableHeads";
import { useRemoveCoupon } from "@/hook/useCoupons";
import { toLocalStringShortDate } from "@/utils/toLocaleDatePersian";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { HiEye, HiTrash } from "react-icons/hi";
import { RiEdit2Line } from "react-icons/ri";
import { ICoupon } from "@/types/coupon-interface";
import axios from "axios";

type CouponListTableProps = {
  coupons: ICoupon[];
};

const CouponListTable = ({ coupons }: CouponListTableProps) => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useRemoveCoupon();

  const removeHandler = async (id: string) => {
    try {
      const { message } = await mutateAsync(id);
      toast.success(message);
      queryClient.invalidateQueries({ queryKey: ["get-coupons"] });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error?.response?.data?.message);
      }
    }
  };

  return (
    <div className="shadow-sm overflow-auto my-8">
      <table className="border-collapse table-auto w-full min-w-200 text-sm">
        <thead>
          <tr>
            {couponListTableTHeads.map((item) => (
              <th className="whitespace-nowrap table__th" key={item.id}>
                {item.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {coupons.map((item, index) => (
            <tr key={item._id}>
              <td className="table__td">{index + 1}</td>
              <td className="table__td  whitespace-nowrap font-bold">
                {item.code}
              </td>
              <td className="table__td">
                <span className="badge badge--primary">{item.type}</span>
              </td>
              <td className="table__td">{item.amount}</td>
              <td className="table__td">
                <div className="space-y-2 flex flex-col items-start">
                  {item.productIds.map((p) => {
                    return (
                      <span key={p._id} className="badge badge--secondary">
                        {p.title}
                      </span>
                    );
                  })}
                </div>
              </td>
              <td className="table__td">{item.usageCount}</td>
              <td className="table__td">{item.usageLimit}</td>
              <td className="table__td">
                {toLocalStringShortDate(item.expireDate)}
              </td>
              <td className="table__td font-bold text-lg">
                <div className="flex items-center gap-x-4">
                  <Link href={`/admin/coupons/${item._id}`}>
                    <HiEye className="text-primary-900 w-6 h-6" />
                  </Link>
                  <button onClick={() => removeHandler(item._id)}>
                    <HiTrash className="text-rose-600 w-6 h-6" />
                  </button>
                  <Link href={`/admin/coupons/edit/${item._id}`}>
                    <RiEdit2Line className="w-6 h-6 text-secondary-600" />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default CouponListTable;
