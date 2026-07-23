

import { createPeyment } from "@/services/peymentService";
import { useMutation } from "@tanstack/react-query";


export const usePeyment=()=>{
    const {isPending,mutateAsync}=useMutation({
        mutationFn:createPeyment
    });

    return {isPending,mutateAsync}
};

