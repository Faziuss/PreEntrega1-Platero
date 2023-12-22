import { useState } from "react";
import {toast} from "react-toastify"

const ItemCount = ({stock, initial, onAdd}) => {
const [quantity, setQuantity] = useState(initial)

const increment = () => {
    if (quantity < stock) {
        setQuantity(quantity+1)
    }

}
const decrement = () => {
    if (quantity > 1) {
        setQuantity(quantity-1)
    }
}

const toastify = () => {
    if (!stock) {
    toast.error('NO hay stock disponible')
    } else {
        onAdd(quantity)
    }
}

return(
    <div className="flex flex-col gap-4">
        <div className="flex text-[18px] text-center gap-2">
            <button onClick={decrement} className="border-[1px] p-1 w-full rounded transition duration-300 hover:bg-white/7 bg-white text-black font-semibold">-</button>
            <h4 className="border-[1px] p-1 w-full text-[16px] font-bold ">{quantity} </h4>
            <button onClick={increment} className="border-[1px] p-1 w-full rounded transition duration-300 hover:bg-white/70 bg-white text-black font-semibold">+</button>
        </div>
        <div className="">
            <button onClick={toastify} className="border p-2 px-6 rounded transition duration-300 hover:bg-[#313131]">
                Agregar al Carrito
            </button>
        </div>
    </div>
)

}

export default ItemCount