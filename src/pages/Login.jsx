import { useState } from "react";
import { Topbar } from "../components/Topbar";
import Navbar from "../components/Navbar";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import axios from "axios";
import { API_URL } from "../constants/apiConstant";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // emailchange
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  // passwordchange
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError("Email and password are required!");
      return;
    }

    setError("");

    console.log("Email:", email);
    console.log("Password:", password);

    try {
      const response = await axios.post(`${API_URL}/login`, {
        email: email,
        password: password,
      });

      if (response.status === 200) {
        console.log("Login successful:", response.data);
        // save token to local storage
        localStorage.setItem("token", response.data.access_token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        // redirect to home page
        window.location.href = "/";
      }
    } catch (error) {
      console.error(error);
      setError("Invalid email or password");
    }
  };

  return (
    <>
      <div className="sticky top-0 z-50">
        <Topbar />
        <Navbar />
        <div className="flex justify-center pt-8 bg-blue-100 h-screen">
          {" "}
          {/* Adjusted for top-middle position */}
          <div className="bg-white p-8 rounded-lg shadow-lg w-96 h-96">
            <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
            {error && <p className="text-red-500 text-center">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-medium">Email:</label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => handleEmailChange(e)}
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Enter your username"
                />
              </div>
              <div className="relative  items-center">
                <label className="block font-medium ">Password:</label>
                <div className="flex items-center relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => handlePasswordChange(e)}
                    placeholder="Enter your password"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-blue-600 transition"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <RiEyeOffLine size={20} />
                    ) : (
                      <RiEyeLine size={20} />
                    )}
                  </button>
                </div>
              </div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
