type CartItemProps = {
  item: {
    description: string;
    orderItems: string[];
    productIds: string[];
    totalGrossPrice: number;
    totalOffAmount: number;
    totalPrice: number;
  };
};

const CartItem = ({item:{description,orderItems,productIds,totalGrossPrice,totalOffAmount,totalPrice}}:CartItemProps) => {
  return <div>CartItem</div>;
};
export default CartItem;
