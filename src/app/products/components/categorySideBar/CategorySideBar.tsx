import ProductsFilter from "@/app/products/components/categorySideBar/components/ProductsFilter";
import { getCategories } from "@/services/categoriesServices";

const CategorySideBar = async() => {
const categories=await getCategories();

  return (
    <div className="w-full border border-gray-400 p-2 rounded-md">
        <h2>دسته بندی محصولات</h2>
        <ProductsFilter/>
    </div>
  )
}
export default CategorySideBar