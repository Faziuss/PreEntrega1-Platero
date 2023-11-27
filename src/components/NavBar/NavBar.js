import CartWidget from "../CartWidget/CartWidget";
import Logo from "../Logo";
import Profile from "../Profile/Profile";

const NavBar = () => {
  return (
    <header className="bg-white">
      <nav className="flex flex-row justify-between items-center w-[92%] mx-auto p-2">
          <Logo/>
        <ul className="flex items-center gap-4">
          <li>
            <a className="hover:text-gray-500 font-bold" href="#">
              Productos
            </a>
          </li>
          <li>
            <a className="hover:text-gray-500 font-bold" href="#">
              Contacto
            </a>
          </li>
        </ul>
        <div className="flex gap-4">
          <CartWidget />
          <Profile/>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
