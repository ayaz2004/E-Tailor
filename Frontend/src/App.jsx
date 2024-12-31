import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";
import { useState, useEffect } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Initialize theme from localStorage or default to light mode
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    // Apply the theme to the <html> element and save it in localStorage
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  return (
    <BrowserRouter>
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}
