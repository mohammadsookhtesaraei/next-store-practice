import http from "@/services/httpservice"

export const getProducts=(query:string)=>{
    return http.get(`/product/list?${query}`).then(({data})=>data.data.products)
}