import CartWidget from "../CartWidget/CartWidget";
import Logo from "../Logo";
import Profile from "../Profile/Profile";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="bg-white">
      <nav className="flex flex-row justify-between items-center w-[92%] mx-auto p-2">
        <Link to="/"><Logo/></Link>
        <ul className="flex items-center gap-4">
          <li>
            <Link to="/category/consola" className="hover:text-gray-500 font-bold">
              Consola
            </Link>
          </li>
          <li>
            <Link to="/category/pc" className="hover:text-gray-500 font-bold">
              PC
            </Link>
          </li>
          <li>
            <Link to="/category/contacto" className="hover:text-gray-500 font-bold">
              Contacto
            </Link>
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
