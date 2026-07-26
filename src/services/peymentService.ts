import http from "@/services/httpservice";

export function createPeyment(){
    return http.post("/payment/create").then(({ data }) => data.data);
};


export function getAllPayments() {
  return http.get("/admin/payment/list").then(({ data }) => data.data);
}
