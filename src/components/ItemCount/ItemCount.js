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
    <div>
        <div className="flex gap-8 justify-center items-center text-center border-[1px] p-2 text-2xl">
            <button onClick={decrement} className="">-</button>
            <h4>{quantity}</h4>
            <button onClick={increment}>+</button>
        </div>
        <div className="p-4 border-[1px]">
            <button onClick={() => onAdd(quantity)} disabled={!stock} >
                Agregar al Carrito
            </button>
        </div>
    </div>
)

}

export default ItemCount