import http from "@/services/httpservice"



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
}