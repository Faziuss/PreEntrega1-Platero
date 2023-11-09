import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

function App(){
    return(
        <div>
            <NavBar/>
            <ItemListContainer greeting={"Bievenido a RE-GAMES nuestra tienda de videojuegos"}/>
        </div>
    )
}

export default App