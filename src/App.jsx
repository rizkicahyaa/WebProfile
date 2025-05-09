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

    e.target.reset(); // reset form setelah kirim
  };

  useEffect(() => {
    AOS.init({
      once: false,
      duration: 1500,
    });
  }, []);

  return (
    <>

      <nav className="bg-gray-900 bg-opacity-70 backdrop-blur-md sticky top-0 z-50 shadow-lg p-4">
        <div className="container mx-auto flex justify-around items-center">
          
          {/* Logo */}
          <div className="text-white text-2xl font-bold">
            Rizki Cahya
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-white hover:text-gray-300 transition">Home</a>
            <a href="https://medium.com/@rizki.cahya03" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition">Blog</a>
            <a href="#project" className="text-white hover:text-gray-300 transition">Project</a>
            <a href="#contact" className="text-white hover:text-gray-300 transition">Contact</a>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isMenuOpen ? (
                // Icon close
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Icon hamburger
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col items-center mt-4 space-y-4">
            <a href="#home" className="text-white hover:text-gray-300 transition" onClick={toggleMenu}>Home</a>
            <a href="https://medium.com/@rizki.cahya03" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition" onClick={toggleMenu}>Blog</a>
            <a href="#project" className="text-white hover:text-gray-300 transition" onClick={toggleMenu}>Project</a>
            <a href="#contact" className="text-white hover:text-gray-300 transition" onClick={toggleMenu}>Contact</a>
          </div>
        )}
      </nav>

      <section id="home" className="bg-gray-950 px-6 py-16 flex flex-col items-center text-center text-white">
        <img
          src={fotoprofil}
          alt="Foto Profil"
          className="w-40 h-40 rounded-full border-4 border-purple-100 shadow-xl"
          data-aos="fade-down"
        />
        <h1 className="text-4xl font-bold mt-6" data-aos="fade-down" data-aos-delay="200">Rizki Cahya Ramdani</h1>
        <p className="text-purple-600 dark:text-purple-400 text-lg mt-2" data-aos="fade-down" data-aos-delay="300">Informatics Student • Full-stack Developer</p>
        <p className="mt-6 mb-2 max-w-3xl text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="400">
          Assalamu'alaikum perkenalkan nama saya Rizki Cahya Ramdani, saya adalah mahasiswa Informatika dari Universitas Amikom Yogyakarta yang tertarik pada dunia IT seperti Full-stack development, UI/UX design, dan Graphic design.
        </p>
        <p className="mt-2 text-gray-500 dark:text-gray-300" data-aos="fade-up" data-aos-delay="500">📍 Yogyakarta, Indonesia</p>

        <div className="mt-6 flex justify-center gap-4 flex-wrap" data-aos="fade-up" data-aos-delay="600">
          <a
            href="https://drive.google.com/drive/folders/1LnGOlMOeaopcuz5u5mmCuQ2_zDIi-kK_?usp=sharing" target="_blank"
            className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full text-white font-medium transition duration-300"
            data-aos="fade-up"
          >
            Download CV
          </a>
        </div>

        <div className="mt-6 flex justify-center gap-6 text-3xl text-purple-600 dark:text-purple-400">
          <a href="https://www.instagram.com/rizkichrmdn/" className="hover:text-purple-800 transition" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100088670947673" className="hover:text-purple-800 transition" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://linkedin.com/in/rizkicahya" className="hover:text-purple-800 transition" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/rizkicahya-ramdani" className="hover:text-purple-800 transition" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </section>

      <section id="project" className="text-center bg-gray-900 text-white py-16 px-4">
        <h2 className="text-3xl font-bold mb-12" data-aos="fade-down">My Projects</h2>

        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
          {/* Project Card 1 */}
          <div className="bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center transition hover:-translate-y-2 hover:shadow-2xl" data-aos="flip-left">
            <h3 className="text-xl font-bold text-white mb-3">Personal Portfolio</h3>
            
            <p className="text-gray-300 text-sm mb-4 text-center">
              Website portfolio pribadi menggunakan React dan Tailwind CSS untuk tampilan yang responsif.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">JavaScript</span>
              <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">React</span>
              <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">Tailwind CSS</span>
            </div>

            <a href="https://github.com/rizkicahya-ramdani/web-profile-react" target="_blank" className="mt-auto bg-purple-600 hover:bg-purple-700 text-white font-semibold px-4 py-2 rounded-full text-sm transition">
              View Project
            </a>
          </div>

          {/* Project Card 2 */}
          <div className="bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center transition hover:-translate-y-2 hover:shadow-2xl" data-aos="flip-left" data-aos-delay="100">
            <h3 className="text-xl font-bold text-white mb-3">Sistem Pengaduan Masyarakat</h3>
            
            <p className="text-gray-300 text-sm mb-4 text-center">
              Sistem pengaduan masyarakat berbasis web menggunakan PHP dan MySQL.
            </p>

            <div className="flex flex-wrap gap-2 justify-center mb-4">
              <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">PHP</span>
              <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">MySQL</span>
              <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">Bootstrap</span>
            </div>

            <a href="https://github.com/rizkicahya-ramdani/aplikasi-pengaduan-masyarakat" target="_blank" className="mt-auto bg-purple-600 hover:bg-purple-700 text-white font-semibold px-4 py-2 rounded-full text-sm transition">
              View Project
            </a>
          </div>

          {/* Project Card 3 */}
          <div className="bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center transition hover:-translate-y-2 hover:shadow-2xl" data-aos="flip-left" data-aos-delay="200">
            <h3 className="text-xl font-bold text-white mb-3">Sistem Pemesanan Tiket Hotel</h3>
            
            <p className="text-gray-300 text-sm mb-4 text-center">
              Sistem pemesanan tiket hotel berbasis web menggunakan CodeIgniter dan MySQL.
            </p>

            <div className="flex flex-wrap gap-2 justify-center mb-4">
              <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">PHP</span>
              <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">CodeIgniter</span>
              <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">Bootstrap</span>
              <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">MySQL</span>
            </div>

            <a href="https://github.com/rizkicahya-ramdani/aplikasi-pemesanan-hotel" target="_blank" className="mt-auto bg-purple-600 hover:bg-purple-700 text-white font-semibold px-4 py-2 rounded-full text-sm transition">
              View Project
            </a>
          </div>

          {/* Project Card 4 */}
          <div className="bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center transition hover:-translate-y-2 hover:shadow-2xl" data-aos="flip-left" data-aos-delay="300">
            <h3 className="text-xl font-bold text-white mb-3">Klasifikasi Penyakit Jantung</h3>
            
            <p className="text-gray-300 text-sm mb-4 text-center">
              Klasifikasi penyakit jantung menggunakan algoritma Random Forest dan Logistic Regression.
            </p>

            <div className="flex flex-wrap gap-2 justify-center mb-4">
              <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">Python</span>
              <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">Jupyter</span>
            </div>

            <a href="https://github.com/rizkicahya-ramdani/klasifikasi-penyakit-jantung" target="_blank" className="mt-auto bg-purple-600 hover:bg-purple-700 text-white font-semibold px-4 py-2 rounded-full text-sm transition">
              View Project
            </a>
          </div>

          {/* Project Card 5 */}
          <div className="bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center transition hover:-translate-y-2 hover:shadow-2xl" data-aos="flip-left" data-aos-delay="400">
            <h3 className="text-xl font-bold text-white mb-3">Sistem Pemesanan Tiket Bioskop</h3>
            
            <p className="text-gray-300 text-sm mb-4 text-center">
              Sistem pemesanan tiket bioskop berbasis web menggunakan PHP dan MySQL.
            </p>

            <div className="flex flex-wrap gap-2 justify-center mb-4">
              <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">PHP</span>
              <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">MySQL</span>
              <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">Bootstrap</span>
            </div>

            <a href="https://github.com/Fauzi-Taufiq/bioskop" target="_blank" className="mt-auto bg-purple-600 hover:bg-purple-700 text-white font-semibold px-4 py-2 rounded-full text-sm transition">
              View Project
            </a>
          </div>

          {/* Project Card 6 */}
          <div className="bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center transition hover:-translate-y-2 hover:shadow-2xl" data-aos="flip-left" data-aos-delay="500">
            <h3 className="text-xl font-bold text-white mb-3">Sistem Pemesanan Tiket Hotel (UI/UX)</h3>
            
            <p className="text-gray-300 text-sm mb-4 text-center">
              Prototype sistem pemesanan tiket hotel berbasis mobile menggunakan Figma.
            </p>

            <div className="flex flex-wrap gap-2 justify-center mb-4">
              <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">Figma</span>
            </div>

            <a href="https://www.figma.com/design/eSa9brf8IkddzMcMuTHBG2/Sistem-Pemesanan-Tiket-Hotel?node-id=0-1&t=K0ksMtmmtNOVZMN9-1" target="_blank" className="mt-auto bg-purple-600 hover:bg-purple-700 text-white font-semibold px-4 py-2 rounded-full text-sm transition">
              View Project
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-16"></div>

        {/* My Skills */}
        <h2 className="text-2xl mb-8" data-aos="fade-down">Here are my main skill:</h2>
        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          
          {/* Skill Icon */}
          <div className="flex flex-col items-center">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="w-16 h-16" title="HTML5" data-aos="flip-right" />
          </div>

          <div className="flex flex-col items-center">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="w-16 h-16" title="CSS3" data-aos="flip-right" data-aos-delay="100" />
          </div>

          <div className="flex flex-col items-center">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-16 h-16" title="JavaScript" data-aos="flip-right" data-aos-delay="200" />
          </div>
          
          <div className="flex flex-col items-center">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" className="w-16 h-16" title="PHP" data-aos="flip-right" data-aos-delay="300" />
          </div>

          <div className="flex flex-col items-center">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-16 h-16" title="Python" data-aos="flip-right" data-aos-delay="400" />
          </div>

          <div className="flex flex-col items-center">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-16 h-16" title="React" data-aos="flip-right" data-aos-delay="500" />
          </div>

          <div className="flex flex-col items-center">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" className="w-16 h-16" title="Bootstrap" data-aos="flip-right" data-aos-delay="600" />
          </div>

          <div className="flex flex-col items-center">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" className="w-16 h-16" title="Tailwind CSS" data-aos="flip-right" data-aos-delay="700" />
          </div>

          <div className="flex flex-col items-center">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="w-16 h-16" title="MySQL" data-aos="flip-right" data-aos-delay="800" />
          </div>

          <div className="flex flex-col items-center">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" className="w-16 h-16" title="Figma" data-aos="flip-right" data-aos-delay="900" />
          </div>
        </div>
      </section>


      <section id="contact" className="bg-gray-950 px-6 py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-6">Contact me</h2>
        <form ref={form} onSubmit={sendEmail} className="max-w-xl mx-auto text-left space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Nama"
            className="w-full p-3 rounded-md bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 rounded-md bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600"
            required
          />
          <textarea
            name="message"
            placeholder="Pesan"
            rows="4"
            className="w-full p-3 rounded-md bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 rounded-md transition"
          >
            Kirim Pesan
          </button>
        </form>
      </section>

      <footer className="bg-gray-900 py-6 text-white text-center">
        <span>Copyright &copy; { tahunSekarang } Rizki Cahya. All rights reserved.</span>
      </footer>
    </>
  )
}

export default App
