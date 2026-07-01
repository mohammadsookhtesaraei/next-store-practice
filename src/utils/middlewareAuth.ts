
import { NextRequest } from "next/server";


import { API_URL } from "@/configs/global";


// خب کار این تابع چیه
// مرورگر یک درخواست میزنه به نکست  جی اس
// میدل ور قبل اینکه درخواست برسه به نکست جی اس
// این درخواست رو میگیره خب این درخواستی ک از مرورگر میاد
//  ممکنه داخلش کوکی باشه یا نباشه یعنی کاربر اگر لاگین کرده باشه
//داخل کوکی اکسس توکن و رفرش توکن 
// میدلور با استفاده از این کوکی  میتونه درخواست بزنه به بکند و اطلاعات کاربر رو بگیره
// و باید کوکی رو  بصورت دستی ست کنیم در هدر
//  تا بکند  از طریق اکسس توکن و رفرش توکن متوجه بشه این کیه تا اطلاعاتش رو بده
// چرا دستی ست می کنیم کردنشیال ترو اینجا کافی نیست
// چون ریکویست رو داره خوده میدلور میزنه در سرور نه مرورگر برا همین باید
// کوکی رو دستی ست کنیم
// ما در میدلور نیاز داریم ریکویست بزنیم به سرور اطلاعات کاربر رو بگیریم
// تا با توجه به اطلاعتی که داره  دسترسی هاشئ مدیریت کنیم
// اگرم توکن نداشت بره ثبت نام یا لاگین کنه

//  نکته خیلی دیتابیس رو در میدل ور فراخوانی نکن باعث افت پرفورمنس میشه
// میدلور روی همه روت ها و صفحات اجرا میشه حتما مچر بذار

// broswer send request to next js  this requset has cookie or not have cookie
// middleware get request and fetch method get and set cookie in  header to undrestand who is  user

export async function middlewareAuth(request:NextRequest){
const res=await fetch(`${API_URL}/user/profile`,{
    method:"GET",
    credentials:"include",
     headers: {
            Cookie: `${request.cookies.get("accessToken")?.name}=${request.cookies.get("accessToken")?.value};${request.cookies.get("refreshToken")?.name}=${request.cookies.get("refreshToken")?.value}` || "-"
             
        }
});

if (!res.ok) {
  return null;
}

const {data:{user}}=await res.json();
return user || {};
}