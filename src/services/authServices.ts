import http from "@/services/httpservice"

import { FormDataState } from "@/app/(profile)/profile/me/page";

export const getOtpCode=(data:{
    phoneNumber:string
})=>{
    return http.post("/user/get-otp",data).then(({data})=>data.data)
};



export const checkotpCode=(data:{
    phoneNumber:string,
    otp:string
})=>{
    return http.post("/user/check-otp",data).then(({data})=>data.data);
};


export const completeProfile=(data:{
    name:string,
    email:string
})=>{
    return http.post("/user/complete-profile",data).then(({data})=>data.data);
};


export const getProfile=()=>{
return http.get("/user/profile").then(({data})=>data.data);
};


export function updateProfile(data:FormDataState) {
  return http.patch("/user/update", data).then(({ data }) => data.data);
};


export function logout(){
    return http.post("/user/logout")
}