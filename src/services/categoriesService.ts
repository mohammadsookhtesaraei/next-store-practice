import http from "@/services/httpservice";

export function getCategories() {
  return http.get("/category/list").then(({ data }) => data.data);
}
