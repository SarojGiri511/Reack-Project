import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import axios from "axios";
import { API_URL } from "../constants/apiConstant";
function Navbar() {
  const [categories, setCategories] = useState([]);
  const [productsByCategory, setProductsByCategory] = useState({});

  useEffect(() => {
    const fetchCategoriesAndProducts = async () => {
      try {
        const categoryRes = await axios.get(`${API_URL}/categories`);
        setCategories(categoryRes.data);

        const productsData = {};
        await Promise.all(
          categoryRes.data.map(async (category) => {
            const productRes = await axios.get(
              `${API_URL}/categoryproducts/${category.id}`
            );
            productsData[category.id] = productRes.data.products || [];
          })
        );

        setProductsByCategory(productsData);
      } catch (error) {
        console.error("Error loading categories/products:", error);
      }
    };

    fetchCategoriesAndProducts();
  }, []);
  
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <nav className="flex justify-between items-center px-6 py-2 bg-gray-200 shadow-md relative z-50">
      <img src={logo} alt="logo" className="h-20" />

      <ul className="flex items-center space-x-6">
        <li>
          <NavLink to="/" end className="font-bold text-blue-500">
            Home
          </NavLink>
        </li>

        {categories.map((category) => (
          <li key={category.id} className="relative group">
            <NavLink
              to={`/categoryproducts/${category.id}`}
              className="font-bold text-blue-500"
            >
              {category.name}
            </NavLink>

            {/* Dropdown products */}
            {productsByCategory[category.id]?.length > 0 && (
              <ul className="absolute top-full left-0 bg-white shadow-lg p-2 rounded-md min-w-[200px] hidden group-hover:block">
                {productsByCategory[category.id].map((product) => (
                  <li key={product.id}>
                    <NavLink
                      to={`/product/${product.id}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {product.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}

        <li>
          {localStorage.getItem("token") === null ? (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 font-semibold"
                  : "text-blue-500 font-bold"
              }
            >
              Login
            </NavLink>
          ) : (
            <a
              className="text-blue-500 font-bold cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </a>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
