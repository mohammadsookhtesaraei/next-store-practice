
import ProductsItmes from "@/app/products/components/ProductsItmes";
import { getProducts } from "@/services/productsService";
import { IProduct } from "@/types/products-interface";

const ProductsList = async() => {
      const products=await getProducts() as IProduct[];

  return (
    <div className="flex gap-x-2">
        {products.map((item)=>(
            <ProductsItmes key={item._id} {...item}/>
        ))}
    </div>
  )
}
export default ProductsList