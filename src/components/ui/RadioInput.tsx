

type RadioInputProps={
    value:string,
    label:string,
    changeHandler:(e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>)=>void,
    name:string,
    checked:boolean
  
}

const RadioInput = ({label,value,name,checked,changeHandler}:RadioInputProps) => {
  return (
    <div className="flex items-center gap-x-2 text-secondary-600">
        <label className="cursor-pointer" htmlFor={label}>{label}</label>
        <input className="cursor-pointer form-checkbox rounded-[5px] border-none bg-secondary-100/80 w-4 h-4 checked:text-primary-900" type="radio" name={name} id={label} checked={checked} value={value}  onChange={changeHandler}/>
    </div>
  )
}
export default RadioInput