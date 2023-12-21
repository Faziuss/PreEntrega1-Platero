import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";

import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <div>
      <BrowserRouter>
      <CartProvider>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={"Bievenido a Residence nuestra tienda de videojuegos"} />} />
        <Route path='/category/:categoryId' element={<ItemListContainer/>} />
        <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
        <Route path="/cart" element={<Cart/>} /> 
        <Route path='*' element={<h1>ERROR 404 </h1>} />
      </Routes> 
      </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
