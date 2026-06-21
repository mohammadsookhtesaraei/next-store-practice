

type MenuItems = {
    id: number;
    path: string;
    children: string;
}


const menuItems: MenuItems[] = [
    { id: 1, path: "/", children: "خانه" },
    { id: 2, path: "/products", children: "محصولات" },
    { id: 3, path: "/admin", children: "پنل ادمین" },
    { id: 4, path: "/profile", children: "پنل کاربر" },
];


export default menuItems;