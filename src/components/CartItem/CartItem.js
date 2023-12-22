import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { BsTrash } from "react-icons/bs";

const CartItem = ({ id, name, price, img, quantity }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <div className="flex gap-10 items-center px-2 py-1 bg-[#131313] rounded shadow-custom max-w-[70rem] w-full " >
      <img src={img} alt={name} className="w-[100px] h-[100px] object-cover p-2" />
      <h2 className="font-bold max-w-[12rem] w-full text-center">{name}</h2>
      <p className=" max-w-[8rem] w-full">Cantidad: {quantity}</p>
      <p className="w-full">Precio X Unidad: ${price}</p>
      <p className="w-full">Subtotal: ${(price * quantity).toFixed(2)}</p>
      <button onClick={() => removeItem(id)} className="ml-auto">
        <BsTrash  size={"1.5rem"} className="transition ease-in-out duration-200 text-white hover:text-[#ff2e2e]"/>
      </button>
    </div>
  );
};

export default CartItem;
