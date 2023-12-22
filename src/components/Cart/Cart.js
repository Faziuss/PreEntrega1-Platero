import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const { clearCart, totalQuantity, total, cart} = useContext(CartContext)

    console.log(cart)

    if(totalQuantity === 0 ) {
        return (
            <div className="flex flex-col items-center gap-8">
                <h1 className="pt-8 text-2xl">No hay items en el carrito</h1>
                <Link to="/" className="text-2xl p-4 border px-8 rounded-xl" >Productos</Link>
            </div>
        )
    } 

    return (
        <div className="flex flex-col gap-10 items-center p-5">
           {cart.map(p => <CartItem key={p.id} {...p}/>)}
            <h3 >Total: ${total}</h3>
            <button onClick={() => clearCart()}>Limpiar Carrito</button>
            <Link to="/checkout">Checkout</Link>
        </div>
    )
}

export default Cart;