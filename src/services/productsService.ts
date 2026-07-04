import http from "@/services/httpservice"

export const getProducts=()=>{
    return http.get("/product/list").then(({data})=>data.data.products)
}