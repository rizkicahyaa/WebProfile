import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import './App.css'

import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";


function App() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 1500,
    });
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
