import { CookieStore } from "@/app/(site)/(user)/products/components/ProductsList";


type cookies = {
    name: string,
    value: string
}



export const toStringCookie = (cookies: CookieStore) => {

    let strCookie = ""

    const allcookies: cookies[] = cookies.getAll();

    allcookies.forEach((item) => {
        strCookie += `${item.name}=${item.value};`
    });

    return strCookie


};