import http from "@/services/httpservice"

export const getProducts=(query:string,cookies:string)=>{
    return http.get(`/product/list?${query}`,{
        headers :{
            Cookie:cookies
        }
    }).then(({data})=>data.data.products)
};



export const getProductsById=(id:string)=>{
    return http.get(`/product/slug/${id}`).then(({data})=>data.data.product);
};


export const getProductsForStaticParams=()=>{
     return http.get(`/product/list`).then(({data})=>data.data.products);
}


export const likeProduct=(id:string)=>{
   return http.post(`/product/like/${id}`).then(({data})=>data.data)
};