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
                <Link to="/" className="text-xl p-4 border px-8 rounded-xl transition duration-300 hover:bg-[#313131]" >Productos</Link>
            </div>
        )
    } 

    return (
        <div className="flex flex-col gap-10 items-center p-5">
           {cart.map(p => <CartItem key={p.id} {...p}/>)}
            <h3 className="text-xl font-bold" >Total: ${total}</h3>
            <button onClick={() => clearCart()} className="border p-2 px-6 rounded transition duration-300 hover:bg-[#313131]">Limpiar Carrito</button>
            <Link to="/checkout" className="text-2xl bg-gradient-to-tr from-[#ff4b4b] via-[#f01d1d] to-[#bb011a] p-2 rounded-[0.60rem] px-10 text-white transition ease-in-out duration-200 hover:from-[#f52e2e] hover:via-[#e61313] hover:to-[#9e0b1e] ">Checkout</Link>
        </div>
    )
}

export default Cart;