"use client"

import PaymentListTable from "@/app/(panneladmin)/(admin)/admin/payments/components/PaymentListTable";
import { useGetPayments } from "@/hook/usePayment"


const Peyments = () => {

    const {data,isPending}=useGetPayments();

    const {payments}=data || {};
    console.log(payments);

    if(isPending) {
        return <p>loading...</p>
    }
  return (
    <div>
      <div className="mb-5 flex-between">
        <h1 className="text-xl font-bold mb-5">سفارشات</h1>
      </div>
      <PaymentListTable payments={payments} />
    </div>
  )
}
export default Peyments