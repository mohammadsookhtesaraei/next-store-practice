import { addNewCategory, getCategoryById, removeCategory, updateCategory } from "@/services/categoriesService";
import { getCategories } from "@/services/categoriesServices";
import { ICategory } from "@/types/category-interface";
import { useMutation, useQuery } from "@tanstack/react-query";


interface GetCategoryResponse {
  category: ICategory;
}


interface RemoveCategoryResponse {
 message: string;
}


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

export const useGetCategoryById = (id:string) =>
  useQuery<GetCategoryResponse>({
    queryKey: ["get-category", id],
    queryFn: () => getCategoryById(id),
    retry: false,
    refetchOnWindowFocus: true,
  });

// panel admin - category - edit
export const useUpdateCategory = () =>
  useMutation({ mutationFn: updateCategory });


// panel admin - category - remove
export const useRemoveCategory = () => {
  return useMutation({ mutationFn: removeCategory });
};
