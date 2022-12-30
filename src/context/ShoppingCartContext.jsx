import { createContext, useContext } from "react";
import { useLocalStorage } from "@mantine/hooks";

const ShoppingCartContext = createContext({});

export function useShoppingCart() {
 return useContext(ShoppingCartContext);
}
export function ShoppingCartProvider({ children }) {
 const [cartItems, setCartItems] = useLocalStorage({
  key: "shopping-cart",
  defaultValue: [],
 });

 const cartQuantity = cartItems.reduce(
  (quantity, item) => item.quantity + quantity,
  0
 );

 function getItemQuantity(id) {
  return cartItems.find((item) => item.id === id)?.quantity || 0;
 }
 function increaseCartQuantity(product) {
  setCartItems((currItems) => {
   if (currItems.find((item) => item.id === product.id) == null) {
    return [...currItems, { ...product, quantity: 1 }];
   } else {
    return currItems.map((item) => {
     if (item.id === product.id) {
      return { ...item, quantity: item.quantity + 1 };
     } else {
      return item;
     }
    });
   }
  });
 }
 function decreaseCartQuantity(id) {
  setCartItems((currItems) => {
   if (currItems.find((item) => item.id === id)?.quantity === 1) {
    return currItems.filter((item) => item.id !== id);
   } else {
    return currItems.map((item) => {
     if (item.id === id) {
      return { ...item, quantity: item.quantity - 1 };
     } else {
      return item;
     }
    });
   }
  });
 }
 function removeFromCart(id) {
  setCartItems((currItems) => {
   return currItems.filter((item) => item.id !== id);
  });
 }

 return (
  <ShoppingCartContext.Provider
   value={{
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    cartItems,
    cartQuantity,
   }}
  >
   {children}
  </ShoppingCartContext.Provider>
 );
}
