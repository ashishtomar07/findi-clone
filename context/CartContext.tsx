"use client";

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";

export interface CartItem {
  id: string;
  name: string;
  premium: number;
  slug: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: CartItem, redirect?: boolean) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  totalAmount: number;
  itemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_KEY = "cart";

function getStoredCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const stored = localStorage.getItem(CART_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [mounted, setMounted] = useState(false);

  // Hydrate from localStorage on mount
  useEffect(() => {
    setItems(getStoredCart());
    setMounted(true);
  }, []);

  // Sync to localStorage whenever items change (after mount)
  useEffect(() => {
    if (mounted) {
      localStorage.setItem(CART_KEY, JSON.stringify(items));
    }
  }, [items, mounted]);

  // Listen for storage changes from other tabs
  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key === CART_KEY) {
        setItems(getStoredCart());
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const addToCart = useCallback(
    (product: CartItem, redirect = false) => {
      setItems((prev) => {
        if (prev.find((item) => item.id === product.id)) {
          alert(`"${product.name}" is already in your cart.`);
          return prev;
        }
        alert(`${product.name} added to cart!`);
        return [...prev, { id: product.id, name: product.name, premium: product.premium, slug: product.slug }];
      });
      if (redirect) {
        // Small delay to let state persist before navigation
        setTimeout(() => {
          window.location.href = "/cart";
        }, 100);
      }
    },
    []
  );

  const removeFromCart = useCallback((productId: string) => {
    setItems((prev) => prev.filter((item) => item.id !== productId));
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const totalAmount = items.reduce((sum, item) => sum + item.premium, 0);
  const itemCount = items.length;

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, clearCart, totalAmount, itemCount }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
