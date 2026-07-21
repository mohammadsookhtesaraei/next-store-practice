import http from "@/services/httpservice"

export const sendAddToCart=(id:string)=>{
return http.post(`/cart/add/${id}`).then(({ data }) => data.data);
};


export const decreaseFromCart=(id:string)=>{
    return http.post(`/cart/remove${id}`).then(({ data }) => data.data);
}