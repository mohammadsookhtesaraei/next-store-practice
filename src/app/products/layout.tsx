import Layout from "@/components/layout/Layout"


type ProductsLayoutProps={
    children:React.ReactNode
}

const ProductsLayout = ({children}:ProductsLayoutProps) => {
  return (
    <Layout>
        {children}
    </Layout>
  )
}
export default ProductsLayout