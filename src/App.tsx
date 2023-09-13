import AppLayout from "./ui/AppLayout";
import { SlideProvider } from "./contexts/SlideContext";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <CartProvider>
      <SlideProvider>
        <AppLayout />
      </SlideProvider>
    </CartProvider>
  );
}

export default App;
