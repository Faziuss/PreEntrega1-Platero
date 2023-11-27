import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={"Bievenido a Residence nuestra tienda de videojuegos"} />} />
        <Route path='/category/:categoryId' element={<ItemListContainer/>} />
        <Route path='/item/:itemId' element={<ItemListContainer/>} />
        <Route path='*' element={<h1>ERROR 404 </h1>} />
      </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
