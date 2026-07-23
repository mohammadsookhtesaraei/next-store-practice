import http from "@/services/httpservice"


type FromAddDataTypes={
 tags: string[];
 category: string;
 title: string;
 description: string;
 slug: string;
 brand: string;
 price: string;
 offPrice: string;
 discount: string;
 countInStock: string;
 imageLink: string;
}

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


// admin api


export const getProductsByIdForAdminPannel=(id:string)=>{
    return http.get(`/product/${id}`).then(({data})=>data.data.product);
};


export const addProduct=(data:FromAddDataTypes)=>{
   return http.post(`admin/product/add`,data).then(({data})=>data.data)
};
