import React from "react";

export default function Projects() {
    return (
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
    );
};