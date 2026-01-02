import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle navbar scroll logic
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Load chatbot widget script ONCE
  useEffect(() => {
    const scriptId = "mini-chatbot-script";

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "http://localhost:3000/mini-chatbot.js"; // dev URL
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      <Router>
        <div
          className={`scroll-gradient-effect dark min-h-screen bg-background text-foreground ${
            isScrolled ? "scrolled" : ""
          }`}
        >
          <Navbar />

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>

      <mini-chatbot
        endpoint="http://localhost:3001/api/chat"
        bot-name="Support"
        theme="light"
      ></mini-chatbot>
    </>
  );
}

export default App;
