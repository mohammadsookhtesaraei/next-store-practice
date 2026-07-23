
import { FormadDataTypes } from "@/app/(panneladmin)/(admin)/admin/products/types/formDatatypes";
import { ICategory } from "@/types/category-interface";

export type FormProductsProps = {
    formData:FormadDataTypes
    changeHandler: (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,) => void,
    formHandler: (e: React.SubmitEvent<HTMLFormElement>) => void,
    tags: string[],
    setTags: React.Dispatch<React.SetStateAction<string[]>>
    categories: ICategory[],
    setSelectedCategory: React.Dispatch<React.SetStateAction<string>>
    selectedCategory: string
}