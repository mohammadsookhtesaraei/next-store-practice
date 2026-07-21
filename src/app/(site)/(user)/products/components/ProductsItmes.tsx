import { IProduct } from "@/types/products-interface"
import Link from "next/link";

type ProductsItmesProps=IProduct&{};

const ProductsItmes = ({title,price,slug}:ProductsItmesProps) => {
  return (
    <div className="w-62.5 border border-gray-400/30 rounded-md shadow-md p-6">
      <h2 className="text-blue-400 font-bold text-xl mb-6">{title}</h2>
      <p className="text-gray-600 mb-6">قیمت:<span className="text-gray-400">{price}</span></p>
      <Link className="px-4 py-0.5 bg-blue-400 rounded-md text-white hover:bg-blue-500" href={`/products/${slug}`}>مشاهده جزییات محصول</Link>
    </div>
  )
}
export default ProductsItmes