import AppLayout from "./ui/AppLayout";
import { SlideProvider } from "./ui/contexts/SlideContext";

function App() {
  return (
    <SlideProvider>
      <AppLayout />
    </SlideProvider>
  );
}

export default App;
