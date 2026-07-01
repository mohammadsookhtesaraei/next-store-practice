"use client";

// next
import { useRouter } from "next/navigation";

// react
import { useState, useEffect } from "react";

// react query
import { useMutation,useQueryClient } from "@tanstack/react-query";

// toast lib
import toast from "react-hot-toast";
// axios
import axios from "axios";

// api services
import { checkotpCode, getOtpCode } from "@/services/authServices";


// components
import SendOtp from "@/app/(user)/auth/components/SendOtp";
import CheckOtp from "@/app/(user)/auth/components/CheckOtp";


const resend = 90;

const Auth = () => {
  // all state - phoneNumber-otpcode-timer-step
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(resend);
  const [step, setStep] = useState(1);

  // next router
  const router = useRouter();
  // queryclient for invalidate
  const queryClient = useQueryClient();

  // sendphoneNumber mutation
  const { isPending, mutateAsync } = useMutation({
    mutationFn: getOtpCode,
  });

  // send phoneNumber with otpCode mutation
  const { mutateAsync: resonseOtp, isPending: isloading } = useMutation({
    mutationFn: checkotpCode,
  });

  // change handler phoneNumber state
  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    const { value } = e.target;
    setPhoneNumber(value);
  };

  // we have not changeHandler for checkotp component
  // since I used otp form lib and just send state otp and setOtp props

  // onSubmit phoneNumber form for  sendOtpComponent 
  const otpPhoneNumberHandler = async (
    e: React.SubmitEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();

    try {
      const { message } = await mutateAsync({ phoneNumber });
      toast.success(message);
      setStep(2);
      setOtp("");
      setTime(resend);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error?.response?.data?.message);
      }
      toast.error("مشکلی پیش آمده");
    }
  };


  // form handler for {phoneNumber and otpCode} for checkOtpComponent
  const otpCheckHandler = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { user, message } = await resonseOtp({ phoneNumber, otp });
      toast.success(message);
      if (!user.isActive) {
        router.push("/check-profile");
      } else {
        queryClient.invalidateQueries({
          queryKey: ["get-user"],
        });

        //  روتر پوش فقط یو ار ال رو تغیر میده
        // استیت و کش حفظ میشه اطلاعات در  حافظه می مونه
        // استیت و کانتکس از اول ساخته نمی شن
        // وقتی روت تغییر میکنه جایی اگه اطلاعات کاربر  نیاز دارم مثلا هدر
        // چون کاربر هنوز لاگین نکرده نال هستش
        // لاگین میکنه روترپوش اتفاق میوفته ولی هنوز کاربر نال هستش
        // با رفرش دستی صفحه درخواست اجرا میشه اطلاعات کاربر نمایش داده میشه
        // که کار درستی نیست چون با رفرش صفحه  همه  چی از اول ساخته میشه یکجورایی

        // پس باید از پوش استفاده کنیم تا صفحه رفرش نشه برا همین داریم از نکست استفاده
        // می کنیم که ری لود و رفرش نداشته باشیم وقتی جابجا میشیم بین صفحات
        //  بهترین روش استفاده از پوش هستش چون سرعت بالاتره و وضعیت استیت ها حفظ میشه رفرش نمی شه
        //  ولی باید قبل از پوش اطلاعات کار بر رو اینولیدیت کنیم
        //  که در بالای این کد با ری اکت کویری انجام دادیم تا اطلاعات کاربر نشون داده بشه بدون ری لود صفحه

        router.push("/");
        // اما روش دوم استفاده
        //  document.location.href="/"
        // زیاد توصیه نمیشه روت عوض میشه
        //  ولی کل دیتای برنامه رو ریست می کنه رفرش اتفاق میوفته
        // استیت کانتکس از اول ساخته میشن
        // و نسبت به روتر پوش کندتره
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error?.response?.data?.message);
      }
      toast.error("مشکلی پیش آمده");
    }
  };


  // useEfect timer
  useEffect(() => {
    const interval =
      time > 0 &&
      setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [time]);

  // stepRender function  if switch between step one and two in state step
  function stepRenders() {
    switch (step) {
      case 1:
        return (
          <SendOtp
            phoneNumber={phoneNumber}
            changeHandler={changeHandler}
            onSubmit={otpPhoneNumberHandler}
            isLoading={isPending}
          />
        );
      case 2:
        return (
          <CheckOtp
            otp={otp}
            onBack={() => setStep(1)}
            setOtp={setOtp}
            onSubmit={otpCheckHandler}
            time={time}
            isloading={isloading}
          />
        );
    }
  }

  return (
    <div>
      <div className="container">{stepRenders()}</div>
    </div>
  );
};
export default Auth;
