import { createContext, useReducer, useContext } from "react";

type statues = "additem" | "clearcart" | "switchcart";

type Action = { type: statues; payload: unknown };

type ContextType = {
  itemCount: number;
  isOpenCart: boolean;
  addItem: (num: number) => void;
  clearCart: () => void;
  switchCart: () => void;
};

type State = {
  itemCount: number;
  isOpenCart: boolean;
};

const CartContext = createContext<ContextType | null>(null);

const initialState = {
  itemCount: 0,
  isOpenCart: false,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "additem":
      return {
        ...state,
        itemCount: state.itemCount + (action.payload as number),
      };
    case "clearcart":
      return {
        ...state,
        itemCount: 0,
      };
    case "switchcart":
      return {
        ...state,
        isOpenCart: !state.isOpenCart,
      };
    default:
      throw new Error("Unknown action");
  }
}

interface CartProviderProps {
  children: React.ReactNode;
}

function CartProvider({ children }: CartProviderProps) {
  const [{ itemCount, isOpenCart }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function addItem(num: number) {
    dispatch({ type: "additem", payload: num });
  }

  function clearCart() {
    dispatch({ type: "clearcart", payload: null });
  }

  function switchCart() {
    dispatch({ type: "switchcart", payload: null });
  }

  return (
    <CartContext.Provider
      value={{
        itemCount,
        isOpenCart,
        addItem,
        clearCart,
        switchCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined || context === null)
    throw new Error("CartContext was used outside CartProvider");
  return context;
}

export { CartProvider, useCart };
