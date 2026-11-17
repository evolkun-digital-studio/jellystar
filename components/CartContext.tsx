"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

type CartCtx = {
  count: number;
  lastAdded: string | null;
  add: (name: string) => void;
};

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0);
  const [lastAdded, setLastAdded] = useState<string | null>(null);

  const add = useCallback((name: string) => {
    setCount((c) => c + 1);
    setLastAdded(name);
    window.setTimeout(() => setLastAdded((cur) => (cur === name ? null : cur)), 2200);
  }, []);

  const value = useMemo(() => ({ count, lastAdded, add }), [count, lastAdded, add]);
  return (
    <Ctx.Provider value={value}>
      {children}
      <div className={`toast ${lastAdded ? "toast--show" : ""}`} role="status" aria-live="polite">
        {lastAdded ? (
          <>
            <span className="toast__star">✦</span> {lastAdded} added to cart
          </>
        ) : null}
      </div>
    </Ctx.Provider>
  );
}

export function useCart() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
