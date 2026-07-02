"use client"


import Link from "next/link";
import { logout } from "@/services/authServices";


const ProfileSideBar = () => {
  const logoutHandler=async()=>{
   await logout();
  //  local.storage.removeItem("userInfo")
  // local.storage.removeItem("cart item")
  // local.storage.removeItem("token")
  // این میاد کل اپ رو رفرشت میکنه همه استیت ها حذف میشه و به صفحه هوم میره
  document.location.href="/"
  };

  return (
    <div className="p-4">
      <ul className="border p-2 bg-white [&>li>a]:text-blue-400 rounded-md flex flex-col gap-y-6 border-slate-300 shadow-md">
        <li>
          <Link href="/">خانه</Link>
        </li>
        <li>
          <Link href="/profile">داشبورد کاربر</Link>
        </li>
        <li>
          <Link href="/profile/me">اطلاعات کاربر</Link>
        </li>
        <li>
          <button onClick={logoutHandler} className="bg-red-500 px-4 py-1 hover:scale-105 active:scale-95 transition-transform duration-150 rounded-md text-white cursor-pointer">
            خروج از حساب کاربری
          </button>
        </li>
      </ul>
    </div>
  );
};
export default ProfileSideBar;
