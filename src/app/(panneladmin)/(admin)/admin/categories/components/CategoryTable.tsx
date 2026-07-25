import { ICategory } from "@/types/category-interface"

import { categoryListTableTHeads } from "@/constant/tableHeads"
import Link from "next/link"
import { HiEye, HiTrash } from "react-icons/hi"
import { AiFillEdit } from "react-icons/ai"

type CategoryTableProps={
    categories:ICategory[]
}


const CategoryTable = ({categories}:CategoryTableProps) => {
  return (
    <table className="border-separate border-spacing-y-3  table-auto w-full min-w-200  text-sm">
        <thead>
          <tr>
            {categoryListTableTHeads.map((item)=>(
                <th className="whitespace-nowrap table__th" key={item.id}>{item.label}</th>
            ))}
          </tr>
        </thead>

        <tbody>
            {categories.map((item,index)=>(
                <tr  className="[&>td]:text-center [&>td]:first:rounded-r-lg [&>td]:last:rounded-l-lg " key={item._id}>
                    <td>{index}</td>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>{item.englishTitle}</td>
                    <td className="badge badge--primary">{item.type}</td>
                    <td className="flex-center gap-x-4">
              <Link href={`/admin/categories/${item._id}`}>
                <HiEye />
              </Link>
              <button>
                <HiTrash className="text-rose-600 h-6 w-6" />
              </button>
              <Link href={`/admin/categories/edit/${item._id}`}>
                <AiFillEdit />
              </Link>
            </td>
                </tr>
            ))}

        </tbody>
    </table>
  )
}
export default CategoryTable