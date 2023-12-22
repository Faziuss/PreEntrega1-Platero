import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import { ToastContainer } from "react-toastify";

import { CartProvider } from "./context/CartContext";

function App() {

  console.log(process.env.REACT_APP_apiKey);

  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <ItemListContainer
                  greeting={
                    "Bienvenido a Residence nuestra tienda de videojuegos"
                  }
                />
              }
            />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<h1>ERROR 404 </h1>} />
          </Routes>
          <ToastContainer 
          position="top-center"
          autoClose={2000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
          theme="dark"/>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
