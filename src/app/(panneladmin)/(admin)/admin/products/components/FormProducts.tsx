
import { productsFormData } from "@/constant/ProductsFromData"
import { FormProductsProps } from "@/app/(panneladmin)/(admin)/admin/products/components/formProductType"
import { TagsInput } from "react-tag-input-component"


import TextField from "@/components/ui/TextField"


const FormProducts = ({formData,changeHandler,formHandler,tags,setTags,categories,selectedCategory,setSelectedCategory}:FormProductsProps) => {
  return (
    <div>
     <form onSubmit={formHandler}>
        {productsFormData.map((item)=>(
            <TextField 
            key={item.id} 
            label={item.label} 
            name={item.name} 
            value={formData[item.name as keyof typeof formData || "" ]}
            changeHandler={changeHandler}
            />
        ))}

          <div>
          <label className="mb-4 block" htmlFor="tags">
            تگ محصولات
          </label>
          <TagsInput value={tags} onChange={setTags} name="tags" />
        </div>
          <div className=" p-2">
          <label className="mb-4 block" htmlFor="category">
            دسته بندی
          </label>
          <select
            className="w-full border border-gray-400 rounded"
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((item) => (
              <option key={item._id} value={item._id}>
                {item.title}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn--primary">
         ارسال
        </button>
     </form>
    </div>
  )
}
export default FormProducts