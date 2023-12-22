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
        <div className="flex gap-8 justify-center items-center text-center  text-2xl">
            <button onClick={decrement} className="border-[1px] p-2">-</button>
            <h4 className="border-[1px] p-2">{quantity} </h4>
            <button onClick={increment} className="border-[1px] p-2">+</button>
        </div>
        <div className="">
            <button onClick={() => onAdd(quantity)} disabled={!stock} className="p-2 border-[1px]">
                Agregar al Carrito
            </button>
        </div>
    </div>
)

}

export default ItemCount