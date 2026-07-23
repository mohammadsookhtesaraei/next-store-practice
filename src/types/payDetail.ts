
type OrderItems={
    price:number,
    product:string
}


export interface Order {
  description: string;
  orderItems: OrderItems[];
  productIds: string[];
  totalGrossPrice: number;
  totalOffAmount: number;
  totalPrice: number;
}