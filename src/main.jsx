import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import SingleProduct from "./pages/SingleProduct";
import Login from "./pages/Login";
import CategoryProducts from "./pages/CategoryProducts.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/categoryproducts/:id" element={<CategoryProducts />} />
      </Routes>
    </Router>
  </StrictMode>
);
