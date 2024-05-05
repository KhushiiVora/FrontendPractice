import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import { ThemeProvider } from "./ThemeContext";
import "./index.css";
const Index = () => {
  return (
    <div id="themeDiv">
      <ThemeProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
};

export default Index;
