const ProjectCard = ({ title, description, tech, link, delay }) => {
    return (
        <div className="group relative" data-aos="flip-left" data-aos-delay={delay}>
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-4 hover:rotate-1">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 font-['Poppins']">{title}</h3>
                    <p className="text-gray-600 mb-6 font-['Inter']">{description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {tech.map((t, index) => (
                            <span key={index} className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full font-['Inter']">
                                {t}
                            </span>
                        ))}
                    </div>
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-6 py-3 rounded-full text-sm transition duration-300 hover:shadow-lg font-['Inter']"
                    >
                        View Project
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
