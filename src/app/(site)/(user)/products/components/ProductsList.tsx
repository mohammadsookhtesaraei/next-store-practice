
import ProductsItmes from "@/app/(site)/(user)/products/components/ProductsItmes";
import { getProducts } from "@/services/productsService";
import { IProduct } from "@/types/products-interface";

const ProductsList = async({query}:{
    query:string
}) => {
      const products=await getProducts(query) as IProduct[];

  return (
    <div className="flex flex-wrap gap-2">
        {products.map((item)=>(
            <ProductsItmes key={item._id} {...item}/>
        ))}
    </div>
  )
}
export default ProductsList