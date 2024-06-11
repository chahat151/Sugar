import "./App.module.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { MainLayout } from "./layouts";
import {
  Error,
  Home,
  Shop,
  GiftIdeas,
  About,
  Confirmation,
  ProductDetail,
} from "./pages";


const router = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "GiftIdeas", element: <GiftIdeas /> },
      { path: "brand", element: <About /> },
      { path: "confirmation", element: <Confirmation /> },
      { path: "product/:id", element: <ProductDetail /> },
      { path: "*", element: <Error /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
