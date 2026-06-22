import OTPInput from "react-otp-input";

import { CheckOtpProps } from "@/app/(user)/auth/types/otp-types";

const CheckOtp = ({otp,setOtp,onSubmit}:CheckOtpProps) => {
  return (
    <div className="flex justify-center">
    <div className="w-full max-w-md">
     <form className="space-y-10" onSubmit={onSubmit}>
      <p>کد تایید را  وارد کنید</p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          inputStyle={{
            width: "2.5rem",
            padding: "0.5rem 0.2rem",
            border: "1px solid var(--primary-300)",
            borderRadius: "0.5rem",
          
          }}
          containerStyle="flex flex-row-reverse gap-x-2 justify-center"
          // @ts-ignore
          renderInput={(props) => <input type="number" {...props} />}
        />
        <button type="submit">ارسال کد تایید</button>
    </form> 
    </div>
    </div>
  )
}
export default CheckOtp