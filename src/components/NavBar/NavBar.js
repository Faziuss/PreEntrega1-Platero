import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <header className="bg-white">
      <nav className="flex flex-row justify-between items-center w-[92%] mx-auto p-2">
        <div>
          <h3 className="">RE-GAMES</h3>
        </div>
        <ul className="flex items-center gap-[4vw]">
          <li>
            <a className="hover:text-gray-500" href="#">
              Juegos Digitales
            </a>
          </li>
          <li>
            <a className="hover:text-gray-500" href="#">
              Juegos FIsicos
            </a>
          </li>
        </ul>
        <div className="flex gap-4">
          <button className="bg-[#b4dbff] text-white px-5 py-2 rounded-full hover:bg-[#d598fc]">
            Iniciar Sesion
          </button>
          <CartWidget />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
