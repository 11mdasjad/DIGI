import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [notification, setNotification] = useState(null);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('digiCart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem('digiCart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, quantity = 1, selectedSize = null) => {
    const existingItemIndex = cart.findIndex(
      item => item.id === product.id && item.selectedSize === selectedSize
    );

    if (existingItemIndex > -1) {
      const newCart = [...cart];
      newCart[existingItemIndex].quantity += quantity;
      setCart(newCart);
    } else {
      setCart([...cart, { ...product, quantity, selectedSize }]);
    }

    showNotification({
      type: 'success',
      message: `Congrats! ${product.name} added to cart!`,
      product: product
    });
  };

  const removeFromCart = (productId, selectedSize) => {
    setCart(cart.filter(item => !(item.id === productId && item.selectedSize === selectedSize)));
    showNotification({
      type: 'info',
      message: 'Item removed from cart'
    });
  };

  const updateQuantity = (productId, selectedSize, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId, selectedSize);
      return;
    }

    const newCart = cart.map(item =>
      item.id === productId && item.selectedSize === selectedSize
        ? { ...item, quantity }
        : item
    );
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
    showNotification({
      type: 'info',
      message: 'Cart cleared'
    });
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  const showNotification = (notif) => {
    setNotification(notif);
    setTimeout(() => setNotification(null), 3000);
  };

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartCount,
    isCartOpen,
    setIsCartOpen,
    notification,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
