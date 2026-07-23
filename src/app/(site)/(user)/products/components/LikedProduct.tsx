"use client";

import { likeProduct } from "@/services/productsService";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

const LikedProduct = ({ id, isLiked }: { id: string; isLiked: boolean }) => {
  // why use all this , like and sorted in sidebar must be equal
  // روتر رو اوردیم چون یوزر هر محصولی رو لایک کنه باید رفرش کنه صفحه رو تا نشون بده لایک شده
  // ما اینو نمیخوایم با روتر رفرش اینو هندل میکنیم یک درخواست بدون رفرش صفحه میزنه
  // این کارو میکنیم چون وقتی از قسمت دسته بندی فیلتر میکنیم
  // محصولات لایک شده نباید بپره وباید هماهنگ باشن کویری استرینگاش
  // وقتی محصول رو لایک میکینم میپره کویری استرینگ
  // برا همین این کارو میکنیم
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const likeHandler = async () => {
    try {
      const { message } = await likeProduct(id);
      toast.success(message);
      router.push(pathname + "?" + searchParams.toString());
      router.refresh();
    } catch (error) {}
  };
  return (
    <div className="mt-2">
      <button onClick={likeHandler}>
        {isLiked ? (
          <span className="text-rose-500">لایک شده</span>
        ) : (
          <span className="text-gray-500">لایک</span>
        )}
      </button>
    </div>
  );
};
export default LikedProduct;
