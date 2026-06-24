import { SendOtpProps } from "@/app/(user)/auth/types/otp-types";
import TextField from "@/components/ui/TextField";

const SendOtp = ({ phoneNumber, onSubmit, changeHandler ,isLoading}: SendOtpProps) => {
  return (
    <div className="flex justify-center">
      <div className="max-w-md w-full">
        <form className="space-y-10" onSubmit={onSubmit}>
          <TextField
            value={phoneNumber}
            label="شماره موبایل را وارد کنید"
            name="phoneNumber"
            changeHandler={changeHandler}
          />
          <button type="submit" className="btn btn--primary w-full">
           {isLoading ? "درحال ارسال":"ارسال"}
          </button>
        </form>
      </div>
    </div>
  );
};
export default SendOtp;
