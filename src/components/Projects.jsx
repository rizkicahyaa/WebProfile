import React from "react";
import ProjectCard from "./projectCard.jsx";
import { projects } from "./projectsData.jsx";

const Projects = () => {
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
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
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

export default Projects;