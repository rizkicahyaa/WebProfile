import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from 'aos'
import 'aos/dist/aos.css';
import './App.css'

import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import EduEx from "./components/EduEx.jsx";
import Projects from "./pages/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./components/Footer.jsx";


function App() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 1500,
    });
  }, []);

  return (
    <Router>
        <Navbar />
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <HeroSection />
                        <EduEx />
                        <Skills />
                    </>
                }
            />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App
