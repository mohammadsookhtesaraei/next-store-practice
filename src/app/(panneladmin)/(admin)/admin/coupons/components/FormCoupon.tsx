import { FormCouponProps } from "@/app/(panneladmin)/(admin)/admin/coupons/types/formCouponType";

import TextField from "@/components/ui/TextField";
import RadioInput from "@/components/ui/RadioInput";

import Select from "react-select";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const FormCoupon = ({
  formData,
  type,
  changeHandler,
  formHandler,
  isLoading,
  expireDate,
  onChangeSelect,
  setExpireDate,
  options,
  typeChangeHandler,
   defaultValue = "",
}: FormCouponProps) => {
  return (
    <div className="max-w-sm">
      <form className="space-y-4" onSubmit={formHandler}>
        <TextField
          label="کد"
          name="code"
          value={formData.code || ""}
          changeHandler={changeHandler}
        />
        <TextField
          label="مقدار"
          name="amount"
          value={formData.amount || ""}
          changeHandler={changeHandler}
        />
        <TextField
          label="ظرفیت"
          name="usageLimit"
          value={formData.usageLimit || ""}
          changeHandler={changeHandler}
        />
           <div>
          <span className="mb-2 block">نوع کد تخفیف</span>
          <div className="flex items-center justify-between">
            <RadioInput
              checked={type === "percent"}
              name="type"
              label="درصد"
              value="percent"
             changeHandler={typeChangeHandler}
            />
            <RadioInput
              checked={type === "fixedProduct"}
            
              name="type"
              label="قیمت ثابت"
              value="fixedProduct"
              changeHandler={typeChangeHandler}
            />
          </div>
        </div>

          <div>
          <label htmlFor="products" className="mb-2 block">
            شامل محصولات
          </label>
          <Select
            instanceId="products"
            isMulti
            onChange={onChangeSelect}
            options={options}
            getOptionLabel={(option) => option.title}
            getOptionValue={(option) => option._id}
            defaultValue={defaultValue}
          />
        </div>

              <div>
          <span className="mb-2 block">تاریخ انقضا</span>
          <DatePicker
            inputClass="textField__input w-[330px]"
            value={expireDate}
            format="YYYY/MM/DD"
            calendar={persian}
            locale={persian_fa}
            calendarPosition="bottom-left"
            onChange={(date) => setExpireDate(date)}
          />
        </div>
          <div>
          {isLoading ? (
           <p>loading...</p>
          ) : (
            <button className="btn btn--primary w-full"> تایید</button>
          )}
        </div>
      </form>
    </div>
  );
};
export default FormCoupon;
