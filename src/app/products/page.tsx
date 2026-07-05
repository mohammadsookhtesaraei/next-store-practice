import { Suspense } from "react";
import ProductsList from "@/app/products/components/ProductsList";
import CategorySideBar from "@/app/products/components/categorySideBar/CategorySideBar";

const Products = () => {
  return (
    <div className="grid grid-cols-12 h-screen gap-8">
      <div className="col-span-3">
        <Suspense fallback={<p>loading...</p>}>
          <CategorySideBar />
        </Suspense>
      </div>
      <div className="col-span-9">
        <Suspense fallback={<p>loading...</p>}>
          <ProductsList />
        </Suspense>
      </div>
    </div>
  );
};
export default Products;
