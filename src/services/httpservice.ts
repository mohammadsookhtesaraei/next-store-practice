import { API_URL } from "@/configs/global";
import axios from "axios";


const app=axios.create({baseURL:API_URL,withCredentials:true});


app.interceptors.request.use((res)=>res,(error)=>Promise.reject(error));
app.interceptors.response.use((res)=>res,(error)=>Promise.reject(error));



const http={
    get:app.get,
    post:app.post
};


export default http;