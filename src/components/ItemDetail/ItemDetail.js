import { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ id, name, img, platform, description, price, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0)

  const {addItem} = useContext(CartContext)

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity)

    const item = {
      id, name, price, img
    }

    addItem(item, quantity)
  }

  return (
    <article className="flex flex-col items-center max-w-[500px] pt-8">
      <header>
        <h2 className="text-2xl font-bold text-center pb-4">{name}</h2>
      </header>
      <picture>
        <img
          src={img}
          alt={name}
          className="w-[500px] h-[500px] object-cover"
        />
      </picture>
      <section className="p-4">
        <p className="mb-1">Plataforma: {platform}</p>
        <p className="mb-1">Precio: ${price}</p>
        <p className="mb-1">Descripción: {description}</p>
      </section>
      <footer>
        {
          quantityAdded > 0 ? (
            <Link to='/cart' className="border-[1px] p-2">Terminar Compra</Link>
          ) : (
            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
          )
        }
      </footer>
    </article>
  );
};

export default ItemDetail;
