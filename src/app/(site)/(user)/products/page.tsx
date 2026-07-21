import { Suspense } from "react";
import ProductsList from "@/app/(site)/(user)/products/components/ProductsList";
import CategorySideBar from "@/app/(site)/(user)/products/components/categorySideBar/CategorySideBar";
import queryString from "query-string";

const Products =async ({searchParams}:{
  searchParams:Promise<Record<string, string | string[] | undefined>>;
}) => {

  const allQuery=await searchParams;

  const query=queryString.stringify(allQuery);

  return (
    <div className="grid grid-cols-12 h-screen gap-8">
      <div className="col-span-3">
        <Suspense fallback={<p>loading...</p>}>
          <CategorySideBar />
        </Suspense>
      </div>
      <div className="col-span-9">
        <Suspense fallback={<p>loading...</p>}>
          <ProductsList query={query} />
        </Suspense>
      </div>
    </div>
  );
};
export default Products;
