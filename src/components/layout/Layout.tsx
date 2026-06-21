import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

type LayoutProps={
    children:React.ReactNode
}

const Layout = ({ children}:LayoutProps) => {
  return (
    <>
    <Header/>
    <main className="flex-1">
        {children}
    </main>
    <Footer/>
    </>
  )
}
export default Layout