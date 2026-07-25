import TextField from "@/components/ui/TextField";

import { FromCategoryTypeProps } from "@/app/(panneladmin)/(admin)/admin/categories/types/formCategoryType";
import { categoryTypes } from "@/constant/categoryType";

const FormCategory = ({
  category,
  changeHandler,
  formHandler,
  selectedType,
  setSelectedType,
  isLoading,
}: FromCategoryTypeProps) => {
  return (
    <div className="max-w-sm mb-10">
      <form onSubmit={formHandler}>
        <TextField
          label="عنوان"
          name="title"
          value={category.title || ""}
          changeHandler={changeHandler}
        />
        <TextField
          name="englishTitle"
          label="عنوان انگلیسی"
          value={category.englishTitle || ""}
          changeHandler={changeHandler}
        />
        <TextField
          name="description"
          label="توضیحات"
          value={category.description || ""}
          changeHandler={changeHandler}
        />

        <div>
          <label htmlFor="type" className="mb-2 block">
            نوع
          </label>
          <select
            className="w-full border border-gray-400 rounded"
            id="type"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="">انتخاب کنید</option>
            {categoryTypes.map((item) => (
              <option key={item.id} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-2">
          {isLoading ? (
            <p>loading..</p>
          ) : (
            <button className="btn btn--primary w-full">تایید</button>
          )}
        </div>
      </form>
    </div>
  );
};
export default FormCategory;
