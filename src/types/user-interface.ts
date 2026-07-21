
type Products={
    quantity:number, 
    productId: string, 
    _id: string
}



export interface UserProfile {
  _id: string;
  name: string;
  email: string;
  phoneNumber: string;
  biography: string;
  avatarUrl: string | null;
  isActive: boolean;
  isVerifiedPhoneNumber: boolean;
  role: "ADMIN" | "USER";
  resetLink: string | null;
  Products: unknown[];
  likedProducts: unknown[];
  cart: {
    _id: string;
    coupon: unknown | null;
    products: Products[];
  };
  createdAt: string;
  updatedAt: string;
  __v: number;
}