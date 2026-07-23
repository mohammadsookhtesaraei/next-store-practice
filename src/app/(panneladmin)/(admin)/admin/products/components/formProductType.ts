import { FormaddDataTypes } from "@/app/(panneladmin)/(admin)/admin/products/add/types/formDatatypes";
import { ICategory } from "@/types/category-interface";

export type FormProductsProps = {
    formData:FormaddDataTypes
    changeHandler:( e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,)=>void,
    formHandler:(e: React.SubmitEvent<HTMLFormElement>)=>void,
    tags:string[],
    setTags:React.Dispatch<React.SetStateAction<string[]>>
    categories:ICategory[],
     setSelectedCategory:React.Dispatch<React.SetStateAction<string>>
     selectedCategory:string
}