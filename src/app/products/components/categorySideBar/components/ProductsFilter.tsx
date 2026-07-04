
"use client"

import CheckBox from "@/components/ui/CheckBox"
import { useState } from "react"

const ProductsFilter = () => {
  const [isOpen,setIsOpen]=useState(false);

  return (
    <div className="">
      <button onClick={()=>setIsOpen((prev)=>!prev)} className="flex items-center gap-x-2 text-gray-400">
        <span>بر اساس نام محصول</span>
        <span className={`text-sm text-gray-500 transition-transform duration-200 ${isOpen ? "rotate-180" :""}`}>▼</span>
      </button>
      <div className={`${isOpen ? "max-h-96" :"max-h-0"} overflow-hidden border-b bg-red-400 transition-all duration-200`}>
       <p>list</p>
       <p>list</p>
       <p>list</p>

      </div>
     
    </div>
  )
}
export default ProductsFilter