import { ICoupon } from "@/types/coupon-interface";

interface User {
  _id: string;
  phoneNumber: string;
  email: string;
  name: string;
  avatarUrl: string | null;
}

interface Cart {
  _id: string;
  productDetail: unknown[]; // تایپ دقیقش را اگر بفرستی، کامل می‌کنیم.
  coupon: ICoupon | null;
  payDetail: unknown; // تایپ دقیقش را اگر بفرستی، کامل می‌کنیم.
}

export interface IPayment {
  _id: string;
  amount: number;
  authority: string;
  cart: Cart;
  createdAt: Date;
  description: string;
  invoiceNumber: string;
  isPaid: boolean;
  paymentDate: string;
  paymentMethod: "ZARINPAL";
  status: "COMPLETED" | "PENDING" | "FAILED";
  updatedAt: string;
  user: User;
  __v: number;
}