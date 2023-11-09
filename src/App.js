import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="font-[Poppins] bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] h-screen">
      <NavBar />
      <ItemListContainer
        greeting={"Bievenido a RE-GAMES nuestra tienda de videojuegos"}
      />
    </div>
  );
}

export default App;
