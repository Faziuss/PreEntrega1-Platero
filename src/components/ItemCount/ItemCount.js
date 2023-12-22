import { useState } from "react";

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

return(
    <div className="flex flex-col gap-5">
        <div className="flex text-2xl text-center">
            <button onClick={decrement} className="border-[1px] p-2 w-full rounded transition duration-300 hover:bg-[#313131]">-</button>
            <h4 className="border-[1px] p-2 w-full ">{quantity} </h4>
            <button onClick={increment} className="border-[1px] p-2 w-full rounded transition duration-300 hover:bg-[#313131]">+</button>
        </div>
        <div className="">
            <button onClick={() => onAdd(quantity)} disabled={!stock} className="border p-2 px-6 rounded transition duration-300 hover:bg-[#313131]">
                Agregar al Carrito
            </button>
        </div>
    </div>
)

}

export default ItemCount