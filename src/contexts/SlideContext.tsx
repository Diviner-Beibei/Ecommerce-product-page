import { createContext, useReducer, useContext } from "react";

type statues = "next" | "previous" | "setnum" | "switchfull";

type Action = { type: statues; payload: unknown };

type ContextType = {
  slideIndex: number;
  slideImgs: Array<string>;
  isOpenFull: boolean;
  slideSetNum: (num: number) => void;
  slideMove: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  switchFull: () => void;
};

type State = {
  slideIndex: number;
  slideImgs: Array<string>;
  isOpenFull: boolean;
};

const SlideContext = createContext<ContextType | null>(null);

const initialState = {
  slideIndex: 1,
  slideImgs: [
    "./image-product-1-thumbnail.jpg",
    "./image-product-2-thumbnail.jpg",
    "./image-product-3-thumbnail.jpg",
    "./image-product-4-thumbnail.jpg",
  ],
  isOpenFull: false,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "next":
      return {
        ...state,
        slideIndex: state.slideIndex + 1,
      };
    case "previous":
      return { ...state, slideIndex: state.slideIndex - 1 };
    case "setnum":
      return { ...state, slideIndex: action.payload as number };
    case "switchfull":
      return { ...state, isOpenFull: !state.isOpenFull };
    default:
      throw new Error("Unknown action");
  }
}

interface SlideProviderProps {
  children: React.ReactNode;
}

function SlideProvider({ children }: SlideProviderProps) {
  const [{ slideIndex, slideImgs, isOpenFull }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function slideNext() {
    if (slideIndex === 4) return;
    dispatch({ type: "next", payload: null });
  }

  function slidePrevious() {
    if (slideIndex === 1) return;
    dispatch({ type: "previous", payload: null });
  }

  function slideSetNum(num: number) {
    if (num < 1 || num > 4) return;
    dispatch({ type: "setnum", payload: num });
  }

  function switchFull() {
    dispatch({ type: "switchfull", payload: null });
  }

  function slideMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const node = (e.target as Element).closest(".slide");
    // console.log(e.target);

    if (node) {
      if (node.classList.contains("previous")) {
        // console.log("previous", slideIndex);
        if (slideIndex === 1) return;
        slidePrevious();
      }
      if (node.classList.contains("next")) {
        // console.log("next", slideIndex);
        if (slideIndex === 4) return;
        slideNext();
      }
    }
  }

  return (
    <SlideContext.Provider
      value={{
        slideIndex,
        slideImgs,
        isOpenFull,
        slideMove,
        slideSetNum,
        switchFull,
      }}
    >
      {children}
    </SlideContext.Provider>
  );
}

function useSlide() {
  const context = useContext(SlideContext);
  if (context === undefined || context === null)
    throw new Error("SlideContext was used outside SlideProvider");
  return context;
}

export { SlideProvider, useSlide };
