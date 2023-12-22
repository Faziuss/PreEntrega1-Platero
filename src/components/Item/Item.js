import { Link } from "react-router-dom";

const Item = ({ id, name, img, price }) => {
  return (
    <article>
      <header>
        <h2 className="font-medium text-center">{name}</h2>
      </header>
      <picture>
        <img
          src={img}
          alt={name}
          className="w-[300px] h-[350px] object-cover"
        />
      </picture>
      <section className="flex flex-col items-center gap-2">
        <p className="pt-2">Precio: ${price}</p>
        <Link to={`/item/${id}`} className="border p-2 px-6 rounded-xl transition duration-300 hover:bg-[#313131] ">Mas Info</Link>
      </section>
{/*       <footer className="text-center ml-[30%] p-2 w-[40%] bg-[#cecef1] border ">
        
      </footer> */}
    </article>
  );
};

export default Item;
