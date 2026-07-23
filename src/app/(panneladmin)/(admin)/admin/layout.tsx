import AdminSideBar from "@/app/(panneladmin)/(admin)/admin/components/AdminSideBar"



const AdminLayout = ({children}:{
    children:React.ReactNode
}) => {
  return (
    <div className="grid grid-cols-4 bg-white h-screen">
        <div className="col-span-1 bg-gray-100 overflow-y-auto p-4">
            <AdminSideBar/>
        </div>
        <div className="col-span-3 overflow-y-auto p-4">
            {children}
        </div>
    </div>
  )
}
export default AdminLayout