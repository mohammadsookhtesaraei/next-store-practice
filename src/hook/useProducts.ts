import http from "@/services/httpservice";
import { addProduct, editProduct, getProductsByIdForAdminPannel } from "@/services/productsService";
import { useMutation, useQuery } from "@tanstack/react-query";

export const getAllProducts = () => {
    return http.get(`/product/list`, {

    }).then(({ data }) => data.data.products)
};





export const useGetProducts = () => {
    const { data, isPending, isError } = useQuery({
        queryKey: ["get-products"],
        queryFn: getAllProducts,
        retry: false,
        refetchOnWindowFocus: true
    });

    return { data, isPending, isError }
};


export const useProductById=(id:string)=>{
  return useQuery({
    queryKey:["get-productById",id],
    queryFn:()=>getProductsByIdForAdminPannel(id),
    retry:false,
    refetchOnWindowFocus:true,
    enabled: !!id,

  })
};


export const useAddProduct=()=>{
    return useMutation({
        mutationFn:addProduct
    })
};



export const useEditProduct=()=>{
return useMutation({
  mutationFn:editProduct
 });
}

