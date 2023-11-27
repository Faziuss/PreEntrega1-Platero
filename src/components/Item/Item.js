const Item = ({id, name, img, price}) => {

    return(
      <article>
        <header>
            <h2>
                {name}
            </h2>
        </header>
        <picture className="">
            <img src={img} alt={name} className="w-80"/>
        </picture>
        <section>
            <p>
                Precio: ${price}
            </p>
        </section>
        <footer>
            <button>Mas Info</button>
        </footer>
      </article>
    )

}

export default Item