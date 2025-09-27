import React from "react";

export default function EduEx() {
    return (
        <section className="py-32 px-6 bg-white relative font-['Inter']">
            <div>
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-bold mb-6 font-['Poppins']" data-aos="fade-down">
                        <span className="text-gray-800">Educations & Experience</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
                </div>

                <div className="max-w-5xl mx-auto space-y-10">
                    <h3 className="text-2xl font-medium font-['Poppins']" data-aos="fade-up">
                        Educations
                    </h3>

                    <div className="flex items-start space-x-4" data-aos="fade-up">
                        <img src="/images/amikom-logo.png" alt="Circle" className="w-12 h-12 mt-4" />
                        <div>
                            <time className="mb-1 text-sm font-normal text-gray-500">2022 - Current</time>
                            <h3 className="text-lg font-semibold text-gray-900">Computer Science</h3>
                            <p className="text-base font-normal text-gray-600 mb-2">Universitas Amikom Yogyakarta</p>
                            <p className="text-sm text-gray-800">Currently pursuing a Bachelor's degree in Computer Science, focusing on programming, algorithms, databases, and web development. Actively involved in academic projects and hands-on assignments to strengthen problem-solving and software development skills.</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4" data-aos="fade-up">
                        <img src="/images/muhi-logo.png" alt="Circle" className="w-12 h-12 mt-4" />
                        <div>
                            <time className="mb-1 text-sm font-normal text-gray-500">2019 - 2022</time>
                            <h3 className="text-lg font-semibold text-gray-900">Software Engineering</h3>
                            <p className="text-base font-normal text-gray-600 mb-2">SMK Muhammadiyah 1 Yogyakarta</p>
                            <p className="text-sm text-gray-800">Completed a vocational program in Software Engineering, specializing in web and desktop application development. Studied software development lifecycle, database management, and object-oriented programming.</p>
                        </div>
                    </div>

                    <h3 className="text-2xl font-medium font-['Poppins']" data-aos="fade-up">
                        Experience
                    </h3>

                    <div className="flex items-start space-x-4" data-aos="fade-up">
                        <img src="/images/forum-asisten.png" alt="Circle" className="w-12 h-12 mt-4" />
                        <div>
                            <time className="mb-1 text-sm font-normal text-gray-500">February, 2025 - Current</time>
                            <h3 className="text-lg font-semibold text-gray-900">Laboratory Asistant</h3>
                            <p className="text-base font-normal text-gray-600 mb-2">Forum Asisten, Universitas Amikom Yogyakarta</p>
                            <p className="text-sm text-gray-800">Served as a Laboratory Assistant for Programming and Web Programming courses, guiding students through practical sessions, assisting in troubleshooting coding issues, and supporting lecturers in delivering hands-on learning materials.</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4" data-aos="fade-up">
                        <img src="/images/jogja-media-web.webp" alt="Circle" className="w-12 h-4 mt-4" />
                        <div>
                            <time className="mb-1 text-sm font-normal text-gray-500">February, 2021 - May, 2021</time>
                            <h3 className="text-lg font-semibold text-gray-900">Fullstack Web Developer</h3>
                            <p className="text-base font-normal text-gray-600 mb-2">Jogja Media Web</p>
                            <p className="text-sm text-gray-800">Interned as a Fullstack Web Developer, contributing to both frontend and backend development. Built and maintained responsive websites using HTML, CSS, JavaScript, and PHP, while working with a team to deliver client projects on time.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
