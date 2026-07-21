import http from "@/services/httpservice"

export const sendAddToCart=(productId:string)=>{
return http.post(`/cart/add`,{productId}).then(({ data }) => data.data);
};


export const decreaseFromCart=(productId:string)=>{
    return http.post(`/cart/remove`,{productId}).then(({ data }) => data.data);
}