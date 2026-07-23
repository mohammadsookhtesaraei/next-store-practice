import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

import { usePeyment } from "@/hook/usePayment";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumber";

import { Order } from "@/types/payDetail";


type CartSummaryProps = {
  payDetail: Order;
};

const CartSummary = ({ payDetail }: CartSummaryProps) => {

  const { totalPrice, totalGrossPrice, totalOffAmount } = payDetail;

  const queryClient = useQueryClient();
  
  const { mutateAsync, isPending } = usePeyment();

  const peymentHandler = async () => {
    try {
      const { message } = await mutateAsync();
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
    <div className="border border-gray-400/30 shadow-md bg-white rounded-xl mb-2 p-4 ">
      <p className="mb-4 font-bold">اطلاعات پرداخت</p>
      <div className="flex-between mb-4">
        <span>جمع کل</span>
        <span>{toPersianNumbersWithComma(totalGrossPrice)}</span>
      </div>
      <div className="flex-between mb-4">
        <span>تخفیف</span>
        <span>{toPersianNumbersWithComma(totalOffAmount)}</span>
      </div>
      <div className="flex-between mb-4">
        <span>مبلغ قابل پرداخت</span>
        <span>{toPersianNumbersWithComma(totalPrice)}</span>
      </div>
      <button className="btn btn--primary" onClick={peymentHandler}>
        {isPending ? "درحال ارسال" : "ثبت سفارش"}
      </button>
    </div>
  );
};
export default CartSummary;
