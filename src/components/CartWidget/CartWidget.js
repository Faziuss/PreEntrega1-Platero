import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {

  const { totalQuantity } = useContext(CartContext)

  return (
    <Link to="/cart" className="flex gap-2">
      <AiOutlineShoppingCart
        size={"1.7rem"}
        className="transition ease-in-out duration-200 text-white hover:text-[#ff2e2e]"
      />
      <h2 className="font-bold">{totalQuantity}</h2>
    </Link>

  );
};

export default CartWidget;
