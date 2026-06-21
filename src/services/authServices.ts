import http from "@/services/httpservice"



export const getOtpCode=(data:{
    phoneNumber:string
})=>{
    return http.post("/user/get-otp",data).then(({data})=>data.data)
}