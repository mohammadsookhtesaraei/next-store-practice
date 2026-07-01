// میدلور در واقع یک لایه بین کاربر و اپلیکیشن ماست
// قبل از رسیدن ریکویست به روت یا پیج 
// تصمیم میگیره با این درخواست چیکار کنه


// browser =>htpp request => cdn/edg => middlweare(check token,redirect,rerwite,accept,block,header)
// => route => react server componet => html => browser

// میدلور فقط روی سرور اجرا میشه

// در میدلور نباید به دیتابیس متصل شیم افت پرفورمنس داره

// میدلور روی همه ی درخواست ها وصفحات اجرا میشه و یوزر میدلور رو دانلود نمی کنه اصلا باید بهش بگیم روی کدوم صفحات اجرا شو محدودش کنیم

// میدلور  تقریبا اطلاعات تمام ریکویست رو داره

// میدلور یک ورودی میگیره که همون ریکویست  هست که یک شی رو بما میده داخل شی چیا هست

//  request = {
    //  Headers
    // Cookies
    // Method
    // URL
    // Search Params
    // Host
    // Pathname
    // IP
    // Geo
    //  }
    
    // این به عنوان ورودی به تابع میدلور  داده میشه تا چک کنه این درخواست
    // توکن داره- به چه روت هایی اجازه دسترسی داره-هدرش چیه-و به چه مسیری باید هدایت بشه-نقش کاربر چیه
    //  و از همه مهم تر به کوکی ها دسترسی داره
    
    // NextResponse.next() وقتی کاره میدلور تموم شد با درخواستو   اجازه میده در اخر درخواست ادامه مسیر رو بره
    // NextResponse.redirect این میتونه تغییر مسیر انجام بده و کاربر مثلا اگه توکن نداشت به چه روتی بره
    
    // و با matcher  بهش میگیم  قبل چه روت هایی اجرا شو و چک کن
import { middlewareAuth } from "@/utils/middlewareAuth";
import { NextRequest,NextResponse } from "next/server";

//در مرورگر جی شی خود ریکویست وجود داره
// const request = new Request("https://example.com");
// اما نکست ریکویست نسخه استاندارد وب ای پی ای و توسعه یافته تر ریکویست است 
// که امکانات بیشتری میده بما 

// نکست ریسپانسم همین

    


export async function middleware(request: NextRequest) {
 const pathname=request.nextUrl.pathname

 if(pathname.startsWith("/profile")){
  const user=await middlewareAuth(request);
  if(!user){
    // این کد یک یو ار ال کامل می سازد
    // http://localhost:3000/auth
    // خودش دامنه رو از پورت و پروتکل رو از یوار ال ریکویست بر میداره
    // فقط مسیر رو تغییر میده
    // و همین که اگر دامنه سایت تغییر کنه بدون مشکل کار میکنه
    const authUrl=new URL("/auth",request.url)
    // چرا در نکست ریسپانس نمی تونیم مستقیم  بنویسیم 
    // "/auth"
    // چون معتبر نیست انتظار یک یو ار ال معتبر و ادرس مطلق رو داره
    return NextResponse.redirect(authUrl)
  }
 };


 if(pathname.startsWith("/auth")){
  const user=await middlewareAuth(request);
  if(user){
    const profileUrl=new URL("/profile",request.url);
    return NextResponse.redirect(profileUrl)
  }
 }

 if(pathname.startsWith("/admin")){
  const user=await middlewareAuth(request);
  if(!user){
    const authUrl=new URL("/auth",request.url);
    return NextResponse.redirect(authUrl)
  }
  if(user&&user?.role !== "ADMIN"){
    const homeUrl=new URL("/",request.url);
    return NextResponse.redirect(homeUrl)
  }
 }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile/:path*", "/admin/:path*","/auth/:path*"],
};