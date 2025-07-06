import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import AOS from 'aos'
import 'aos/dist/aos.css';
import './App.css'
import fotoprofil from './assets/profile-pic.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

function App() {
  const form = useRef();
  const tahunSekarang = new Date().getFullYear();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
      {/* Normal Navigation */}
      <nav className="bg-white/90 backdrop-blur-xl sticky top-0 z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-gray-800 font-['Inter']">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">Rizki</span>
              <span className="text-gray-700">Cahya</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-600 hover:text-purple-600 transition-all duration-300 font-medium relative group font-['Inter']">
                <span className="relative z-10">Home</span>
                <div className="absolute inset-0 bg-purple-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </a>
              <a href="https://medium.com/@rizki.cahya03" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600 transition-all duration-300 font-medium relative group font-['Inter']">
                <span className="relative z-10">Blog</span>
                <div className="absolute inset-0 bg-purple-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </a>
              <a href="#project" className="text-gray-600 hover:text-purple-600 transition-all duration-300 font-medium relative group font-['Inter']">
                <span className="relative z-10">Project</span>
                <div className="absolute inset-0 bg-purple-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </a>
              <a href="#contact" className="text-gray-600 hover:text-purple-600 transition-all duration-300 font-medium relative group font-['Inter']">
                <span className="relative z-10">Contact</span>
                <div className="absolute inset-0 bg-purple-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </a>
            </div>

            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
                {isMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden flex flex-col items-center mt-6 space-y-4 pb-4">
              <a href="#home" className="text-gray-600 hover:text-purple-600 transition duration-300 font-medium font-['Inter']" onClick={toggleMenu}>Home</a>
              <a href="https://medium.com/@rizki.cahya03" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600 transition duration-300 font-medium font-['Inter']" onClick={toggleMenu}>Blog</a>
              <a href="#project" className="text-gray-600 hover:text-purple-600 transition duration-300 font-medium font-['Inter']" onClick={toggleMenu}>Project</a>
              <a href="#contact" className="text-gray-600 hover:text-purple-600 transition duration-300 font-medium font-['Inter']" onClick={toggleMenu}>Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Modified Layout */}
      <section id="home" className="py-20 bg-gradient-to-br from-white via-purple-50 to-pink-50 relative overflow-hidden">
        {/* Geometric Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-bounce"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-pink-200 rounded-full opacity-30 animate-pulse"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-purple-100 rounded-full opacity-20 animate-spin"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-pink-300 rounded-full opacity-40 animate-bounce"></div>
        </div>

        <div className="container mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            {/* Right Side - Profile Image (First on Mobile) */}
            <div className="relative flex justify-center order-1 lg:order-2" data-aos="fade-left">
              <div className="relative">
                {/* Floating Elements */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full opacity-60 animate-bounce"></div>
                
                {/* Main Profile Image */}
                <div className="relative z-10">
                  <img
                    src={fotoprofil}
                    alt="Foto Profil"
                    className="w-80 h-80 rounded-full object-cover shadow-2xl border-8 border-white"
                  />
                </div>
              </div>
            </div>

            {/* Left Side - Text Content (Second on Mobile) */}
            <div className="space-y-6 order-2 lg:order-1" data-aos="fade-right">
              <div className="space-y-4">
                <h1 className="text-6xl font-bold leading-tight font-['Poppins']">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">Rizki </span>
                  
                  <span className="text-gray-800">Cahya </span>
                  
                  <span className="text-gray-600">Ramdani</span>
                </h1>
                
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-pink-600"></div>
                  <p className="text-xl text-gray-600 font-medium font-['Inter']">Informatics Student • Full-stack Developer</p>
                </div>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed max-w-lg font-['Inter']">
                Assalamu'alaikum perkenalkan nama saya Rizki Cahya Ramdani, saya adalah mahasiswa Informatika dari Universitas Amikom Yogyakarta yang tertarik pada dunia IT seperti Full-stack development, UI/UX design, dan Graphic design.
              </p>

              <div className="flex items-center space-x-4 text-purple-600 font-medium font-['Inter']">
                <span className="text-2xl">📍</span>
                <span>Yogyakarta, Indonesia</span>
              </div>

              <div className="flex space-x-4">
                <a
                  href="https://drive.google.com/drive/folders/1LnGOlMOeaopcuz5u5mmCuQ2_zDIi-kK_?usp=sharing" 
                  target="_blank"
                  className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 font-['Inter']"
                >
                  <span className="relative z-10">Download CV</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>

              {/* Social Media Icons - Not Floating */}
              <div className="flex space-x-6 text-2xl">
                <a href="https://www.instagram.com/rizkichrmdn/" className="text-purple-600 hover:text-pink-600 transition-all duration-300 hover:scale-110" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://linkedin.com/in/rizkicahya" className="text-purple-600 hover:text-pink-600 transition-all duration-300 hover:scale-110" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://github.com/rizkicahya-ramdani" className="text-purple-600 hover:text-pink-600 transition-all duration-300 hover:scale-110" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100088670947673" className="text-purple-600 hover:text-pink-600 transition-all duration-300 hover:scale-110" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Hexagonal Grid */}
      <section id="project" className="py-32 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-6 font-['Poppins']" data-aos="fade-down">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">Creative </span>
              <span className="text-gray-800">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Project Card 1 */}
            <div className="group relative" data-aos="flip-left">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-4 hover:rotate-1">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 font-['Poppins']">Personal Portfolio</h3>
                  <p className="text-gray-600 mb-6 font-['Inter']">
                    Website portfolio pribadi menggunakan React dan Tailwind CSS untuk tampilan yang responsif.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full font-['Inter']">JavaScript</span>
                    <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full font-['Inter']">React</span>
                    <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full font-['Inter']">Tailwind CSS</span>
                  </div>
                  <a href="https://github.com/rizkicahya-ramdani/web-profile-react" target="_blank" className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-6 py-3 rounded-full text-sm transition duration-300 hover:shadow-lg font-['Inter']">
                    View Project
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="group relative" data-aos="flip-left" data-aos-delay="100">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-4 hover:-rotate-1">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 font-['Poppins']">Sistem Pengaduan Masyarakat</h3>
                  <p className="text-gray-600 mb-6 font-['Inter']">
                    Sistem pengaduan masyarakat berbasis web menggunakan PHP dan MySQL.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full font-['Inter']">PHP</span>
                    <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full font-['Inter']">MySQL</span>
                    <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full font-['Inter']">Bootstrap</span>
                  </div>
                  <a href="https://github.com/rizkicahya-ramdani/aplikasi-pengaduan-masyarakat" target="_blank" className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-6 py-3 rounded-full text-sm transition duration-300 hover:shadow-lg font-['Inter']">
                    View Project
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="group relative" data-aos="flip-left" data-aos-delay="200">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-4 hover:rotate-1">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 font-['Poppins']">Sistem Pemesanan Tiket Hotel</h3>
                  <p className="text-gray-600 mb-6 font-['Inter']">
                    Sistem pemesanan tiket hotel berbasis web menggunakan CodeIgniter dan MySQL.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full font-['Inter']">PHP</span>
                    <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full font-['Inter']">CodeIgniter</span>
                    <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full font-['Inter']">Bootstrap</span>
                    <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full font-['Inter']">MySQL</span>
                  </div>
                  <a href="https://github.com/rizkicahya-ramdani/aplikasi-pemesanan-hotel" target="_blank" className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-6 py-3 rounded-full text-sm transition duration-300 hover:shadow-lg font-['Inter']">
                    View Project
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 4 */}
            <div className="group relative" data-aos="flip-left" data-aos-delay="300">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-4 hover:-rotate-1">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 font-['Poppins']">Klasifikasi Penyakit Jantung</h3>
                  <p className="text-gray-600 mb-6 font-['Inter']">
                    Klasifikasi penyakit jantung menggunakan algoritma Random Forest dan Logistic Regression.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full font-['Inter']">Python</span>
                    <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full font-['Inter']">Jupyter</span>
                  </div>
                  <a href="https://github.com/rizkicahya-ramdani/klasifikasi-penyakit-jantung" target="_blank" className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-6 py-3 rounded-full text-sm transition duration-300 hover:shadow-lg font-['Inter']">
                    View Project
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 5 */}
            <div className="group relative" data-aos="flip-left" data-aos-delay="400">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-4 hover:rotate-1">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 font-['Poppins']">Sistem Pemesanan Tiket Bioskop</h3>
                  <p className="text-gray-600 mb-6 font-['Inter']">
                    Sistem pemesanan tiket bioskop berbasis web menggunakan PHP dan MySQL.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full font-['Inter']">PHP</span>
                    <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full font-['Inter']">MySQL</span>
                    <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full font-['Inter']">Bootstrap</span>
                  </div>
                  <a href="https://github.com/Fauzi-Taufiq/bioskop" target="_blank" className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-6 py-3 rounded-full text-sm transition duration-300 hover:shadow-lg font-['Inter']">
                    View Project
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 6 */}
            <div className="group relative" data-aos="flip-left" data-aos-delay="500">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-4 hover:-rotate-1">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 font-['Poppins']">Sistem Pemesanan Tiket Hotel (UI/UX)</h3>
                  <p className="text-gray-600 mb-6 font-['Inter']">
                    Prototype sistem pemesanan tiket hotel berbasis mobile menggunakan Figma.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full font-['Inter']">Figma</span>
                  </div>
                  <a href="https://www.figma.com/design/eSa9brf8IkddzMcMuTHBG2/Sistem-Pemesanan-Tiket-Hotel?node-id=0-1&t=K0ksMtmmtNOVZMN9-1" target="_blank" className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-6 py-3 rounded-full text-sm transition duration-300 hover:shadow-lg font-['Inter']">
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section - Floating Orbs */}
        <div className="mt-40">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-6 font-['Poppins']" data-aos="fade-down">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">My</span>
              <span className="text-gray-800"> Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-16 max-w-6xl mx-auto">
            <div className="group">
              <div className="bg-white p-8 rounded-full shadow-2xl transition-all duration-500 group-hover:shadow-purple-200 group-hover:-translate-y-4 group-hover:scale-110">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="w-16 h-16" title="HTML5" data-aos="flip-right" />
              </div>
            </div>

            <div className="group">
              <div className="bg-white p-8 rounded-full shadow-2xl transition-all duration-500 group-hover:shadow-purple-200 group-hover:-translate-y-4 group-hover:scale-110" data-aos="flip-right" data-aos-delay="100">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="w-16 h-16" title="CSS3" />
              </div>
            </div>

            <div className="group">
              <div className="bg-white p-8 rounded-full shadow-2xl transition-all duration-500 group-hover:shadow-purple-200 group-hover:-translate-y-4 group-hover:scale-110" data-aos="flip-right" data-aos-delay="200">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-16 h-16" title="JavaScript" />
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white p-8 rounded-full shadow-2xl transition-all duration-500 group-hover:shadow-purple-200 group-hover:-translate-y-4 group-hover:scale-110" data-aos="flip-right" data-aos-delay="300">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" className="w-16 h-16" title="PHP" />
              </div>
            </div>

            <div className="group">
              <div className="bg-white p-8 rounded-full shadow-2xl transition-all duration-500 group-hover:shadow-purple-200 group-hover:-translate-y-4 group-hover:scale-110" data-aos="flip-right" data-aos-delay="400">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-16 h-16" title="Python" />
              </div>
            </div>

            <div className="group">
              <div className="bg-white p-8 rounded-full shadow-2xl transition-all duration-500 group-hover:shadow-purple-200 group-hover:-translate-y-4 group-hover:scale-110" data-aos="flip-right" data-aos-delay="500">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-16 h-16" title="React" />
              </div>
            </div>

            <div className="group">
              <div className="bg-white p-8 rounded-full shadow-2xl transition-all duration-500 group-hover:shadow-purple-200 group-hover:-translate-y-4 group-hover:scale-110" data-aos="flip-right" data-aos-delay="600">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" className="w-16 h-16" title="Bootstrap" />
              </div>
            </div>

            <div className="group">
              <div className="bg-white p-8 rounded-full shadow-2xl transition-all duration-500 group-hover:shadow-purple-200 group-hover:-translate-y-4 group-hover:scale-110" data-aos="flip-right" data-aos-delay="700">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" className="w-16 h-16" title="Tailwind CSS" />
              </div>
            </div>

            <div className="group">
              <div className="bg-white p-8 rounded-full shadow-2xl transition-all duration-500 group-hover:shadow-purple-200 group-hover:-translate-y-4 group-hover:scale-110" data-aos="flip-right" data-aos-delay="800">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="w-16 h-16" title="MySQL" />
              </div>
            </div>

            <div className="group">
              <div className="bg-white p-8 rounded-full shadow-2xl transition-all duration-500 group-hover:shadow-purple-200 group-hover:-translate-y-4 group-hover:scale-110" data-aos="flip-right" data-aos-delay="900">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" className="w-16 h-16" title="Figma" />
              </div>
            </div>
          </div>
        </div>
      </section>

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
