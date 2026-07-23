import { getCategories } from "@/services/categoriesServices";
import { useQuery } from "@tanstack/react-query";



export const useCategories=()=>{
    return useQuery({
        queryKey:["get-categories"],
        queryFn:getCategories,
        retry:false,
        refetchOnWindowFocus:true
    })
};