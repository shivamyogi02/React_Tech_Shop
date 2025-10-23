
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <div className="bg-black text-white min-h-screen font-sans">
        <RouterProvider router={router} />
      </div>
    </CartProvider>
  );
}

export default App;
