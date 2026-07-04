
import { Suspense } from "react";
import ProductsList from "@/app/products/components/ProductsList";

const Products = async() => {


  return (
    <div className="grid grid-cols-12">
      <div className="col-span-3"></div>
       <div className="col-span-9">
        <Suspense fallback={<p>loading...</p>}>
         <ProductsList/>
        </Suspense>
       </div>
    </div>
  )
}
export default Products