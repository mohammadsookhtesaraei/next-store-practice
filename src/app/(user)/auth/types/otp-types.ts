



export type SendOtpProps={
    phoneNumber:string,
     changeHandler: (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => void;
    onSubmit:(e: React.SubmitEvent<HTMLFormElement>)=>void
};

export type CheckOtpProps={
  otp:string,
  setOtp: React.Dispatch<React.SetStateAction<string>>,
  onSubmit:(e: React.SubmitEvent<HTMLFormElement>)=>void
}