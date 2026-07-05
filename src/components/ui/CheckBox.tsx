
type CheckBoxProps={
  id:string,
  value:string,
  name:string,
  label:string,
   checked:boolean
  changeHanlder:(e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>)=>void

}

const CheckBox = ({id,checked,label,name ,value,changeHanlder}:CheckBoxProps) => {
  return (
    <div>
        <input type="checkbox" id={id} name={name} checked={checked} value={value} onChange={changeHanlder} />
        <label htmlFor={id}>{label}</label>
    </div>
  )
}
export default CheckBox