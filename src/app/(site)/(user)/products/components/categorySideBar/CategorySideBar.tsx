import ProductsFilter from "@/app/(site)/(user)/products/components/categorySideBar/components/ProductsFilter";
import ProductsSorted from "@/app/(site)/(user)/products/components/categorySideBar/components/ProductsSorted";
import { getCategories } from "@/services/categoriesServices";

const CategorySideBar = async() => {
const categories=await getCategories();

  return (
    <div className="w-full h-96 border border-gray-400/30 p-2 rounded-md shadow-md bg-white">
        <h2 className="my-6">دسته بندی محصولات</h2>
        <ProductsFilter categories={categories}/>
        <ProductsSorted/>
    </div>
  )
}
export default CategorySideBar