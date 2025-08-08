import React from "react";
import { skills } from "./skillsData.jsx";

export default function Skills() {
    return (
        <section className="py-32 bg-white relative">
            <div>
                <div className="text-center mb-20">
                    <h2
                        className="text-4xl font-bold mb-6 font-['Poppins']"
                        data-aos="fade-down"
                    >
                        {/*<span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">My</span>*/}
                        <span className="text-gray-800">Technology</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
                </div>

                <div className="flex flex-wrap justify-center gap-10 max-w-6xl mx-auto">
                    {skills.map((skill, index) => (
                        <div className="group" key={index}>
                            <div
                                className="bg-white p-4 rounded-full shadow-2xl transition-all duration-500 group-hover:shadow-purple-200 group-hover:-translate-y-4 group-hover:scale-110"
                                data-aos="flip-right"
                                data-aos-delay={skill.delay}
                            >
                                <img
                                    src={skill.icon}
                                    alt={skill.name}
                                    className="w-12 h-12"
                                    title={skill.name}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};