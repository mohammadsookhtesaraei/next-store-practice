import http from "@/services/httpservice";

export function createPeyment(){
    return http.post("/payment/create").then(({ data }) => data.data);
}