"use client"

import { useMoveBack } from "@/hook/useMoveBack"

const NotFound = () => {
  const back=useMoveBack();
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md w-full space-y-5">
        <h1 className="text-xl font-semibold">صفحه مورد نظر یافت نشد.</h1>
        <button onClick={back} className="bg-blue-500 text-white rounded-md py-1 px-2 cursor-pointer">بازگشت به صفحه قبل</button>
      </div>
    </div>
  )
}
export default NotFound