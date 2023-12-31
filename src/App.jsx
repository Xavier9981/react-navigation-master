import React from "react";
import Home from "./pages/Home";
/*import Hero from "./components/Hero";<Hero/>
<Route path="/services" element={<Services />} />*/
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Products";
import Navigation from "./components/Navigation/Navigation";
const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default App;
