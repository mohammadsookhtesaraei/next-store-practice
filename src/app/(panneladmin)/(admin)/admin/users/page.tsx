"use client";


import UsersTable from "@/app/(panneladmin)/(admin)/admin/users/components/UsersTable";
import { useGetUsers } from "@/hook/useAuth";


function UsersPage() {
  const { isLoading, data } = useGetUsers();
  const { users } = data || {};

  console.log(users);

  if (isLoading) return <p>loading...</p>;
  return (
    <div>
      <h1 className="text-xl font-bold mb-5">اطلاعات کاربران</h1>
      <UsersTable users={users} />
    </div>
  );
}
export default UsersPage;
