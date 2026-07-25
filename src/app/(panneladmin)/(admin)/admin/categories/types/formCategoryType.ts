
import { CategoryState } from "@/app/(panneladmin)/(admin)/admin/categories/add/page"


export type FromCategoryTypeProps = {
    category: CategoryState,
    changeHandler: (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => void;
    formHandler: (e: React.SubmitEvent<HTMLFormElement>) => void;
    selectedType: string
    setSelectedType: React.Dispatch<React.SetStateAction<string>>
    isLoading: boolean
}