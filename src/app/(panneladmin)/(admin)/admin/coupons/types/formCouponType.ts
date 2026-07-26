import { FormCouponDataState } from "@/app/(panneladmin)/(admin)/admin/coupons/add/page"
import { IProduct } from "@/types/products-interface"

export type FormCouponProps = {
    expireDate: Date,
    setExpireDate: React.Dispatch<React.SetStateAction<Date>>
    type: string
    setType: React.Dispatch<React.SetStateAction<string>>
    formData: FormCouponDataState
    isLoading: boolean,
    onChangeSelect: React.Dispatch<React.SetStateAction<never[]>>
    changeHandler:(e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => void,
    formHandler: (e: React.SubmitEvent<HTMLFormElement>) => void
    options: IProduct[],
     typeChangeHandler:(e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>)=>void,
      defaultValue :string,
}