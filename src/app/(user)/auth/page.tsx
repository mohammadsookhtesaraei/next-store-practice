"use client"


import {useState} from "react"

import SendOtp from "@/app/(user)/auth/components/SendOtp"
import CheckOtp from "@/app/(user)/auth/components/CheckOtp"




const Auth = () => {
 
  const [OtpData,setOtpData]=useState({
    phoneNumber:"",
    otp:""
  });

  const [step,setStep]=useState(1);



  const changeHandler=(e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>)=>{
  const {value,name}=e.target;
  setOtpData((prev)=>({...prev,[name]:value}))
  };

  const otpPhoneNumberHandler=(e: React.SubmitEvent<HTMLFormElement>)=>{
    e.preventDefault();
  }



  function stepRenders(){
  switch(step){
    case 1 :
      return <SendOtp phoneNumber={OtpData.phoneNumber} changeHandler={changeHandler} onSubmit={otpPhoneNumberHandler}/>
    case 2 :
      return <CheckOtp/>
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