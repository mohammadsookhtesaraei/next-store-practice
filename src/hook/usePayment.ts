

import { useQuery } from "@tanstack/react-query";
import { createPeyment } from "@/services/peymentService";
import { useMutation } from "@tanstack/react-query";
import { getAllPayments } from "@/services/peymentService";


export const usePeyment=()=>{
    const {isPending,mutateAsync}=useMutation({
        mutationFn:createPeyment
    });

    return {isPending,mutateAsync}
};


export const useGetPayments = () =>
  useQuery({ queryKey: ["payments"], queryFn: getAllPayments, retry: false });


