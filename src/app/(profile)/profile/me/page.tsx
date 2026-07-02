"use client";
import { useEffect, useState } from "react";

import { useGetProfile } from "@/hook/useAuth";

import { useMutation } from "@tanstack/react-query";

import { useQueryClient } from "@tanstack/react-query";

import TextField from "@/components/ui/TextField";
import axios from "axios";
import toast from "react-hot-toast";
import { updateProfile } from "@/services/authServices";
import { objectUtils } from "@/utils/objectUtils";
import { RotatingLines } from "react-loader-spinner";

export type FormDataState = {
  name: string;
  email: string;
  phoneNumber: string;
  biography: string;
};
// نکته مهم این رو داخل کامپونت تعریف نمی کنیم چون ارایه  رفرنس تایپ هست
// ببریمش داخل کامپونت با رندر شدن کامپونت از اول ساخته میشه و چون داخل یوز افکت ازش استفاده میکنیم
// میوفتیم توی لوپ بی نهایت رندر
const includesKey = ["name", "email", "phoneNumber", "biography"];

// بقیه چیزاهم مشخصه ما باید اطلاعات کاربر رو بگیریم
// در مونت اولیه داخل اینپوتاش نشون بدیم
// پس فرم داریم
// استیت داریم
// کاربر با ری اکت کویری بتونه اطلاعاتش رو  ابدیت کنه
// با متد پچ
// و در اخرم  اینولیدیت بشه
// قسمت سختش ابجکت یوتیلز که چیز سختی نیست
// بقیه اش هندل کردن یک فرم فرستادن اطلاعات کاربر به بکند اند

function MeProfile() {
  const usequeryClient = useQueryClient();

  const { data, isPending: isLoading } = useGetProfile();

  const { isPending, mutateAsync } = useMutation({
    mutationFn: updateProfile,
  });

  const [formData, setFormData] = useState({} as FormDataState);

  const { user } = data || {};

  useEffect(() => {
    if (user) {
      setFormData(objectUtils(user, includesKey));
    }
  }, [user]);

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    const { value, name } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const formhandler = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { message } = await mutateAsync(formData);
      toast.success(message);
      usequeryClient.invalidateQueries({
        queryKey: ["get-user"],
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error?.response?.data?.message);
      }
    }
  };

  if (isLoading)
    return (
      <div className="w-fit bg-red-500">
        <RotatingLines
          visible={true}
          height="50"
          width="50"
          color="grey"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );

  return (
    <div className="max-w-sm">
      <h1 className="mb-2">اطلاعات کاربری</h1>
      <form className="space-y-10" onSubmit={formhandler}>
        {Object.keys(objectUtils(user, includesKey)).map((item) => (
          <TextField
            label={item}
            name={item}
            key={item}
            value={formData[item as keyof FormDataState] || ""}
            changeHandler={changeHandler}
          />
        ))}
        <button className="btn btn--primary" type="submit">
          {isPending ? "در حال ارسال" : "ارسال"}
        </button>
      </form>
    </div>
  );
}
export default MeProfile;
