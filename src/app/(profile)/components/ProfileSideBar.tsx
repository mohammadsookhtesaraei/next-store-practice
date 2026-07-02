import Link from "next/link";

const ProfileSideBar = () => {
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
          <button className="bg-red-500 px-4 py-1 hover:scale-105 active:scale-95 transition-transform duration-150 rounded-md text-white cursor-pointer">
            خروج از حساب کاربری
          </button>
        </li>
      </ul>
    </div>
  );
};
export default ProfileSideBar;
