import { cookies } from "next/headers";

import ProductsItmes from "@/app/(site)/(user)/products/components/ProductsItmes";
import { getProducts } from "@/services/productsService";
import { IProduct } from "@/types/products-interface";
import { toStringCookie } from "@/utils/toStringCookie";

export type CookieStore = Awaited<ReturnType<typeof cookies>>;

const ProductsList = async({query}:{
    query:string
}) => {
  
    // get cookie for who is login
    const cookieStore:CookieStore=await cookies();
   
    // since cookie is readOnly must be convert to string and return accessToken and refreshToken as a string.

    const strCookie=toStringCookie(cookieStore);
    
    // and set cookie to header and send to backend now we know who is login and we have information user.
      const products=await getProducts(query,strCookie) as IProduct[];

    //   why we do this? for like product we must know who user liked product and database must be upadate with ui


  return (
    <div className="flex flex-wrap gap-2">
        {products.map((item)=>(
            <ProductsItmes key={item._id} {...item}/>
        ))}
    </div>
  )
}
export default ProductsList