import { useRef } from 'react'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import './App.css'
import fotoprofil from './assets/profile-pic.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faLinkedin, faGithub, faHtml5, faCss3Alt, faJs, faReact, faPhp, faPython } from '@fortawesome/free-brands-svg-icons'

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

  return (
    <>

    <nav className="bg-gray-900 sticky top-0 z-50 shadow-lg p-4">
      <div className="flex justify-around items-center">
        {/* Logo */}
        <div className="text-white text-2xl">
          <h2>Rizki Cahya</h2>
        </div>

        {/* Menu */}
        <div className={`flex space-x-6 ${isMenuOpen ? 'block' : 'hidden'} md:flex md:space-x-8`}>
          <a href="#home" className="text-white hover:text-gray-300">Home</a> 
          <a href="https://medium.com/@rizki.cahya03" target="_blank" className="text-white hover:text-gray-300">Blog</a>
          <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
        </div>

        {/* Hamburger Icon */}
        <button onClick={toggleMenu} className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </nav>

      <section id="home" className="bg-gray-950 px-6 py-16 flex flex-col items-center text-center text-white">
        <img
          src={fotoprofil}
          alt="Foto Profil"
          className="w-40 h-40 rounded-full border-4 border-purple-600 shadow-xl"
        />
        <h1 className="text-4xl font-bold mt-6">Rizki Cahya Ramdani</h1>
        <p className="text-purple-600 dark:text-purple-400 text-lg mt-2">Informatics Student • Frontend Developer</p>
        <p className="mt-6 mb-2 max-w-3xl text-lg leading-relaxed">
          Assalamu'alaikum perkenalkan nama saya Rizki Cahya Ramdani, saya adalah mahasiswa Informatika dari Universitas Amikom Yogyakarta yang tertarik pada dunia IT seperti Full-stack development, UI/UX design, dan Graphic design.
        </p>
        <p className="mt-2 text-gray-500 dark:text-gray-300">📍 Yogyakarta, Indonesia</p>

        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <a
            href="https://drive.google.com/drive/folders/1LnGOlMOeaopcuz5u5mmCuQ2_zDIi-kK_?usp=sharing" target="_blank"
            className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full text-white font-medium transition duration-300"
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

      <section id="technology" className="text-center bg-gray-900 text-white py-32">
        <h2 className="text-3xl font-bold mb-8">Technology</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center max-w-5xl mx-auto">
          <FontAwesomeIcon icon={faHtml5} className="text-orange-500 text-7xl" title="HTML5" />
          <FontAwesomeIcon icon={faCss3Alt} className="text-blue-500 text-7xl" title="CSS3" />
          <FontAwesomeIcon icon={faJs} className="text-yellow-400 text-7xl" title="JavaScript" />
          <FontAwesomeIcon icon={faReact} className="text-cyan-400 text-7xl" title="React" />
          <FontAwesomeIcon icon={faPhp} className="text-indigo-500 text-7xl" title="PHP" />
          <FontAwesomeIcon icon={faPython} className="text-blue-300 text-7xl" title="Python" />
        </div>
      </section>

      <section id="contact" className="bg-gray-950 px-6 py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-6">Contact me</h2>
        <form ref={form} onSubmit={sendEmail} className="max-w-xl mx-auto text-left space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Nama"
            className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600"
            required
          />
          <textarea
            name="message"
            placeholder="Pesan"
            rows="4"
            className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600"
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
