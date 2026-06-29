import { API_URL } from "@/configs/global";

import axios from "axios";


const app=axios.create({baseURL:API_URL,withCredentials:true});


app.interceptors.request.use((res)=>res,(error)=>Promise.reject(error));


// این کد برای اکسیوس  ریسپانس اینترسپتور هست
// زمانی که کاربر لاگین کرده و اکسس توکنش منقضی شده
// و با ارور 401  مواجه میشه
// ولی چون رفرش توکن داره
// بیاد رفرش توکن رو بفرسته به بکند و اکسس توکن جدید بگیره
// لاگین بمونه و از پروفایلش یا فرایندی که داره انجام میده نیازی به ورود مجدد نداشته باشه
app.interceptors.response.use(
    (res) => res,
    // چرا ایسینک میذاریم چون قراره ریکویست بزنیم
    async (error) => {
//    اکسیوس  تنظیمات درخواستی که، شکست خرده و با ارور مواجه شده رو داخل ارور کانفیگ نگه میداره
        const orginalConfig = error.config;

        // شرط میگه خطای ما حتما 401 یا همون اناثوریشن باشه منقضی شدن اکسس توکن
        // و قسمت دوم میگه ایا قبلا امتحان نشده و برای رفع این خطا درخواست فرستاده نشده و ری ترای وجود نداره پس  اندیفاینده فالسه بیا تروش کن
        // چرا اینو میذاریم برای جلوگیری از حلقه بی نهایت
        // نذاریم ریکویست میره درخواست رفرش توکن هی 401 میده
        if (error.response.status === 401 && !orginalConfig._retry) {
            // ترو میذاریم  میگیم  این درخواست یکبار اجرا شده
            // تا شرط بالا کنسل بشه برای دفعه بعدی
            // که اگه رفرش توکنم نداشت بره دوباره لاگین کنه
            orginalConfig._retry = true;


            try {
                // درخواست میزنیم رفرش توکن   کردنشیال ترو اگر درخواست موفق باشه اکسس جدید میده
                // چرا از اکسیوس خام استفاده کردیم نه از اپ چون اون درخواست هم وارد اینترسپتور میشه و حلقه بی نهایت تشکیل میشه
                const { data } = await axios.get(`${API_URL}/user/refresh-token`, { withCredentials: true });
                // اینجا می گیم اگه دیتا وجود داره و موفق بوده بیا درخواست قبلی که از طریق اپ فرستاده شده رو
                // و خطا خرده رو دوباره بفرست و دوباره اجرا کن

                // request => 401  => refrshToken => new accessToken => request again => 200
                if (data) return app(orginalConfig)
            } catch (error) {
                return Promise.reject(error)
            }
        }
        return Promise.reject(error)
    },

)









const http={
    get:app.get,
    post:app.post
};


export default http;


// اینترسپتور درواقع یک نوع میان افزار هستش
// که میاد  قبل از انیکه درخواست بره سمت بکند قرار میگیره
// همچنین پاسخ بکند به فرانت برسه