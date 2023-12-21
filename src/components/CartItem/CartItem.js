import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({id, name, price, quantity}) => {

    const {removeItem} = useContext(CartContext)

    return(
        <div className="flex gap-4 items-center">
            <h2>{name}</h2>
            <p>Cantidad:{quantity}</p>
            <p>Precio X Unidad: ${price}</p>
            <p>Subtotal: ${price*quantity}</p>
            <button onClick={()=> removeItem(id)}>X</button>
        </div>
    )

}

export default CartItem