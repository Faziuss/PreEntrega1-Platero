import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const {totalQuantity, total} = cart.reduce((acc, item)=>{
    acc.totalQuantity += item.quantity
    acc.total += item.price * item.quantity
    return acc
  },{totalQuantity: 0, total: 0})

  console.log(total, totalQuantity);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
    } else {
      console.error("El producto ya fue agregado");
    }
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  return (
    <CartContext.Provider value={{total,  totalQuantity, cart, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
