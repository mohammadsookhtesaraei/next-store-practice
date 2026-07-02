"use client";

import { useGetProfile } from "@/hook/useAuth";
import { RotatingLines } from "react-loader-spinner";


import { toLocalStringShortDate } from "@/utils/toLocaleDatePersian";

const Profile = () => {
  const { data, isPending } = useGetProfile();

  const {user}=data || {};

  if(isPending)return <div className="flex justify-center h-screen">
    <RotatingLines
visible={true}
height="96"
width="96"
color="grey"
strokeWidth="5"
animationDuration="0.75"
ariaLabel="rotating-lines-loading"
wrapperStyle={{}}
wrapperClass=""
/>
  </div>

  return (
    <div>
      <h2 className="text-blue-500">{user?.name} خوش آمدی</h2>
     <div className="flex gap-x-2 [&>span]:text-gray-400 my-6">
      <span>تاریخ پیوستن:</span>
      <span>{toLocalStringShortDate(user?.createdAt)}</span>
     </div>
    </div>
  )
};
export default Profile;
