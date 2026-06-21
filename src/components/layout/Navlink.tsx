import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  path: string;
  children: React.ReactNode;
};

const NavLink = ({ path, children }: NavLinkProps) => {
  const pathName = usePathname();
  const isActive = pathName === path;

  return (
    <Link
      href={path}
      className={
        isActive
          ? "text-blue-400 px-4 pb-2 border-b border-b-orange-400"
          : "pb-2 px-4 border-b/0"
      }
    >
      {children}
    </Link>
  );
};
export default NavLink;
