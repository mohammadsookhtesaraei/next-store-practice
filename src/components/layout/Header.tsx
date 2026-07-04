"use client";
import menuItems from "@/constant/menuitems";

import NavLink from "@/components/layout/Navlink";
import { useGetProfile } from "@/hook/useAuth";

const Header = () => {
 const {data,isPending}=useGetProfile();

 const {user}=data || {};


  return (
    <header className={`shadow-md mb-10  bg-white sticky top-0 transition-all duration-200 ${isPending ? "blur-sm opacity-70" :"opacity-100 blur-0"}`}>
      <nav className="container flex items-center h-15">
    <ul className="flex w-full justify-between gap-4">
      <div className="flex items-center gap-x-3">
    {menuItems.map((item) => (
      <li key={item.id}>
        <NavLink path={item.path}>{item.children}</NavLink>
      </li>
    ))}
      </div>
        <li>
      {user ? (
        <NavLink path="/profile">پروفایل</NavLink>
      ) : (
        <NavLink path="/auth">ورود</NavLink>
      )}
    </li>
   </ul>


      </nav>
    </header>
  );
};
export default Header;
