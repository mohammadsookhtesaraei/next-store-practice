"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { useMutation } from "@tanstack/react-query";

import TextField from "@/components/ui/TextField";
import { completeProfile } from "@/services/authServices";
import axios from "axios";
import toast from "react-hot-toast";

const CheckProfile = () => {
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
  });

  const router = useRouter();

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    const { value, name } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  const { data, isPending, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });

  const formHandler = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { user, message } = await mutateAsync(profileData);
      toast.success(message);
      if (user.isActive) {
        router.push("/");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error?.response?.data?.message);
      }
      toast.error("مشکلی  پیش امده است");
    }
  };

  return (
    <div className="flex justify-center">
      <div className="max-w-md w-full">
        <form className="space-y-10" onSubmit={formHandler}>
          <TextField
            label="نام و نام خانوادگی"
            value={profileData.name}
            name="name"
            changeHandler={changeHandler}
          />
          <TextField
            label="ایمیل"
            value={profileData.email}
            name="email"
            changeHandler={changeHandler}
          />

          <button type="submit" className="btn btn--primary">{isPending ? "در حال ارسال" : "ارسال"}</button>
        </form>
      </div>
    </div>
  );
};
export default CheckProfile;
