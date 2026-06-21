



export type SendOtpProps={
    phoneNumber:string,
     changeHandler: (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => void;
    onSubmit:(e: React.SubmitEvent<HTMLFormElement>)=>void
}