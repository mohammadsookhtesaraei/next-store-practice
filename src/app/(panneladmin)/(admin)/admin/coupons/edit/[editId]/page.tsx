"use client";

import FormCoupon from "@/app/(panneladmin)/(admin)/admin/coupons/components/FormCoupon";
import { useGetOneCoupon, useUpdateCoupon } from "@/hook/useCoupons";

import { useGetProducts } from "@/hook/useProducts";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

export type FormCouponDataState = {
  code: string;
  amount: string;
  usageLimit: string;
};

export type ProductIdsState = {
  _id: string;
  title: string;
  slug: string;
};

const EditCoupon = () => {
  const { editId } = useParams<{ editId: string }>();

  const { data } = useGetOneCoupon(editId);

  const { coupon } = data || {};

  const router = useRouter();
  // state form
  const [formCouponData, setFormCouponData] = useState<FormCouponDataState>({
    code: "",
    amount: "",
    usageLimit: "",
  });

  // state type coupon
  const [type, setType] = useState("percent");

  const [productIds, setProductIds] = useState<ProductIdsState[]>([]);
  const [expireDate, setExpireDate] = useState(new Date());

  useEffect(() => {
    if (!coupon) return;

    setFormCouponData({
      code: coupon.code,
      amount: coupon.amount,
      usageLimit: coupon.usageLimit,
    });
    setType(coupon.type);
    setExpireDate(coupon.expireDate);
    setProductIds(coupon.productIds);
  }, [data]);

  // get all products
  const { data: products } = useGetProducts();
  const { isPending: isUpdaingCoupon, mutateAsync } = useUpdateCoupon();

  if (!products) {
    return [];
  }

  // type changeHandler

  const typeChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    setType(e.target.value);
  };

  // formData
  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    const { name, value } = e.target;
    setFormCouponData((prev) => ({ ...prev, [name]: value }));
  };

  const formHandler = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      id: coupon._id,
      data: {
        ...formCouponData,
        type,
        expireDate: new Date(expireDate).toISOString(),
        productIds: productIds.map((p) => p?._id),
      },
    };
    try {
      const { message } = await mutateAsync(data);
      toast.success(message);
      router.push("/admin/coupons");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error?.response?.data?.message);
      }
    }
  };
  return (
    <div>
      <h1 className="mb-4 font-bold text-xl">اضافه کردن کد تخفیف</h1>
      <FormCoupon
        expireDate={expireDate}
        setExpireDate={setExpireDate}
        type={type}
        formData={formCouponData}
        isLoading={isUpdaingCoupon}
        onChangeSelect={setProductIds}
        changeHandler={changeHandler}
        formHandler={formHandler}
        options={products}
        typeChangeHandler={typeChangeHandler}
        defaultValue=""
      />
    </div>
  );
};
export default EditCoupon;
