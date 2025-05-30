import { createContext, useEffect, useState } from 'react';

const addCartItem = (cartItems, productToAdd) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0
});

export const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    setCartCount(newCount);
  }, [cartItems])

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = { isOpen, setIsOpen, addItemToCart, cartItems, cartCount };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
