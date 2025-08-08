import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';

import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

import './App.css'

function App() {
  const tahunSekarang = new Date().getFullYear();

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

      {/* Footer */}
      <footer className="bg-white py-12 text-center border-t border-gray-100">
        <div className="container mx-auto px-6">
          <p className="text-gray-600 font-['Inter']">
            Copyright &copy; { tahunSekarang } <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text font-bold">Rizki Cahya</span>. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}

export default App
