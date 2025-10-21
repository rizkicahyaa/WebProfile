const ProjectCard = ({ title, description, tech, link, delay, image }) => {
    return (
        <div className="group relative h-full" data-aos="flip-left" data-aos-delay={delay}>
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-4 hover:rotate-1 flex flex-col h-full">
                {image && (
                    <div className="p-2">
                        <img src={image} alt={title} className="w-full h-48 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105" />
                    </div>
                )}

                <div className="relative z-10 p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 font-['Poppins']">{title}</h3>
                    <p className="text-gray-600 mb-6 font-['Inter'] flex-grow">{description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {tech.map((t, index) => (
                            <span key={index} className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full font-['Inter']">
                                {t}
                            </span>
                        ))}
                    </div>
                    <a href={link} target="_blank" rel="noopener noreferrer" className="self-start bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-6 py-3 rounded-full text-sm transition duration-300 hover:shadow-lg font-['Inter']">
                        View Project
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
