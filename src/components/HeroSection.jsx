import React from "react";
import fotoprofil from "../assets/profile-pic-3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function HeroSection() {
    return (
        <section id="home" className="py-6 bg-gradient-to-br from-white via-purple-50 to-pink-50 relative overflow-hidden">
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
                            <div className="relative z-10 w-80 h-80 sm:w-56 sm:h-56 md:w-100 md:h-100 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                                <img src={fotoprofil} alt="Foto Profil" className="w-full h-full object-cover" />
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
                                <p className="text-xl text-gray-600 font-medium font-['Inter']">Computer Science • Software Engineering</p>
                            </div>
                        </div>

                        <p className="text-lg text-gray-600 leading-relaxed max-w-lg font-['Inter']">Hello there, my name is Rizki Cahya Ramdani. I am a Computer Science student at Amikom University in Yogyakarta who is interested in the world of IT, such as Software engineering.</p>

                        <div className="flex items-center space-x-4 text-purple-600 font-medium font-['Inter']">
                            <span className="text-2xl">📍</span>
                            <span>Yogyakarta, Indonesia</span>
                        </div>

                        <div className="flex space-x-4">
                            <a href="https://drive.google.com/drive/folders/1LnGOlMOeaopcuz5u5mmCuQ2_zDIi-kK_?usp=sharing" target="_blank" className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 font-['Inter']">
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
                            <a href="https://github.com/rizkicahyaa" className="text-purple-600 hover:text-pink-600 transition-all duration-300 hover:scale-110" target="_blank" rel="noopener noreferrer">
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
    );
}
