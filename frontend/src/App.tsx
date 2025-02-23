import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import { useState, useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // Apply the theme when the mode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
      {/* Navbar */}
      <nav className={`p-4 ${darkMode ? "bg-gray-800" : "bg-blue-600"} text-white`}>
        <div className="container mx-auto flex justify-between">
          <h1 className="text-xl font-bold">Customer Engagement Dashboard</h1>
          <div className="flex items-center">
            <Link to="/" className="mx-2 hover:underline">Dashboard</Link>
            <Link to="/users" className="mx-2 hover:underline">Users</Link>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-4 px-3 py-1 bg-gray-500 hover:bg-gray-700 rounded text-white"
            >
              {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div className="container mx-auto p-6">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
