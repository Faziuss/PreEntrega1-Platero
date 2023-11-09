import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav>
      <h3>RE-GAMES</h3>
      <div>
        <button>Juegos Digitales</button>
        <button>Juegos Fisicos</button>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
