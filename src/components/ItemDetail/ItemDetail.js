const itemDetail = ({ id, name, img, platform, description, price }) => {
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
      <footer></footer>
    </article>
  );
};

export default itemDetail;
