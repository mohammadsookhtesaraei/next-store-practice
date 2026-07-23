"use client";

import Link from "next/link";

import { logout } from "@/services/authServices";
const AdminSideBar = () => {
  const logoutHandler = async () => {
    await logout();
    //  local.storage.removeItem("userInfo")
    // local.storage.removeItem("cart item")
    // local.storage.removeItem("token")
    // این میاد کل اپ رو رفرشت میکنه همه استیت ها حذف میشه و به صفحه هوم میره
    document.location.href = "/";
  };

  return (
    <div>
      <ul className="flex flex-col space-y-8">
        <li>
          <Link href="/">صفحه اصلی</Link>
        </li>
        <li>
          <Link href="/admin">دشبورد</Link>
        </li>
        <li>
          <Link href="/admin/users">کاربران</Link>
        </li>
        <li>
          <Link href="/admin/products"> محصولات</Link>
        </li>
        <li>
          <Link href="/admin/categories">دسته بندی</Link>
        </li>
        <li>
          <Link href="/admin/coupons">کد تخفیف</Link>
        </li>
        <Link href="/admin/payments">سفارشات</Link>
        <li>
          <button
            className="btn bg-rose-500 text-white cursor-pointer"
            onClick={logoutHandler}
          >
            خروج از حساب کاربری
          </button>
        </li>
      </ul>
    </div>
  );
};
export default AdminSideBar;
