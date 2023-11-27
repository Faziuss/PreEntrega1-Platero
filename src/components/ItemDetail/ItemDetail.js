const itemDetail = ({id, name, img, category, description, price}) => {
    return(
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
      <section>
        <p>Precio: ${price}</p>
      </section>
      <footer>
        <Link to={`/item/${id}`}>Mas Info</Link>
      </footer>
    </article>
    )
}
