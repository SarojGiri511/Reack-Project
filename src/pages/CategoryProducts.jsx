import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../constants/apiConstant";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Topbar } from "../components/Topbar";

function CategoryProducts() {
  const { id } = useParams();
  const navigate = useNavigate(); // ✅ Fix: useNavigate instead of undefined navigation
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Optional loading state
  const [error, setError] = useState(null); // Optional error state

  useEffect(() => {
    axios
      .get(`${API_URL}/categoryproducts/${id}`)
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load products");
        setLoading(false);
        console.error(err);
      });
  }, [id]);

  const handleClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } }); // ✅ Fixed
  };

  return (
    <>
      <Topbar />
      <Navbar />

      <div className="px-6 sm:px-12 md:px-20 py-10">
        {loading ? (
          <p className="text-center text-gray-500">Loading products...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => handleClick(product)}
              />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default CategoryProducts;
