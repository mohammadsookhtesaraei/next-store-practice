import ProfileSideBar from "@/app/(site)/(profile)/components/ProfileSideBar";

type ProfileLayoutProps = {
  children: React.ReactNode;
};

const ProfileLayout = ({ children }: ProfileLayoutProps) => {
  return (
    <div className="grid grid-cols-12 grid-rows-[min_max(500px,1fr)] h-screen">
      <div className="col-span-3 bg-gray-200">
        <ProfileSideBar />
      </div>
      <div className="col-span-9 p-4">{children}</div>
    </div>
  );
};
export default ProfileLayout;
