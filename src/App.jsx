import { useEffect } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AOS from 'aos'
import 'aos/dist/aos.css';

import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import Projects from "./components/Projects.jsx";

import './App.css'

function App() {
  const form = useRef();
  const tahunSekarang = new Date().getFullYear();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_26hybx9', 'template_xeqrsvd', form.current, '0byMFkC9r8X1hK5Yx')
      .then((result) => {
          console.log('SUCCESS!', result.text);
          alert('Pesan berhasil dikirim!');
      }, (error) => {
          console.log('FAILED...', error.text);
          alert('Gagal mengirim pesan.');
      });

    e.target.reset();
  };

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


      {/* Contact Section - Floating Form */}
      <section id="contact" className="py-32 bg-gradient-to-br from-purple-50 to-pink-50 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-6 font-['Poppins']" data-aos="fade-down">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">Contact</span>
              <span className="text-gray-800"> me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-12 border border-gray-100" data-aos="fade-up">
              <form ref={form} onSubmit={sendEmail} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-gray-700 font-medium font-['Inter']">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      className="w-full p-4 rounded-2xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-300 text-gray-800 placeholder-gray-400 font-['Inter']"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-gray-700 font-medium font-['Inter']">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      className="w-full p-4 rounded-2xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-300 text-gray-800 placeholder-gray-400 font-['Inter']"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-gray-700 font-medium font-['Inter']">Your Message</label>
                  <textarea
                    name="message"
                    placeholder="Enter your message..."
                    rows="6"
                    className="w-full p-4 rounded-2xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-300 text-gray-800 placeholder-gray-400 resize-none font-['Inter']"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-4 rounded-2xl transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-['Inter']"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

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
