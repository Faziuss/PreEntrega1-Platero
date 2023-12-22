import CartWidget from "../CartWidget/CartWidget";
import Logo from "../Logo";
import ProfileWidget from "../Profile/ProfileWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="bg-[#18181c]">
      <nav className="flex flex-row justify-between items-center w-[92%] mx-auto p-2">
        <Link to="/">
          <Logo />
        </Link>
        <ul className="flex items-center gap-4">
          <li>
            <Link
              to="/category/consola"
              className="hover:text-[#ff2e2e] font-bold"
            >
              Consola
            </Link>
          </li>
          <li>
            <Link to="/category/pc" className="hover:text-[#ff2e2e] font-bold">
              PC
            </Link>
          </li>
          <li>
            <Link
              to="/category/contacto"
              className="hover:text-[#ff2e2e] font-bold"
            >
              Contacto
            </Link>
          </li>
        </ul>
        <div className="flex gap-4">
          <CartWidget />
          <ProfileWidget />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
