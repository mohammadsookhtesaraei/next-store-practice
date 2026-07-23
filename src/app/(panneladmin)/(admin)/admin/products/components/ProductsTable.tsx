import { productListTableTHeads } from "@/constant/tableHeads";
import { IProduct } from "@/types/products-interface";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "@/utils/toPersianNumber";
import Link from "next/link";
import { AiFillEdit } from "react-icons/ai";
import { HiEye, HiTrash } from "react-icons/hi";

type ProductsTableProps = {
  products: IProduct[];
};

const ProductsTable = ({ products }: ProductsTableProps) => {
  return (
    <table className="border-separate border-spacing-y-3  table-auto w-full min-w-200  text-sm">
      <thead>
        <tr>
          {productListTableTHeads.map((item) => (
            <th className="whitespace-nowrap table__th" key={item.id}>
              {item.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {products.map((item: IProduct, index: number) => (
          <tr
            className="[&>td]:p-4 [&>td]:bg-gray-300 [&>td]:text-center [&>td]:first:rounded-r-lg [&>td]:last:rounded-l-lg "
            key={item._id}
          >
            <td>{index}</td>
            <td>{item.title}</td>
            <td>{item.category?.title}</td>
            <td>{toPersianNumbersWithComma(item.price)}</td>
            <td>{toPersianNumbers(item.discount)}%</td>
            <td>{toPersianNumbersWithComma(item.offPrice)}</td>
            <td>
              {toPersianNumbers(item.countInStock > 0 ? item.countInStock : 0)}
            </td>
            <td className="flex items-center gap-x-4">
              <Link href={`/admin/products/${item._id}`}>
                <HiEye />
              </Link>
              <button>
                <HiTrash className="text-rose-600 h-6 w-6" />
              </button>
              <Link href={`/admin/products/edit/${item._id}`}>
                <AiFillEdit />
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default ProductsTable;
