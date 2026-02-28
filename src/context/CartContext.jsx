import { createContext, useEffect, useMemo, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("paradise_cart");
    return saved ? JSON.parse(saved) : [];
  });

  // ✅ Guardar en localStorage cada vez que cambie el carrito
  useEffect(() => {
    localStorage.setItem("paradise_cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add (si existe, suma qty)
  const addToCart = (plant) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.name === plant.name);
      if (existing) {
        return prev.map((i) =>
          i.name === plant.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...plant, quantity: 1 }];
    });
  };

  const increaseQty = (name) => {
    setCartItems((prev) =>
      prev.map((i) =>
        i.name === name ? { ...i, quantity: i.quantity + 1 } : i
      )
    );
  };

  const decreaseQty = (name) => {
    setCartItems((prev) =>
      prev
        .map((i) =>
          i.name === name ? { ...i, quantity: Math.max(0, i.quantity - 1) } : i
        )
        .filter((i) => i.quantity > 0)
    );
  };

  const removeFromCart = (name) => {
    setCartItems((prev) => prev.filter((i) => i.name !== name));
  };

  const clearCart = () => setCartItems([]);

  const totalItems = useMemo(
    () => cartItems.reduce((t, i) => t + i.quantity, 0),
    [cartItems]
  );

  const totalCost = useMemo(
    () => cartItems.reduce((t, i) => t + i.price * i.quantity, 0),
    [cartItems]
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
        clearCart,
        totalItems,
        totalCost,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};