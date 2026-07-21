import Layout from "@/components/layout/Layout"

type UserLayoutProps={
    children:React.ReactNode
}
const UserLayout = ({children}:UserLayoutProps) => {
  return (
    <Layout>
        {children}
    </Layout>
  )
}
export default UserLayout