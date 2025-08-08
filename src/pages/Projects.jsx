import React from "react";
import ProjectCard from "./projectCard.jsx";
import { projects } from "./projectsData.jsx";

const Projects = () => {
    return (
        <section id="project" className="py-12 bg-gradient-to-br from-purple-50 to-pink-50 relative">
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
        </section>
    );
};

export default Projects;