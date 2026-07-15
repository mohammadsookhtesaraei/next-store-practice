import http from "@/services/httpservice"

export const getProducts=(query:string)=>{
    return http.get(`/product/list?${query}`).then(({data})=>data.data.products)
};



export const getProductsById=(id:string)=>{
    return http.get(`/product/slug/${id}`).then(({data})=>data.data.product);
};


export const getProductsForStaticParams=()=>{
     return http.get(`/product/list`).then(({data})=>data.data.products);
}