import { addNewCategory, removeCategory, updateCategory } from "@/services/categoriesService";
import { getCategories } from "@/services/categoriesServices";
import { useMutation, useQuery } from "@tanstack/react-query";



export const useCategories=()=>{
    return useQuery({
        queryKey:["get-categories"],
        queryFn:getCategories,
        retry:false,
        refetchOnWindowFocus:true
    })
};

// panel admin - category - add
export const useAddCategory=()=>{
    return useMutation({
        mutationFn:addNewCategory
    })
};

// panel admin - category - edit
export const useUpdateCategory = () =>
  useMutation({ mutationFn: updateCategory });


// panel admin - category - remove
export const useRemoveCategory = () => {
  return useMutation({ mutationFn: removeCategory });
};
