import http from "@/services/httpservice";
import { useQuery } from "@tanstack/react-query";

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
}