"use client";
import menuItems from "@/constant/menuitems";

import NavLink from "@/components/layout/Navlink";

const Header = () => {
  const user = false;
  return (
    <header className="shadow-md sticky top-0 transition-all duration-150">
      <nav className="container flex items-center h-15">
        <ul className="flex w-full justify-between">
          <div className="flex">
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
