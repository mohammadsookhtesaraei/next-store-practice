"use client"


import {useState,useEffect} from "react"
import { useRouter } from "next/navigation"


import SendOtp from "@/app/(user)/auth/components/SendOtp"
import CheckOtp from "@/app/(user)/auth/components/CheckOtp"

import { useMutation } from "@tanstack/react-query"
import { checkotpCode, getOtpCode } from "@/services/authServices"
import toast from "react-hot-toast"
import axios from "axios"

const resend=90;

const Auth = () => {
 

  const [phoneNumber,setPhoneNumber]=useState("");

  const [otp,setOtp]=useState("");
  const [time,setTime]=useState(resend);
  const [step,setStep]=useState(1);

  const router=useRouter();


 
  const {data,isPending,mutateAsync}=useMutation({
    mutationFn:getOtpCode
  });


  const {data:checkOtp,mutateAsync:resonseOtp}=useMutation({
    mutationFn:checkotpCode
  });




  const changeHandler=(e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>)=>{
  const {value}=e.target;
  setPhoneNumber(value);
 
  };

  const otpPhoneNumberHandler=async(e: React.SubmitEvent<HTMLFormElement>)=>{
    e.preventDefault();

    try {
    const {message}=await mutateAsync({phoneNumber});
    toast.success(message);
    setStep(2);
    setOtp("");
    setTime(resend);
    }catch(error){
    if(axios.isAxiosError(error)){
      toast.error(error?.response?.data?.message)
    }
    toast.error("مشکلی پیش آمده")
    }
  };


  const otpCheckHandler=async(e: React.SubmitEvent<HTMLFormElement>)=>{
  e.preventDefault();
  try{
   const {user,message}=await resonseOtp({phoneNumber,otp});
    toast.success(message);
   if(!user.isActive){
    router.push("/check-profile")
   }else {
    router.push("/");
   }
  }catch(error){
   if(axios.isAxiosError(error)){
    toast.error(error?.response?.data?.message)
   }
    toast.error("مشکلی پیش آمده")
  }
  }

  useEffect(()=>{
   const interval=time>0&& setInterval(()=>{
    setTime((prev)=> prev - 1);
   },1000);

   return ()=> {
    if(interval){
      clearInterval(interval)
    }
   }
  },[time])



  function stepRenders(){
  switch(step){
    case 1 :
      return <SendOtp phoneNumber={phoneNumber} changeHandler={changeHandler} onSubmit={otpPhoneNumberHandler}/>
    case 2 :
      return <CheckOtp otp={otp} onBack={()=>setStep(1)} setOtp={setOtp} onSubmit={otpCheckHandler} time={time} />
  }
  }

  return (
    <div>
      <div className="container">
        {stepRenders()}
      </div>
    </div>
  )
}
export default Auth