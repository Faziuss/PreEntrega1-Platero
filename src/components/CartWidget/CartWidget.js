import { AiOutlineShoppingCart } from "react-icons/ai";

const CartWidget = () => {
  return (
    <a href="#" className="flex gap-2 items-center">
      <AiOutlineShoppingCart size={"1.5rem"} />0
    </a>
  );
};

export default CartWidget;
