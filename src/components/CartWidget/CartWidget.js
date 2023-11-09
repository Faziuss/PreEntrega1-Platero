import { AiOutlineShoppingCart } from "react-icons/ai";

const CartWidget = () => {
  return (
    <a href="" className="flex gap-2 items-center">
      <AiOutlineShoppingCart
        size={"1.5rem"}
        className="transition ease-in-out duration-200 text-black hover:text-teal-600"
      />
      <span>0</span>
    </a>
  );
};

export default CartWidget;
