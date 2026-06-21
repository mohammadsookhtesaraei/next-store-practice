import { ComponentPropsWithoutRef } from "react"



type TextFieldProps=ComponentPropsWithoutRef<"input"> & {
    label:string,
      changeHandler: (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>)=>void,
}


const TextField = ({label,name,value,changeHandler}:TextFieldProps) => {
  return (
    <div>
        <label className="block mb-2" htmlFor={name}>{label}</label>
        <input className="textField__input" type="text" id={name} name={name} value={value} onChange={changeHandler}  />
    </div>
  )
}
export default TextField