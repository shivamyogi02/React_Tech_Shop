

// export default router;
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import TopProducts from "./components/TopProducts";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/products", element: <AllProducts /> }, // All Products page
  { path: "/top-products", element: <TopProducts /> }, // Top Products page
  { path: "/product/:id", element: <ProductDetails /> },
  { path: "/cart", element: <Cart /> },
  { path: "*", element: <h1 className="text-center mt-20 text-red-500">Page Not Found</h1> }, // fallback 404
]);

export default router;
