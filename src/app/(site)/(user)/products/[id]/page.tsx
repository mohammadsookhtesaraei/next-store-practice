import { notFound } from "next/navigation";

import { getProductsById } from "@/services/productsService";
import { getProductsForStaticParams } from "@/services/productsService";
import { IProduct } from "@/types/products-interface";
import AddToCart from "@/components/ui/AddToCart";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumber";

// ssg -cache
export const dynamic="force-static"

// default dynamic params is true
// fallback blocking

// but this project we have no big data for page
// and we have not fallback blocking we want straight not foound if we have not data for ne page in database
// dynamic params = false

export const dynamicParams = false;

export async function generateStaticParams() {
  const products = (await getProductsForStaticParams()) as IProduct[];
  console.log(products);
  return products.map((item) => ({
    id: item.slug,
  }));
}

const ProductsId = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  const product = await getProductsById(id);
  console.log(product);
  if (!product) notFound();

  return (
    <div className="border rounded-md p-6 border-gray-300/30 shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-blue-500">
        {product?.title}
      </h1>
      <p className="mb-6  text-gray-700/40">{product?.description}</p>
      <p className="mb-6  text-gray-700/50">
        قیمت محصول :{" "}
        <span className={product.discount ? " line-clamp-1" : "font-bold"}>
          {" "}
          {toPersianNumbersWithComma(product?.price)}
        </span>
      </p>
      {!!product?.discount && (
        <div className="flex items-center gap-x-2 mb-6">
          <p className="text-xl font-bold">
            قیمت با تخفیف : {toPersianNumbersWithComma(product?.offPrice)}
          </p>
          <div className="bg-rose-500 px-3 py-0.5 rounded-xl text-white text-sm">
            {product?.discount} %
          </div>
        </div>
      )}

      <AddToCart product={product} />
    </div>
  );
};
export default ProductsId;
