import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from "react-router-dom";

import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Contact from "./Pages/Contact";
import About from "./Pages/About";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // simulate login

  const activeClass = "text-white bg-blue-500 px-3 py-1 rounded";
  const normalClass = "text-blue-500 hover:text-white hover:bg-blue-400 px-3 py-1 rounded transition";

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Navbar */}
        <nav className="bg-white shadow-md p-4 flex justify-between items-center">
          <div className="flex gap-2">
            <NavLink to="/" className={({ isActive }) => isActive ? activeClass : normalClass}>Home</NavLink>
            <NavLink to="/products" className={({ isActive }) => isActive ? activeClass : normalClass}>Products</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? activeClass : normalClass}>Contact</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? activeClass : normalClass}>About</NavLink>
          </div>

          <button
            onClick={() => setIsLoggedIn(!isLoggedIn)}
            className="ml-4 px-4 py-1 bg-green-500 hover:bg-green-600 text-white rounded transition"
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </nav>

        {/* Main Content */}
        <div className="p-6 max-w-6xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Protected Route */}
            <Route
              path="/products"
              element={isLoggedIn ? <Products /> : (
                  <div className="text-center p-8 bg-yellow-100 border border-yellow-400 rounded">
                    <h2 className="text-xl font-bold mb-2 text-yellow-800">
                      You need to login to view Products!
                    </h2>
                    <p className="text-yellow-700">Please click the Login button in the navbar.</p>
                  </div>
                )}
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;