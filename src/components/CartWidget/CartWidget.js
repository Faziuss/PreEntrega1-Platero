import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {

  const { totalQuantity } = useContext(CartContext)

  return (
    <Link to="/cart">
      <AiOutlineShoppingCart
        size={"1.7rem"}
        className="transition ease-in-out duration-200 text-black hover:text-teal-600"
      />
      {totalQuantity}
    </Link>

  );
};

export default CartWidget;
